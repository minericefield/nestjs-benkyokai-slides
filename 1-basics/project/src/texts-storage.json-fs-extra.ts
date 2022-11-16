import { readJSON, writeJSON } from 'fs-extra';
import { Injectable } from '@nestjs/common';
import { TextsStorage } from './texts-storage';
import { resolve } from 'path';

@Injectable()
export class TextsStorageJsonFsExtra implements TextsStorage {
  private readonly STORAGE_PATH = resolve(__dirname, 'texts-json-storage.json');

  async find() {
    return readJSON(this.STORAGE_PATH);
  }

  async create(text: string) {
    const currentTexts = await readJSON(this.STORAGE_PATH);
    await writeJSON(this.STORAGE_PATH, [...currentTexts, text]);
  }
}
