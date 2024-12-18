import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class EmailVerificationRequests extends Document{
    @Prop({required:true})
    email:string

    @Prop({required:true})
    token:string

}

export const EmailVerificationRequestSchema = SchemaFactory.createForClass(EmailVerificationRequests)