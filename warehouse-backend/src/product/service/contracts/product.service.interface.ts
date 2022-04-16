import {CreateProductDto} from "../../dto/create-product.dto";
import {Product} from "../../entities/product.entity";
import {UpdateProductDto} from "../../dto/update-product.dto";

export const PRODUCT_SERVICE = 'PRODUCT_SERVICE';

export interface IProductService {
    create(createProductDto: CreateProductDto) : Promise<Product>;
    findAll() : Promise<Product[]>;
    findOne(id: string) : Promise<Product>
    update(id: string, updateProductDto: UpdateProductDto) : Promise<Product>;
    remove(id: string, warehouse_id: string) : Promise<void>
}