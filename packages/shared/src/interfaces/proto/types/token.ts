/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Permission } from "../types/permissions";

export const protobufPackage = "bluk.games";

/** TokenType enum */
export enum TokenType {
  USER = 0,
  ROBOT = 1,
  UNRECOGNIZED = -1,
}

/** Token message */
export interface Token {
  id: string;
  type: TokenType;
  entityId: string;
  permissions: Permission[];
}

/** AuthToken */
export interface AuthToken {
  id: string;
  uid: string;
  isAuthorized: boolean;
}

export const BLUK_GAMES_PACKAGE_NAME = "bluk.games";

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
