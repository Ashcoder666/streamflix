import { IsEnum, IsNotEmpty, IsString } from "class-validator";

enum UserType {
   CREATOR = 'creator',
   CONSUMER = 'consumer'
  }
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

    @IsNotEmpty()
    @IsEnum(UserType)
    user_type

   // user can switch betweeen consumer and creator 



}