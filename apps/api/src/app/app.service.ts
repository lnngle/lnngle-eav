import { Injectable } from '@nestjs/common';
import { Message } from '@lnngle-eav/api-interfaces';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {

  constructor(private configService: ConfigService) {
  }

  getData(): Message {
    console.debug('1111111111');
    console.debug(this.configService);
    console.debug(this.configService.get('aa'));
    console.debug(this.configService.get('type'));
    return { message: 'Welcome to api!' };
  }
}
