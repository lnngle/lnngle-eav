import { EavAttributeType } from './eav-attribute-type';
import { BaseModel } from './base-model';
export class EavAttribute extends BaseModel {
  public isRequired: boolean;
  public isUnique: boolean;
  public type: EavAttributeType;
}
