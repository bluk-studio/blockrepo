/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { User } from "../../types/user";

export const protobufPackage = "bluk.games";

export interface Server {
  id: string;
  image: string;
  port: number;
  health: ServerHealth | undefined;
}

export interface ServerHealth {
  isRunning: boolean;
  isReady: boolean;
}

/** Persistent server info */
export interface PersistentServer {
  /** Fields */
  id: string;
  storage: PersistentServer_SourceStorage | undefined;
  members: PersistentServer_Member[];
}

/** Sub-types */
export interface PersistentServer_SourceStorage {
  type: PersistentServer_SourceStorage_SourceType;
  url: string;
}

export enum PersistentServer_SourceStorage_SourceType {
  GIT = 0,
  UNRECOGNIZED = -1,
}

export interface PersistentServer_Member {
  user: User | undefined;
  role: PersistentServer_Member_MemberRole;
}

export enum PersistentServer_Member_MemberRole {
  DEVELOPER = 0,
  OWNER = 1,
  UNRECOGNIZED = -1,
}

export const BLUK_GAMES_PACKAGE_NAME = "bluk.games";

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
