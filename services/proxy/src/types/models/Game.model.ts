import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Game, Game_LandingPageConfig, Game_LandingPageConfig_HeaderLink } from '@proto/types/game';
import { User } from '@shared/interfaces/proto/types/user';
import { Document, Types } from 'mongoose';

// Exporting Document type
export type GameDocument = Document & GameModel;

// HeaderLink schema
@Schema()
class HeaderLink implements Game_LandingPageConfig_HeaderLink {
  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  href: string;
};

const HeaderLinkSchema = SchemaFactory.createForClass(HeaderLink);

// LandingPageConfig schema
@Schema()
class LandingPageConfig implements Game_LandingPageConfig {
  @Prop({ type: [HeaderLinkSchema], required: false, default: () => [] })
  headerLinks: HeaderLink[]

  @Prop({ required: false, default: "Unknown description" })
  description: string;
};

const LandingPageConfigSchema = SchemaFactory.createForClass(LandingPageConfig);

type GameType = Omit<Game, 'creator'> & { creator?: string };

// Model itself
@Schema()
export class GameModel implements GameType {
  @Prop({
    required: true,
    unique: true,
  })
  id: string;

  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: false,
    default: () => [],
  })
  tags: string[];

  @Prop({
    required: false,
    default: () => 'https://images.unsplash.com/photo-1624956578877-4948166c5dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  })
  thumbnail?: string;

  @Prop({
    required: false,
    default: () => '',
  })
  icon?: string;

  @Prop({
    required: false,
  })
  creator?: string;

  @Prop({ type: LandingPageConfigSchema })
  landingPageConfig: LandingPageConfig;
};

// Exporting schema
export const GameSchema = SchemaFactory.createForClass(GameModel);