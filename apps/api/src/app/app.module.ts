import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

console.log("APP_ENV:" + process.env.APP_ENV);

const MY_ENV_FILENAME = process.env.APP_ENV === 'prod' ? 'prod.env' : 'dev.env';
console.log("MY_ENV_FILENAME:" + MY_ENV_FILENAME);

@Module({
  imports: [
    ConfigModule.forRoot({
      encoding: 'utf-8',
      isGlobal: true,
      ignoreEnvFile: false,
      envFilePath: ['.env', './apps/api/environment/' + MY_ENV_FILENAME],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly configService: ConfigService) {}
}
