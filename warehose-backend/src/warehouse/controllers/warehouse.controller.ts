import {Controller, Get, Post, Body, Patch, Param, Inject} from '@nestjs/common';
import { CreateWarehouseDto } from '../dto/create-warehouse.dto';
import { UpdateWarehouseDto } from '../dto/update-warehouse.dto';
import {IWarehouseService, WAREHOUSE_SERVICE} from "../service/contracts/warehouse.service.interface";
import {MongoIdPipe} from "../../common/pipes/mongo-id.pipe";

@Controller('warehouse')
export class WarehouseController {
  constructor(@Inject(WAREHOUSE_SERVICE) private readonly warehouseService: IWarehouseService) {}

  @Post()
  create(@Body() createWarehouseDto: CreateWarehouseDto) {
    return this.warehouseService.create(createWarehouseDto);
  }

  @Get()
  findAll() {
    return this.warehouseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',MongoIdPipe) id: string) {
    return this.warehouseService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',MongoIdPipe) id: string, @Body() updateWarehouseDto: UpdateWarehouseDto) {
    return this.warehouseService.update(id, updateWarehouseDto);
  }
}
