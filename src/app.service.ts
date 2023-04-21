import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello, Welcome to the world of the Backend development! 🤯';
  }

  getMessage(): string {
    return 'You must Complete this backend server completely!';
  }

  getWelcomeMessage(): string {
    return "Starting is easy but Finishing is Hard My Boy. It's the Truth";
  }
}
