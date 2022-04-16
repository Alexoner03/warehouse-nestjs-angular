import {BadRequestException, Inject, Injectable, NotFoundException, UnprocessableEntityException} from '@nestjs/common';
import { CreateProductDto } from '../../dto/create-product.dto';
import { UpdateProductDto } from '../../dto/update-product.dto';
import {IProductService} from "../contracts/product.service.interface";
import {Product} from "../../entities/product.entity";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from 'mongoose'
import {IWarehouseService, WAREHOUSE_SERVICE} from "../../../warehouse/service/contracts/warehouse.service.interface";

@Injectable()
export class ProductService implements IProductService {

  constructor(
      @InjectModel(Product.name) private readonly productModel: Model<Product>,
      @Inject(WAREHOUSE_SERVICE) private readonly wareHouseService: IWarehouseService
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
      let product = new this.productModel(createProductDto);
      await this.checkWarehouse(createProductDto.warehouse, createProductDto.name)
      const _product = await product.save()
      await this.wareHouseService.addProduct(_product._id.toString(),createProductDto.warehouse )
      return product
  }

  findAll(): Promise<Product[]> {
    return this.productModel.find({}).populate('warehouse', "-products").exec();
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productModel.findById(id).populate('warehouse',"-products").exec()

    if(!product){
      throw new NotFoundException(`Product ${id} not found`);
    }

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.productModel.findByIdAndUpdate(id, {$set : UpdateProductDto}, { new : true}).exec();

    if(!product){
      throw new NotFoundException(`Product ${id} not found`);
    }

    return product;
  }

  async remove(id: string, warehouse_id: string): Promise<void> {
    await this.productModel.findByIdAndDelete(id,{new : true}).exec();
    await this.wareHouseService.removeProduct(id, warehouse_id)
  }

  private async checkWarehouse(id: string, name: string): Promise<void> {
    const warehouse = await this.wareHouseService.findOne(id);

    if(!warehouse) {
      throw new NotFoundException(`Warehouse ${id} not found`)
    }

    const existsInWarehouse = warehouse.products.some((p) => p.name === name)

    if(existsInWarehouse){
      throw new UnprocessableEntityException(`Product ${name} already exists in warehouse ${id}`)
    }
  }


}
