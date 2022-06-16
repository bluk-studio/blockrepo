import { UserServiceClient } from '../../../generated/users.client';
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';

export const UsersClient = new UserServiceClient(new GrpcWebFetchTransport({ baseUrl: 'http://localhost:8080' }));