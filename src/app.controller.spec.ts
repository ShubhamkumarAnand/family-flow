import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe(
        'Hello, Welcome to the world of the Backend development! 🤯',
      );
    });
  });
  describe('message', () => {
    it('should return "Message String"', () => {
      expect(appController.getMessage()).toBe(
        'You must Complete this backend server completely!',
      );
    });
  });
  describe('welcomeMessage', () => {
    it('should return "Welcome Message String"', () => {
      expect(appController.getWelcomeMessage()).toBe(
        "Starting is easy but Finishing is Hard My Boy. It's the Truth",
      );
    });
  });
});
