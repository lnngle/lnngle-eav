
import { EavAttribute } from './eav-attribute';

describe('EavAttribute', () => {
  let eavAttribute: EavAttribute;
  const id: number = 1;
  const code: string = "ea-code-1";

  beforeAll(async () => {
    eavAttribute = new EavAttribute();
    eavAttribute.id = id;
    eavAttribute.code = code;
  });

  it('test EavAttribute instance and method', () => {
    expect(eavAttribute).toBeInstanceOf(EavAttribute);
    expect(eavAttribute.id).toEqual(id);
    expect(eavAttribute.code).toEqual(code);
  });
});
