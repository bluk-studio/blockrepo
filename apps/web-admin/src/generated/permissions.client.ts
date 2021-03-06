// @generated by protobuf-ts 2.3.0
// @generated from protobuf file "permissions.proto" (package "bluk_games", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { PermissionService } from "./permissions";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { GetUserPermissionsResponse } from "./permissions";
import type { GetUserPermissionsRequest } from "./permissions";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Service
 *
 * @generated from protobuf service bluk_games.PermissionService
 */
export interface IPermissionServiceClient {
    /**
     * @generated from protobuf rpc: GetUserPermissions(bluk_games.GetUserPermissionsRequest) returns (bluk_games.GetUserPermissionsResponse);
     */
    getUserPermissions(input: GetUserPermissionsRequest, options?: RpcOptions): UnaryCall<GetUserPermissionsRequest, GetUserPermissionsResponse>;
}
/**
 * Service
 *
 * @generated from protobuf service bluk_games.PermissionService
 */
export class PermissionServiceClient implements IPermissionServiceClient, ServiceInfo {
    typeName = PermissionService.typeName;
    methods = PermissionService.methods;
    options = PermissionService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: GetUserPermissions(bluk_games.GetUserPermissionsRequest) returns (bluk_games.GetUserPermissionsResponse);
     */
    getUserPermissions(input: GetUserPermissionsRequest, options?: RpcOptions): UnaryCall<GetUserPermissionsRequest, GetUserPermissionsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetUserPermissionsRequest, GetUserPermissionsResponse>("unary", this._transport, method, opt, input);
    }
}
