import { Injectable } from '@nestjs/common';
import { TextsStorage } from './texts-storage';

@Injectable()
export class AppService {
  constructor(private readonly textsStorage: TextsStorage) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createText(text: string) {
    await this.textsStorage.create(text);
  }

  async findTexts() {
    return this.textsStorage.find();
  }
}
