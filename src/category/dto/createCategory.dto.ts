import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    category_title:string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    category_description:string
}