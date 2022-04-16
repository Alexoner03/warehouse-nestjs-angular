import { Module } from '@nestjs/common';
import { WarehouseService } from './service/implementations/warehouse.service';
import { WarehouseController } from './controllers/warehouse.controller';
import {WAREHOUSE_SERVICE} from "./service/contracts/warehouse.service.interface";
import {MongooseModule} from "@nestjs/mongoose";
import {Warehouse, WarehouseSchema} from "./entities/warehouse.entity";

@Module({
  controllers: [WarehouseController],
  providers: [
    {
      useClass : WarehouseService,
      provide : WAREHOUSE_SERVICE
    }
  ],
  imports: [
    MongooseModule.forFeature([
      {
        name: Warehouse.name,
        schema: WarehouseSchema
      }
    ])
  ],
  exports : [WAREHOUSE_SERVICE]
})
export class WarehouseModule {}
