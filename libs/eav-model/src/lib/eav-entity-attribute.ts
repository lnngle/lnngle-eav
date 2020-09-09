import { EavAttribute } from './eav-attribute';
import { BaseIdModel } from './base-id-model';
export class EavEntityAttribute extends BaseIdModel {
  public entityId: string;
  public attribute: EavAttribute;
  public orderBy: number;
  public isShowTable: boolean;
}
