import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Users extends Document{
    @Prop()
    firstname:string

    @Prop()
    lastname:string

    @Prop()
    username:string

    @Prop()
    email:string

    @Prop()
    password:string
}

export const UserSchema = SchemaFactory.createForClass(Users);