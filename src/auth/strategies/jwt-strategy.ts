import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
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
      secretOrKey: process.env.ACCESS_TOKEN_SECRET,
    });
  }

  async validate(payload: any) {

    if (payload.USER_TYPE === 'ADMIN' && payload.username === 'streamAdmin') {
      return {
          username: payload.username,
          USER_TYPE: payload.USER_TYPE,
      }; // Return admin user object
  }
    if (!payload._doc || !payload._doc._id) {
      throw new UnauthorizedException('Invalid token');
    }
    const user = await this.userModel.findById(payload._doc._id);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user; // Populates request.user
  }
}
