import { IsNotEmpty } from "class-validator";

export class CreateWarehouseDto {
    @IsNotEmpty()
    readonly name : string;

    @IsNotEmpty()
    readonly address: string;
}
