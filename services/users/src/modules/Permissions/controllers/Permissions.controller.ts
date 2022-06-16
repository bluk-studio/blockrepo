import { Metadata } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GetUserPermissionsRequest, GetUserPermissionsResponse, PermissionServiceController, PermissionServiceControllerMethods } from '@proto/PermissionsService'

@Controller()
@PermissionServiceControllerMethods()
export class PermissionsController implements PermissionServiceController {
  async getUserPermissions(request: GetUserPermissionsRequest, metadata: Metadata, ...rest: any): Promise<GetUserPermissionsResponse> {    
    return {
      permissions: [],
    };
  };
};