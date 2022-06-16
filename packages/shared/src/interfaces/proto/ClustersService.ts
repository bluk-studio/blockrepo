/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { Metadata } from "@grpc/grpc-js";
import {
  GetAllResponse,
  GetAllServersResponse,
  CreateServerRequest,
  SendServerHealthRequest,
} from "./types/metadata/ClustersService";
import { Server, ServerHealth } from "./types/cluster/server";
import { ClusterHealth } from "./types/cluster/health";
import { EmptyRequest } from "./types/miscellaneous";

export const protobufPackage = "bluk.games";

export const BLUK_GAMES_PACKAGE_NAME = "bluk.games";

/** Library's service ClustersService */

export interface ClustersServiceClient {
  getAll(
    request: EmptyRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<GetAllResponse>;
}

/** Library's service ClustersService */

export interface ClustersServiceController {
  getAll(
    request: EmptyRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<GetAllResponse> | Observable<GetAllResponse> | GetAllResponse;
}

export function ClustersServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getAll"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcMethod("ClustersService", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcStreamMethod("ClustersService", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
  };
}

export const CLUSTERS_SERVICE_NAME = "ClustersService";

/** Cluster specific service */

export interface OneClusterServiceClient {
  /** Servers-related */

  getAllServers(
    request: EmptyRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<GetAllServersResponse>;

  createServer(
    request: CreateServerRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Server>;

  /** Cluster's Health related */

  getClusterHealth(
    request: EmptyRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<ClusterHealth>;

  sendServerHealth(
    request: SendServerHealthRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<ServerHealth>;
}

/** Cluster specific service */

export interface OneClusterServiceController {
  /** Servers-related */

  getAllServers(
    request: EmptyRequest,
    metadata: Metadata,
    ...rest: any
  ):
    | Promise<GetAllServersResponse>
    | Observable<GetAllServersResponse>
    | GetAllServersResponse;

  createServer(
    request: CreateServerRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<Server> | Observable<Server> | Server;

  /** Cluster's Health related */

  getClusterHealth(
    request: EmptyRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<ClusterHealth> | Observable<ClusterHealth> | ClusterHealth;

  sendServerHealth(
    request: SendServerHealthRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<ServerHealth> | Observable<ServerHealth> | ServerHealth;
}

export function OneClusterServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "getAllServers",
      "createServer",
      "getClusterHealth",
      "sendServerHealth",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcMethod("OneClusterService", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcStreamMethod("OneClusterService", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
  };
}

export const ONE_CLUSTER_SERVICE_NAME = "OneClusterService";

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
