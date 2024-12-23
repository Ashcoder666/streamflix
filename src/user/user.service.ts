import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class UserService {
    async savePersonalizationDetails(user_id:Types.ObjectId,data){

    }
}
