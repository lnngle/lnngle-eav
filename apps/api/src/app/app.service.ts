import { Injectable } from '@nestjs/common';
import { Message } from '@lnngle-eav/api-interfaces';

@Injectable()
export class AppService {

  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
