import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import * as path from 'path';

const ENV = 'test';
console.debug(ENV);
console.debug(path.resolve(__dirname, 'env', !ENV ? '.env' : `.env.${ENV}`));
console.debug(path.resolve(__dirname, '*/**!(*.d).config.{ts,js}'));
console.debug(path.resolve(__dirname, '*/**!(*.d).env.dev'));

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvVars: true,
      envFilePath: [
        path.resolve(__dirname, '*/**!(*.d).env.dev')
      ],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
