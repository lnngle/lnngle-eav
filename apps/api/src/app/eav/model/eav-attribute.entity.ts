import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IEavAttribute } from "../../../../../../libs/eav-model/src/lib/i-eav-attribute";

@Entity('eav_attribute')
export class EavAttribute implements IEavAttribute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;
}
