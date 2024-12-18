import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

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

    // is_creator_approved
    // is_blocked
    // status
    //consumer_account_status
    //creator account status
    //selected_account


    //channel module need to be added 
    // catrgory module
    // content module
    

}

export const UserSchema = SchemaFactory.createForClass(Users);