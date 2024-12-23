import { Body, Controller,Post, Request, UseGuards } from '@nestjs/common';
import { UserPersonalizationDto } from './dto/user-personalisation.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Public } from 'src/common/public/public.decorator';

@UseGuards(JwtAuthGuard)
@Controller('streamflix/user')

export class UserController {

@Public()
@Post('personalisation')
async createUserPersonalization( @Request() req: any,){
    console.log('Headers:', req.headers); // Log headers to check if token is being sent
    console.log('User from Token:', req.user); 
}
}
