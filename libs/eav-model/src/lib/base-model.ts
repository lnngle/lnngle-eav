import { BaseIdModel } from './base-id-model';
export abstract class BaseModel extends BaseIdModel {
  public code: string;
  public label: string;
}
