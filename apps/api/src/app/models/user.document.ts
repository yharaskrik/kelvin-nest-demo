import { HydratedDocument } from 'mongoose';
import { User } from './user';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class UserSchema {
  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  username: string;

  @Prop({ type: String })
  password: string;
}

export const userSchema = SchemaFactory.createForClass(UserSchema);
