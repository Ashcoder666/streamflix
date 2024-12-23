import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../../user/user.service';  // Adjust based on your project structure
import { InjectModel } from '@nestjs/mongoose';
import { Users } from 'src/user/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(Users.name) private userModel: Model<Users>,
   
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
      ignoreExpiration: false,
      secretOrKey: process.env.ACCESS_TOKEN_SECRET ,  
    });
  }

  async validate(payload: any) {
    // console.log('JWT Payload:', payload); 
    // console.log(payload)
    if (!payload._doc || !payload._doc._id) {
      console.log('Invalid token payload');
      throw new UnauthorizedException('Invalid token');
    }
    const user = await this.userModel.findById(payload._doc._id);  
    if (!user) {
      throw new UnauthorizedException();
    }
    // console.log(user)
    return user;  // Return the user, which will be attached to the request object
    // return payload;
  }
}
