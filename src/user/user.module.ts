import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UserSchema } from './user.entity';
import { UserPersonalization, UserPersonalizationSchema } from './personalisation.entity';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:Users.name,schema:UserSchema},
      {name:UserPersonalization.name,schema:UserPersonalizationSchema}
    ])
  ],
  providers: [UserService],
  exports:[MongooseModule]
})
export class UserModule {}
