import { GamesListServiceClient, GameServiceClient } from '../../../generated/LibraryService.client';
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';

export const GamesListClient = new GamesListServiceClient(new GrpcWebFetchTransport({ baseUrl: 'http://localhost:9090' }));
export const GameClient = new GameServiceClient(new GrpcWebFetchTransport({ baseUrl: 'http://localhost:9090' }));