import {Warehouse} from "../../warehouse/entities/warehouse.entity";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import mongoose, { Document } from 'mongoose'

@Schema()
export class Product extends Document{
    @Prop({type: String, required : true,unique : true})
    name : string;

    @Prop({type: Number, required : true})
    quantity : number;

    @Prop({
        type : mongoose.Types.ObjectId,
        ref : 'Warehouse',
        required : true,
    })
    warehouse : Warehouse;
}

export const ProductSchema = SchemaFactory.createForClass(Product)