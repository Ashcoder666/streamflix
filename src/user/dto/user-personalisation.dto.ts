import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsArray, ArrayNotEmpty, IsOptional, IsMongoId } from "class-validator";

export class UserPersonalizationDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    birth_year: string;

    @ApiProperty()
    @IsOptional()
    @IsArray()
    @ArrayNotEmpty()
    @IsMongoId({ each: true })
    favorite_categories_ids: string[];

    @ApiProperty()
    @IsOptional()
    @IsArray()
    // @ArrayNotEmpty()
    @IsMongoId({ each: true })
    favorite_channels_ids: string[];

    @ApiProperty()
    @IsOptional()
    @IsArray()
    // @ArrayNotEmpty()
    @IsMongoId({ each: true })
    favorite_language_ids: string[];

    @ApiProperty()
    @IsOptional()
    @IsString()
    theme_preference: string; 

    // @IsOptional()
    // @IsString()
    // notification_preference: string; 

    @ApiProperty()
    @IsOptional()
    @IsString()
    country: string; 
}
