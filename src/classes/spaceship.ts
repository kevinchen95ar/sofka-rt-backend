import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity()
export abstract class Spaceship {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  name: string;
  @CreateDateColumn()
  activityStart: Date;
  @CreateDateColumn()
  activityEnd?: Date;
  @Column()
  active: Boolean;
  @Column()
  power: number;
  @Column()
  pushPower: number;
  @Column()
  fuel: string;
  @Column()
  weight: number;
  @Column()
  description: string;

  constructor(
    name: string,
    activityStart: Date,
    activityEnd: Date,
    active: Boolean,
    power: number,
    pushPower: number,
    fuel: string,
    weight: number,
    description: string
  ) {
    (this.name = name),
      (this.activityStart = activityStart),
      (this.activityEnd = activityEnd),
      (this.active = active),
      (this.power = power),
      (this.pushPower = pushPower),
      (this.fuel = fuel),
      (this.weight = weight),
      (this.description = description);
  }

  abstract presentation(): string;
  abstract purpose(): string;
}
