export abstract class TextsStorage {
  abstract find(): Promise<string[]>;
  abstract create(text: string): Promise<void>;
}
