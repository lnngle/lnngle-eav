import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import DbModule from '../../database/database.test.module';
import { EavAttributeService } from './eav-attribute.service';
import { EavAttribute } from '../model/eav-attribute.entity';

const eavAttribute = {
  id: 1000000,
  code: 'attribute code for test',
};

const wait = time => new Promise(resolve => setTimeout(() => resolve(time), time));

describe('EavAttributeService', () => {
  let eavAttributeService: EavAttributeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        DbModule({
          name: (new Date().getTime() * Math.random()).toString(16), // <-- This is to have a "unique" name for the connection
        }),
        TypeOrmModule.forFeature([
          EavAttribute,
        ]),
      ],
      providers: [
        EavAttributeService,
      ],
    }).compile();

    eavAttributeService = module.get<EavAttributeService>(EavAttributeService);
  });

  it('should be defined', () => {
    expect(EavAttributeService).toBeDefined();
  });

  it('should return a new entity', () => {
    const myEavAttribute = eavAttributeService.create(eavAttribute);

    expect(myEavAttribute).toEqual(eavAttribute);
    expect(myEavAttribute instanceof EavAttribute).toBe(true);
  });
});
