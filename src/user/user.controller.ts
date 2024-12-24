import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UserPersonalizationDto } from './dto/user-personalisation.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Public } from 'src/common/public/public.decorator';
import { UserService } from './user.service';
import { Roles } from 'src/common/roles/roles.decorator';

@UseGuards(JwtAuthGuard)
@Controller('streamflix/user')

export class UserController {
    constructor(
        private readonly userService:UserService
    ){}
    @Roles("USER")
    @Post('personalisation')
    async createUserPersonalization(@Body() userPersonalisationDto: UserPersonalizationDto,
     @Request() req: any,) {
        const user_id = req.user._id
        const newPersonalisation = await this.userService.savePersonalizationDetails(user_id,userPersonalisationDto)

        return {message:"Personalisation added successfully" , data:newPersonalisation}
    }

    @Get('home')
    async getUserHomepage (){
// suggested videos upto 100 , paginated by 10 + suggestion logic
// suggested channels
// based on personlisation create home page
    }
}
