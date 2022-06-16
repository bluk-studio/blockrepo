/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { Metadata } from "@grpc/grpc-js";
import {
  SearchResponse,
  FetchFeaturedResponse,
  SearchRequest,
  GetOneById,
} from "./types/metadata/GamesListService";
import { Game } from "./types/game";
import { NewsPost } from "./types/news";
import { EmptyRequest } from "./types/miscellaneous";
import { CreateRequest } from "./types/metadata/GameService";

export const protobufPackage = "bluk.games";

/** Options */

export const BLUK_GAMES_PACKAGE_NAME = "bluk.games";

/** Service */

export interface GamesListServiceClient {
  search(
    request: SearchRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<SearchResponse>;

  getOne(
    request: GetOneById,
    metadata: Metadata,
    ...rest: any
  ): Observable<Game>;

  fetchFeatured(
    request: EmptyRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<FetchFeaturedResponse>;
}

/** Service */

export interface GamesListServiceController {
  search(
    request: SearchRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<SearchResponse> | Observable<SearchResponse> | SearchResponse;

  getOne(
    request: GetOneById,
    metadata: Metadata,
    ...rest: any
  ): Promise<Game> | Observable<Game> | Game;

  fetchFeatured(
    request: EmptyRequest,
    metadata: Metadata,
    ...rest: any
  ):
    | Promise<FetchFeaturedResponse>
    | Observable<FetchFeaturedResponse>
    | FetchFeaturedResponse;
}

export function GamesListServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["search", "getOne", "fetchFeatured"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcMethod("GamesListService", method)(
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
      GrpcStreamMethod("GamesListService", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
  };
}

export const GAMES_LIST_SERVICE_NAME = "GamesListService";

export interface GameServiceClient {
  create(
    request: CreateRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Game>;

  update(request: Game, metadata: Metadata, ...rest: any): Observable<Game>;
}

export interface GameServiceController {
  create(
    request: CreateRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<Game> | Observable<Game> | Game;

  update(
    request: Game,
    metadata: Metadata,
    ...rest: any
  ): Promise<Game> | Observable<Game> | Game;
}

export function GameServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["create", "update"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcMethod("GameService", method)(
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
      GrpcStreamMethod("GameService", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
  };
}

export const GAME_SERVICE_NAME = "GameService";

export interface NewsServiceClient {
  fetchMain(
    request: EmptyRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<NewsPost>;
}

export interface NewsServiceController {
  fetchMain(
    request: EmptyRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<NewsPost> | Observable<NewsPost> | NewsPost;
}

export function NewsServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["fetchMain"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcMethod("NewsService", method)(
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
      GrpcStreamMethod("NewsService", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
  };
}

export const NEWS_SERVICE_NAME = "NewsService";

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
