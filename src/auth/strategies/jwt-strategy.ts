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
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),  // Extract JWT from Authorization header
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'yourSecretKey',  // Secret key from environment variables
    });
  }

  async validate(payload: any) {
    console.log('Decoded Payload:', payload);  // Log the decoded payload for debugging
    const user = await this.userModel.findById(payload.userId);  // Adjust based on your database logic
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;  // Return the user, which will be attached to the request object
  }
}
