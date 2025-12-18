import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAltTextToImage1766056184962 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE image 
            ADD COLUMN alt_text TEXT
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE image
            DROP COLUMN alt_text
        `);
    }
}
