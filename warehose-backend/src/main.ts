import {NestFactory} from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {MongooseValidationError} from "./common/filters/filters.global";
import {MongoIdPipe} from "./common/pipes/mongo-id.pipe";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true
  }))
  app.useGlobalFilters(new MongooseValidationError())
  await app.listen(3000);
}
bootstrap();
