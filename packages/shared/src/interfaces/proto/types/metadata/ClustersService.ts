/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { GameCluster } from "../../types/gameCluster";
import { Server, ServerHealth } from "../../types/cluster/server";

export const protobufPackage = "bluk.games";

/** ClustersService related */
export interface GetAllResponse {
  clusters: GameCluster[];
}

/** OneClusterService related */
export interface GetAllServersResponse {
  servers: Server[];
}

export interface CreateServerRequest {
  image: string;
  isPersistent: boolean;
}

export interface SendServerHealthRequest {
  id: string;
  health: ServerHealth | undefined;
}

export const BLUK_GAMES_PACKAGE_NAME = "bluk.games";

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
