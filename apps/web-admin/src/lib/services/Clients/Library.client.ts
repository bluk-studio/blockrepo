import { GamesListServiceClient, GameServiceClient } from '../../../generated/library.client';
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';

export const GamesListClient = new GamesListServiceClient(new GrpcWebFetchTransport({ baseUrl: 'http://localhost:8081' }));
export const GameClient = new GameServiceClient(new GrpcWebFetchTransport({ baseUrl: 'http://localhost:8081' }));