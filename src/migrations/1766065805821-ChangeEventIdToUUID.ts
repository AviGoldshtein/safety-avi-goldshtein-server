import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeEventIdToUUID1766065805821 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        // Ensure UUID generation is available
        await queryRunner.query(`
            CREATE EXTENSION IF NOT EXISTS "pgcrypto"
        `);

        // 1. Drop existing foreign key from image -> event
        await queryRunner.query(`
            ALTER TABLE "image"
            DROP CONSTRAINT "FK_042895d4be7cf838f0f89949705"
        `);

        // 2. Add new UUID column to event (do NOT remove old id yet)
        await queryRunner.query(`
            ALTER TABLE "event"
            ADD COLUMN "id_uuid" uuid DEFAULT gen_random_uuid()
        `);

        // 3. Add temporary UUID column to image
        await queryRunner.query(`
            ALTER TABLE "image"
            ADD COLUMN "eventId_uuid" uuid
        `);

        // 4. Copy relations using OLD integer id
        await queryRunner.query(`
            UPDATE "image" i
            SET "eventId_uuid" = e."id_uuid"
            FROM "event" e
            WHERE i."eventId" = e."id"
        `);

        // 5. Drop old foreign key integer column
        await queryRunner.query(`
            ALTER TABLE "image"
            DROP COLUMN "eventId"
        `);

        // 6. Rename UUID column to eventId
        await queryRunner.query(`
            ALTER TABLE "image"
            RENAME COLUMN "eventId_uuid" TO "eventId"
        `);

        // 7. Drop old primary key on event
        await queryRunner.query(`
            ALTER TABLE "event"
            DROP CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614"
        `);

        // 8. Drop old integer id
        await queryRunner.query(`
            ALTER TABLE "event"
            DROP COLUMN "id"
        `);

        // 9. Rename UUID id column
        await queryRunner.query(`
            ALTER TABLE "event"
            RENAME COLUMN "id_uuid" TO "id"
        `);

        // 10. Create new primary key
        await queryRunner.query(`
            ALTER TABLE "event"
            ADD CONSTRAINT "PK_event_id" PRIMARY KEY ("id")
        `);

        // 11. Recreate foreign key with explicit name
        await queryRunner.query(`
            ALTER TABLE "image"
            ADD CONSTRAINT "FK_image_event"
            FOREIGN KEY ("eventId")
            REFERENCES "event"("id")
            ON DELETE CASCADE
        `);
    }


    public async down(queryRunner: QueryRunner): Promise<void> {

        // 1. Drop foreign key
        await queryRunner.query(`
            ALTER TABLE "image"
            DROP CONSTRAINT "FK_image_event"
        `);

        // 2. Add integer id back to event
        await queryRunner.query(`
            ALTER TABLE "event"
            ADD COLUMN "id_int" serial
        `);

        // 3. Add integer column back to image
        await queryRunner.query(`
            ALTER TABLE "image"
            ADD COLUMN "eventId_int" integer
        `);

        // 4. Restore relations
        await queryRunner.query(`
            UPDATE "image" i
            SET "eventId_int" = e."id_int"
            FROM "event" e
            WHERE i."eventId" = e."id"
        `);

        // 5. Drop UUID foreign key column
        await queryRunner.query(`
            ALTER TABLE "image"
            DROP COLUMN "eventId"
        `);

        // 6. Rename integer column back
        await queryRunner.query(`
            ALTER TABLE "image"
            RENAME COLUMN "eventId_int" TO "eventId"
        `);

        // 7. Drop UUID PK
        await queryRunner.query(`
            ALTER TABLE "event"
            DROP CONSTRAINT "PK_event_id"
        `);

        // 8. Drop UUID id
        await queryRunner.query(`
            ALTER TABLE "event"
            DROP COLUMN "id"
        `);

        // 9. Rename integer id back
        await queryRunner.query(`
            ALTER TABLE "event"
            RENAME COLUMN "id_int" TO "id"
        `);

        // 10. Restore original PK
        await queryRunner.query(`
            ALTER TABLE "event"
            ADD CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id")
        `);

        // 11. Restore foreign key
        await queryRunner.query(`
            ALTER TABLE "image"
            ADD CONSTRAINT "FK_042895d4be7cf838f0f89949705"
            FOREIGN KEY ("eventId")
            REFERENCES "event"("id")
            ON DELETE CASCADE
        `);
    }
}
