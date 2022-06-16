/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { TokenType, Token, AuthToken } from "./types/token";
import { Observable } from "rxjs";
import { User } from "./types/user";
import { Permission } from "./types/permissions";
import { Metadata } from "@grpc/grpc-js";
import { EmptyRequest } from "./types/miscellaneous";
import {
  WatchAuthTokenRequest,
  AuthorizeAuthTokenRequest,
} from "./types/metadata/UsersService";

export const protobufPackage = "bluk.games";

/** Requests/Responses */
export interface FindOneUserRequest {
  id: string;
}

export interface FetchMeRequest {}

export interface FetchMeResponse {
  user: User | undefined;
  token: Token | undefined;
}

export interface GenerateTokenRequest {
  type: TokenType;
  entityId: string;
  permissions: Permission[];
}

export interface FetchTokenRequest {
  id: string;
}

export const BLUK_GAMES_PACKAGE_NAME = "bluk.games";

/** Services */

export interface UserServiceClient {
  findOne(
    request: FindOneUserRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<User>;

  fetchMe(
    request: FetchMeRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<FetchMeResponse>;

  /** Auth-token related (for authorization inside minecraft) */

  createAuthToken(
    request: EmptyRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<AuthToken>;

  watchAuthToken(
    request: WatchAuthTokenRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<AuthToken>;

  authorizeAuthToken(
    request: AuthorizeAuthTokenRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<AuthToken>;
}

/** Services */

export interface UserServiceController {
  findOne(
    request: FindOneUserRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<User> | Observable<User> | User;

  fetchMe(
    request: FetchMeRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<FetchMeResponse> | Observable<FetchMeResponse> | FetchMeResponse;

  /** Auth-token related (for authorization inside minecraft) */

  createAuthToken(
    request: EmptyRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<AuthToken> | Observable<AuthToken> | AuthToken;

  watchAuthToken(
    request: WatchAuthTokenRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<AuthToken>;

  authorizeAuthToken(
    request: AuthorizeAuthTokenRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<AuthToken> | Observable<AuthToken> | AuthToken;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "findOne",
      "fetchMe",
      "createAuthToken",
      "watchAuthToken",
      "authorizeAuthToken",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcMethod("UserService", method)(
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
      GrpcStreamMethod("UserService", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
  };
}

export const USER_SERVICE_NAME = "UserService";

export interface TokenServiceClient {
  generateToken(
    request: GenerateTokenRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Token>;

  fetchToken(
    request: FetchTokenRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Token>;
}

export interface TokenServiceController {
  generateToken(
    request: GenerateTokenRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<Token> | Observable<Token> | Token;

  fetchToken(
    request: FetchTokenRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<Token> | Observable<Token> | Token;
}

export function TokenServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["generateToken", "fetchToken"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcMethod("TokenService", method)(
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
      GrpcStreamMethod("TokenService", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
  };
}

export const TOKEN_SERVICE_NAME = "TokenService";

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
