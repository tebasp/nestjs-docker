import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      response: 'Hello',
    };
  }

  getWorld() {
    return {
      response: 'World',
    };
  }
}
