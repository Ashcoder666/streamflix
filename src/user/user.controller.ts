import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { UserPersonalizationDto } from './dto/user-personalisation.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Public } from 'src/common/public/public.decorator';
import { UserService } from './user.service';

@UseGuards(JwtAuthGuard)
@Controller('streamflix/user')

export class UserController {
    constructor(
        private readonly userService:UserService
    ){}
    // @Public()
    @Post('personalisation')
    async createUserPersonalization(@Body() userPersonalisationDto: UserPersonalizationDto,
     @Request() req: any,) {
        const user_id = req.user._id
        const newPersonalisation = await this.userService.savePersonalizationDetails(user_id,userPersonalisationDto)

        return {message:"Personalisation added successfully" , data:newPersonalisation}
    }
}
