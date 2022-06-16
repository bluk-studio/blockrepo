import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { User } from '@proto/types/user';
import { Document } from 'mongoose';

// Exporting Document type
export type UserDocument = Document & UserModel;

// Model itself
@Schema()
export class UserModel implements User {
  @Prop({
    required: true,
    unique: true,
  })
  id: string;

  @Prop({
    required: true,
    unique: true,
  })
  email: string;
  
  @Prop({
    required: false,
    default: () => "Pup"
  })
  username: string;
};

// Exporting schema
export const UserSchema = SchemaFactory.createForClass(UserModel);