import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { Users } from 'src/user/user.entity';
import { LoginDto } from './dto/login.dto';

@Controller('streamflix/auth')
export class AuthController {
    constructor(
        private readonly authService:AuthService
    ){}
@Post('register')
@HttpCode(HttpStatus.CREATED)
async userRegistration(@Body() registerDto:RegisterDto):Promise<{message:string,data:Users}>{
    const newUser = await this.authService.createUser(registerDto)
    return { message: 'User created successfully' , data: newUser };
}  

// verify email - (if email not verified cant login)

@Post('login')
@HttpCode(HttpStatus.ACCEPTED)
async userLogin(@Body() loginDto:LoginDto):Promise<{message:string,token:string}>{

    const token = await this.authService.userLogin(loginDto)

    return {message:"Success",token}
}
}
