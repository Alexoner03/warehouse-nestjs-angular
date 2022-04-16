import {CreateWarehouseDto} from "../../dto/create-warehouse.dto";
import {Warehouse} from "../../entities/warehouse.entity";
import {UpdateWarehouseDto} from "../../dto/update-warehouse.dto";


export const WAREHOUSE_SERVICE = 'WAREHOUSE_SERVICE';

export interface IWarehouseService {
    create(createWarehouseDto: CreateWarehouseDto) : Promise<Warehouse>;
    findAll() : Promise<Warehouse[]>;
    findOne(id: string) : Promise<Warehouse>
    update(id: string, updateWarehouseDto: UpdateWarehouseDto) : Promise<Warehouse>;
    addProduct(product_id: string, warehouse_id: string) : Promise<void>
    removeProduct(product_id: string, warehouse_id: string) : Promise<void>
}