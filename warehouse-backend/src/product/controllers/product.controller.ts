import {Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import {IProductService, PRODUCT_SERVICE} from "../service/contracts/product.service.interface";
import {MongoIdPipe} from "../../common/pipes/mongo-id.pipe";

@Controller('product')
export class ProductController {

  constructor(
      @Inject(PRODUCT_SERVICE)
      private readonly productService: IProductService
  ) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',MongoIdPipe) id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id/warehouse/:warehouseid')
  delete(
      @Param('id',MongoIdPipe) id: string,
      @Param('warehouseid',MongoIdPipe) warehouseId: string,
  ) {
    return this.productService.remove(id, warehouseId);
  }
}
