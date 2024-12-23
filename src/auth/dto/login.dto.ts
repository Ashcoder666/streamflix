import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    usernameoremail

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password
}

// export class SendVerificationDto{
//     @IsNotEmpty()
//     @IsString()
//     email
// }