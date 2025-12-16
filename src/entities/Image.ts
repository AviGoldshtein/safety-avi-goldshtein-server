import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { Event } from "./Event";

@Entity()
export class Image {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Event, event => event.images, { onDelete: "CASCADE" })
  event: Event;

  @Column()
  filename: string;

  @Column()
  mimetype: string;

  @Column()
  size: number;

  @CreateDateColumn()
  createdAt: Date;
}
