import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  getMessage(): string {
    return this.appService.getMessage();
  }

  @Get('/welcomeMessage')
  getWelcomeMessage(): string {
    return this.appService.getWelcomeMessage();
  }
}
