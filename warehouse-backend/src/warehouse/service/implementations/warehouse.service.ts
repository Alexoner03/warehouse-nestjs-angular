import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateWarehouseDto } from '../../dto/create-warehouse.dto';
import { UpdateWarehouseDto } from '../../dto/update-warehouse.dto';
import {IWarehouseService} from "../contracts/warehouse.service.interface";
import {Warehouse} from "../../entities/warehouse.entity";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";

@Injectable()
export class WarehouseService implements IWarehouseService {

  constructor(
      @InjectModel(Warehouse.name) private warehouseModel : Model<Warehouse>
  ){}


  create(createWarehouseDto: CreateWarehouseDto): Promise<Warehouse> {
    const product = new this.warehouseModel(createWarehouseDto)
    return product.save()
  }

  findAll(): Promise<Warehouse[]> {
    return this.warehouseModel.find().populate('products').exec()
  }

  async findOne(id: string): Promise<Warehouse> {
    const warehouse = await this.warehouseModel.findById(id).populate('products').exec();
    if(!warehouse){
      throw new NotFoundException(`Warehouse ${id} not found`)
    }
    return warehouse
  }

  async update(id: string, updateWarehouseDto: UpdateWarehouseDto): Promise<Warehouse> {
    const warehouse = await this.warehouseModel.findByIdAndUpdate(id,{$set : updateWarehouseDto}, {new: true}).exec();
    if(!warehouse){
      throw new NotFoundException(`Warehouse ${id} not found`)
    }
    return warehouse
  }

  async addProduct(product_id: string, warehouse_id: string): Promise<void> {
    const warehouse = await this.findOne(warehouse_id)
    warehouse.products.push(product_id)
    await warehouse.save()
  }

  async removeProduct(product_id: string, warehouse_id: string): Promise<void> {
    const warehouse = await this.findOne(warehouse_id)
    warehouse.set("products" , warehouse.products.filter(p => p._id.toString() !== product_id))
    await warehouse.save()
  }


}
