import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

@Controller('streamflix/auth')
export class AuthController {
@Post('register')
async userRegistration(@Body() regsiterDto:RegisterDto){
    
}   
}
