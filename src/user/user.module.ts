import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UserSchema } from './user.entity';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:Users.name,schema:UserSchema}
    ])
  ],
  providers: [UserService],
  exports:[MongooseModule]
})
export class UserModule {}
