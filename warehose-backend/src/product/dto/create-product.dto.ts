import {IsMongoId, IsNotEmpty, Min} from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    readonly name : string;

    @IsNotEmpty()
    @Min(1)
    readonly quantity: number;

    @IsNotEmpty()
    @IsMongoId()
    readonly warehouse: string;
}
