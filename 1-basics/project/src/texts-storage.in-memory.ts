import { Injectable } from '@nestjs/common';
import { TextsStorage } from './texts-storage';

@Injectable()
export class TextsStorageInMemory implements TextsStorage {
  private texts: string[] = [];

  async find() {
    return this.texts;
  }

  async create(text: string) {
    this.texts = [...this.texts, text];
  }
}
