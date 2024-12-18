import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    
    @IsNotEmpty()
    @IsString()
    usernameoremail

    @IsNotEmpty()
    @IsString()
    password
}

// export class SendVerificationDto{
//     @IsNotEmpty()
//     @IsString()
//     email
// }