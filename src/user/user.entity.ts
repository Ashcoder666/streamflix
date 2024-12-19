import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";


type CreatorAccountDetails = {
    _id: Types.ObjectId,
    channel_name: string,
    status:boolean,
}

enum UserType {
    CREATOR = 'creator',
    CONSUMER = 'consumer'
   }
@Schema()
export class Users extends Document{
    @Prop({ required: true })
    firstname:string

    @Prop({ required: true })
    lastname:string

    @Prop({ required: true , unique:true })
    username:string

    @Prop({ required: true , unique:true})
    email:string

    @Prop({ required: true })
    password:string

    @Prop({ default: true })
    isEmailVerified?:boolean

    @Prop({default : null , type:Object})
    creatorAccount: CreatorAccountDetails | null

    @Prop({ default: UserType.CONSUMER })
    current_userType: UserType;    

    @Prop({default:false})
    isBlocked:boolean

    @Prop({default:true})
    status:boolean
  


    //channel module need to be added 
    // catrgory module
    // content module
    
    // user_personalisation_object_for_seeing_homepage_videos

}

export const UserSchema = SchemaFactory.createForClass(Users);