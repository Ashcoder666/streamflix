import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { Users } from 'src/user/user.entity';

@Controller('streamflix/auth')
export class AuthController {
    constructor(
        private readonly authService:AuthService
    ){}
@Post('register')
@HttpCode(HttpStatus.CREATED)
async userRegistration(@Body() regsiterDto:RegisterDto):Promise<{message:string,data:Users}>{
    const newUser = await this.authService.createUser(regsiterDto)
    return { message: 'User created successfully' , data: newUser };
}   
}
