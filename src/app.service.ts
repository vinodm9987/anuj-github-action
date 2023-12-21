import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('this is not');
    return 'Hello World!';
  }
}
