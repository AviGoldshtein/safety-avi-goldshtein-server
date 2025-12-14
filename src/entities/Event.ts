import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Image } from "./Image";

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  activityType: string;

  @Column({ type: "varchar", length: 255 })
  category: string;

  @Column({ type: "json", nullable: true })
  currentLocation: { lat: number; lng: number } | null;

  @Column({ type: "date" })
  eventDateTime: string;

  @Column({ type: "varchar", length: 255 })
  eventTime: string;

  @Column({ type: "text" })
  eventDescription: string;

  @Column({ type: "varchar", length: 255 })
  eventSeverity: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  injuriesLevel: string | null;

  @Column({ type: "varchar", length: 255 })
  location: string;

  @Column({ type: "varchar", length: 255 })
  results: string;

  @Column({ type: "varchar", length: 255 })
  subUnits: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  typeLocation: string | null;

  @Column({ type: "varchar", length: 255 })
  unitActivityType: string;

  @Column({ type: "varchar", length: 255 })
  weather: string;

  @OneToMany(() => Image, image => image.event)
  images: Image[];
}




// {
//   "activityType" : "הכשרה" ,
//   "category": "מזג-אוויר",
//   "currentLocation": null,
//   "eventDateTime": "2025-12-04",
//   "eventDescription": " שאול קימל הגיבור",
//   "eventSeverity": "בינוני",
//   "eventTime": "19:45",
//   "injuriesLevel": null,
//   "location": "בסיס",
//   "results": "א.נ.א.נ (אין נפגעים, אין נזק) ",
//   "subUnits": "ccccccccc",
//   "typeLocation": null,
//   "unitActivityType": "אימונים",
//   "weather": "ערפל"
// }