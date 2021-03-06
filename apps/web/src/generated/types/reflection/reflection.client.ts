// @generated by protobuf-ts 2.3.0
// @generated from protobuf file "types/reflection/reflection.proto" (package "grpc.reflection.v1alpha", syntax proto3)
// tslint:disable
//
// Taken from spec https://raw.githubusercontent.com/grpc/grpc/master/src/proto/grpc/reflection/v1alpha/reflection.proto
//
//
// Copyright 2016 gRPC authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//
// Service exported by server reflection
//
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { ServerReflection } from "./reflection";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { ServerReflectionResponse } from "./reflection";
import type { ServerReflectionRequest } from "./reflection";
import type { DuplexStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service grpc.reflection.v1alpha.ServerReflection
 */
export interface IServerReflectionClient {
    /**
     * The reflection service is structured as a bidirectional stream, ensuring
     * all related requests go to a single server.
     *
     * @generated from protobuf rpc: ServerReflectionInfo(stream grpc.reflection.v1alpha.ServerReflectionRequest) returns (stream grpc.reflection.v1alpha.ServerReflectionResponse);
     */
    serverReflectionInfo(options?: RpcOptions): DuplexStreamingCall<ServerReflectionRequest, ServerReflectionResponse>;
}
/**
 * @generated from protobuf service grpc.reflection.v1alpha.ServerReflection
 */
export class ServerReflectionClient implements IServerReflectionClient, ServiceInfo {
    typeName = ServerReflection.typeName;
    methods = ServerReflection.methods;
    options = ServerReflection.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * The reflection service is structured as a bidirectional stream, ensuring
     * all related requests go to a single server.
     *
     * @generated from protobuf rpc: ServerReflectionInfo(stream grpc.reflection.v1alpha.ServerReflectionRequest) returns (stream grpc.reflection.v1alpha.ServerReflectionResponse);
     */
    serverReflectionInfo(options?: RpcOptions): DuplexStreamingCall<ServerReflectionRequest, ServerReflectionResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<ServerReflectionRequest, ServerReflectionResponse>("duplex", this._transport, method, opt);
    }
}
