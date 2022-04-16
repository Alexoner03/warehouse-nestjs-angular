import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import mongoose, {Document} from "mongoose";
import {Product} from "../../product/entities/product.entity";

@Schema()
export class Warehouse extends Document {

    constructor() {
        super();
        console.log(Product.name)
    }

    @Prop({type : String, required : true})
    name: string

    @Prop({type : String, required : true})
    address: string

    @Prop({
        type : [mongoose.Types.ObjectId],
        ref : 'Product',
        default : []
    })
    products : mongoose.Types.Array<Product>;
}

export const WarehouseSchema = SchemaFactory.createForClass(Warehouse);
