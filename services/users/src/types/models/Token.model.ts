import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Token, TokenType } from '@proto/types/token';
import { Permission } from '@proto/types/permissions';

// Exporting Document type
export type TokenDocument = TokenModel & Document;

// Model itself
@Schema()
export class TokenModel implements Token {
  @Prop({ 
    required: true,
    unique: true
  })
  id: string;
  
  @Prop({
    type: String,
    required: true,
    enum: Object.values(TokenType)
  })
  type: TokenType;
  
  @Prop({
    required: true,
  })
  entityId: string;

  @Prop({
    type: [String],
    required: false,
    default: () => []
  })
  permissions: Permission[];
};

// Schema
export const TokenSchema = SchemaFactory.createForClass(TokenModel);