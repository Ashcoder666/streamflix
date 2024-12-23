import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true }) 
export class UserPersonalization extends Document {

  @Prop({ type: Types.ObjectId, required: true })
  user_id: string;

  @Prop({ type: String, required: true })
  birth_year: string;

  @Prop({ type: [Types.ObjectId], ref: 'Category', default: [] }) 
  favorite_categories_ids: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'Channel', default: [] }) 
  favorite_channels_ids: Types.ObjectId[];

//   @Prop({ type: [Types.ObjectId], ref: 'Language', default: [] }) 
//   favorite_language_ids: Types.ObjectId[];

  @Prop({ type: String, default: null })
  theme_preference: string;

  @Prop({ type: String, default: null })
  country: string;
}


export const UserPersonalizationSchema = SchemaFactory.createForClass(UserPersonalization);
