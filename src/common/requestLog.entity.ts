import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class RequestLogs extends Document {
  @Prop({ required: true })
  method: string;

  @Prop({ required: true })
  endpoint: string;

  @Prop({ required: true })
  statusCode: number;

  @Prop()
  responseTime: number;

  @Prop({ default: new Date() })
  timestamp: Date;
}

export const RequestLogSchema = SchemaFactory.createForClass(RequestLogs);
