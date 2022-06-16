/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { Permission } from "./types/permissions";
import { Metadata } from "@grpc/grpc-js";

export const protobufPackage = "bluk.games";

/** Requests/Responses */
export interface GetUserPermissionsRequest {
  id: string;
}

export interface GetUserPermissionsResponse {
  permissions: Permission[];
}

export const BLUK_GAMES_PACKAGE_NAME = "bluk.games";

/** Service */

export interface PermissionServiceClient {
  getUserPermissions(
    request: GetUserPermissionsRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<GetUserPermissionsResponse>;
}

/** Service */

export interface PermissionServiceController {
  getUserPermissions(
    request: GetUserPermissionsRequest,
    metadata: Metadata,
    ...rest: any
  ):
    | Promise<GetUserPermissionsResponse>
    | Observable<GetUserPermissionsResponse>
    | GetUserPermissionsResponse;
}

export function PermissionServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getUserPermissions"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcMethod("PermissionService", method)(
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
      GrpcStreamMethod("PermissionService", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
  };
}

export const PERMISSION_SERVICE_NAME = "PermissionService";

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
