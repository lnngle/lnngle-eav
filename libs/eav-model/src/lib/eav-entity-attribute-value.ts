import { BaseIdModel } from './base-id-model';
export class EavEntityAttributeValue extends BaseIdModel {
  public entityId: string;
  public entityCode: string;
  public values: Map<string, any> = new Map<string, any>();

  setValues(json: string): void {
    this.values = JSON.parse(json);
  }
}
