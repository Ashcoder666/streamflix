import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { UserPersonalizationDto } from './dto/user-personalisation.dto';
import { UserPersonalization } from './personalisation.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(UserPersonalization.name)
        private readonly userPersonalizationModel:Model<UserPersonalization>
    ){}
    async savePersonalizationDetails(
        user_id: Types.ObjectId,
        data: UserPersonalizationDto,
      ): Promise<UserPersonalization> {
        const newPersonalizationConfig = new this.userPersonalizationModel({
          user_id,
          ...data, 
        });
    
        return await newPersonalizationConfig.save(); 
      }
    }

