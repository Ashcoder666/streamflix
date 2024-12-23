import { Body, Controller,Post, UseGuards } from '@nestjs/common';
import { UserPersonalizationDto } from './dto/user-personalisation.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('streamflix/user')

export class UserController {
   
@Post('personalisation')
async createUserPersonalization(@Body() personlisationDto:UserPersonalizationDto){
    
}
}
