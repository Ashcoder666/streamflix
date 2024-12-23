import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract JWT from Bearer token
      ignoreExpiration: false, // Reject expired tokens
      secretOrKey: process.env.JWT_SECRET || 'yourSecretKey', // Replace with your secret key
    });
  }

  async validate(payload: any) {
    // Payload is the decoded JWT content
    return { userId: payload.sub, username: payload.username }; // Add user info to the request
  }
}