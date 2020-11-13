import { ConfigService } from '@nestjs/config';
import { Test } from '@nestjs/testing';

describe('test configuration parameter', () => {

  let configService: ConfigService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [ConfigService],
    }).compile();

    configService = app.get<ConfigService>(ConfigService);
  });

  describe('Test development environment parameters', () => {
    it('configService is not null', () => {
      expect(configService).not.toBeNull;
    });

    /* it('all typeorm parameters is right', () => {
      // console.debug(process.env);
      expect(configService.get<string>('TYPEORM_TYPE')).toEqual('mongodb');
    }); */
  });

});
