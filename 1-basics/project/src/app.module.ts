import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TextsStorage } from './texts-storage';
import { TextsStorageJsonFsExtra } from './texts-storage.json-fs-extra';
import { TextsStorageInMemory } from './texts-storage.in-memory';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: TextsStorage,
      useClass: TextsStorageJsonFsExtra,
    },
  ],
})
export class AppModule {}
