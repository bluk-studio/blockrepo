/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Game } from "../../types/game";

export const protobufPackage = "bluk.games";

/** Search method */
export interface SearchRequest {
  tags: string[];
}

export interface SearchResponse {
  result: Game[];
}

/** GetOne method */
export interface GetOneById {
  id: string;
}

/** FetchFeatured method */
export interface FetchFeaturedResponse {
  result: Game[];
}

export const BLUK_GAMES_PACKAGE_NAME = "bluk.games";

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
