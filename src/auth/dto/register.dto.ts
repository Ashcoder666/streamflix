import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export class RegisterDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    firstname

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    lastname

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    username

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    email

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password

   //  @ApiProperty()
   //  @IsNotEmpty()
   //  @IsEnum(UserType)
   //  user_type 

   // user can switch betweeen consumer and creator 



}