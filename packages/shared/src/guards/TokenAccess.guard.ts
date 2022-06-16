import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Metadata } from '@grpc/grpc-js';
import { TokenAccessService } from '../modules/TokenAccess/services';

@Injectable()
export class TokenAccess implements CanActivate {
  constructor(
    private readonly service: TokenAccessService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToRpc();
    const metadata: Metadata = request.getContext();
    const token = metadata.get('token').length > 0 ? metadata.get('token')[0].toString() : null;
    
    const authToken = metadata.get('authToken').length > 0 ? metadata.get('authToken')[0].toString() : null;
    
    // Checking if token exists
    if (token) {
      if (await this.service.doTokenExists(token)) {
        metadata.set('__local_user', JSON.stringify(await this.service.getSession(token)));
        
        // Authorizing authToken (if exists)
        if (authToken) this.service.authorizeAuthToken(authToken);

        return true;
      };
    };

    return false;
  };
};