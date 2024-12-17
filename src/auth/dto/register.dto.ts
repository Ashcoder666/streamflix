import { IsNotEmpty, IsString } from "class-validator";


export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    firstname

    @IsNotEmpty()
    @IsString()
    lastname

    @IsNotEmpty()
    @IsString()
    username

    @IsNotEmpty()
    @IsString()
    email

    @IsNotEmpty()
    @IsString()
    password
}