import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema({ timestamps: true })
export class Category extends Document{
    @Prop()
    category_title:string

    @Prop()
    status:boolean

    @Prop()
    category_description:string

    @Prop()
    number_of_channels:string
// cron job will run to update both
    @Prop()
    number_of_videos:string

}

export const categorySchema = SchemaFactory.createForClass(Category)