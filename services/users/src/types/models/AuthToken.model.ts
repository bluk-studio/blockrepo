import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { AuthToken } from '@proto/types/token';
import { Document } from 'mongoose';

// Exporting document
export type AuthTokenDocument = AuthTokenModel & Document;

// Model itself
@Schema()
export class AuthTokenModel implements AuthToken {
  @Prop({
    required: true
  })
  id: string;
  
  @Prop({
    required: false
  })
  uid: string;

  @Prop({
    required: false,
    default: () => false
  })
  isAuthorized: boolean;
};

// Schema
export const AuthTokenSchema = SchemaFactory.createForClass(AuthTokenModel);