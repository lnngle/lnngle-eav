import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class EavAttribute{
  @PrimaryGeneratedColumn()
    _id: number;
}
