import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class EavAttribute{
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  code: string;
}
