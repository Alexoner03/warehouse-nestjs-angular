import { Module } from '@nestjs/common';
import { ProductService } from './service/implementations/product.service';
import { ProductController } from './controllers/product.controller';
import {PRODUCT_SERVICE} from "./service/contracts/product.service.interface";
import {MongooseModule} from "@nestjs/mongoose";
import {Product, ProductSchema} from "./entities/product.entity";
import {WarehouseModule} from "../warehouse/warehouse.module";

@Module({
  controllers: [ProductController],
  providers: [
    {
      useClass: ProductService,
      provide: PRODUCT_SERVICE
    }
  ],
  imports: [
      MongooseModule.forFeatureAsync([
        {
          name: Product.name,
          useFactory : () => {
            const schema = ProductSchema;
            schema.plugin(require('mongoose-unique-validator'),{
              message : '{PATH} to be unique',
            });
            return schema;
          }
        }
      ]),
      WarehouseModule
  ]
})
export class ProductModule {}
