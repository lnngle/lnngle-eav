import { ConfigService } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';

describe('test configuration parameter', () => {

  let configService: ConfigService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      imports: [AppModule],
      providers: [ConfigService],
    }).compile();

    configService = app.get<ConfigService>(ConfigService);
  });

  describe('Test development environment parameters', () => {
    it('configService is not null', () => {
      expect(configService).not.toBeNull;
    });

    it('all typeorm parameters is right', () => {
      expect(configService.get<string>('aa')).toEqual('dev');
    });
  });

});
