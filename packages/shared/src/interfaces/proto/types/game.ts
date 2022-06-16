/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { User } from "../types/user";

export const protobufPackage = "bluk.games";

/** @type Game */
export interface Game {
  id: string;
  name: string;
  icon?: string | undefined;
  thumbnail?: string | undefined;
  creator?: User | undefined;
  tags: string[];
  landingPageConfig: Game_LandingPageConfig | undefined;
}

export interface Game_LandingPageConfig {
  headerLinks: Game_LandingPageConfig_HeaderLink[];
  /** Description */
  description: string;
}

/** Header links */
export interface Game_LandingPageConfig_HeaderLink {
  text: string;
  href: string;
}

export const BLUK_GAMES_PACKAGE_NAME = "bluk.games";

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
