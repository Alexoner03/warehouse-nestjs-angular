import { Module } from '@nestjs/common';
import { WarehouseModule } from './warehouse/warehouse.module';
import { ProductModule } from './product/product.module';
import {ConfigModule} from "@nestjs/config";
import { DatabaseModule } from './database/database.module';
import * as Joi from 'joi'
import config from './config'
@Module({
  imports: [
      ConfigModule.forRoot({
        envFilePath : '.env',
        load: [config],
        isGlobal: true,
        validationSchema : Joi.object({
            MONGO_USER : Joi.string().required(),
            MONGO_DATABASE : Joi.string().required(),
            MONGO_PASSWORD : Joi.string().required(),
            MONGO_HOST : Joi.string().required(),
            MONGO_PORT : Joi.number().required()
        })
      }),
      DatabaseModule,
      WarehouseModule,
      ProductModule,
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
