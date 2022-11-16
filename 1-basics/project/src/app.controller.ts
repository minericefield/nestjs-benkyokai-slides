import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('texts')
  async createText(@Body('text') text: string) {
    await this.appService.createText(text);
  }

  @Get('texts')
  async findTexts() {
    const texts = await this.appService.findTexts();
    return texts;
  }
}
