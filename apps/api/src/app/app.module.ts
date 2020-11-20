import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

console.debug("APP_ENV:" + process.env.APP_ENV);

const envFilePath = process.env.APP_ENV === 'dev' ?
join(process.cwd(), 'environment', 'dev.env') :
join(process.cwd(), 'environment', 'prod.env');
console.debug("envFilePath:" + envFilePath);

@Module({
  imports: [
    ConfigModule.forRoot({
      encoding: 'utf-8',
      isGlobal: true,
      ignoreEnvFile: false,
      envFilePath: ['.env', './apps/api/environment/dev.env'],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
