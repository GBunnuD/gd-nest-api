import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Prasad Golla Durga';
  }

  getAbout(): string{
    return 'This is an example of the nest.js presented by GD!'
  }
}
