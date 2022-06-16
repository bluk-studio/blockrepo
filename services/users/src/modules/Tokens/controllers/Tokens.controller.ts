import { Controller } from "@nestjs/common";
import { FetchTokenRequest, GenerateTokenRequest, TokenServiceController, TokenServiceControllerMethods } from '@proto/UsersService';
import { Token } from "@proto/types/token";
import { Metadata } from "@grpc/grpc-js";
import { RpcException } from "@nestjs/microservices";
import { TokensService } from "../services";

@Controller()
@TokenServiceControllerMethods()
export class TokensController implements TokenServiceController {
  constructor(
    private readonly service: TokensService,
  ) {}
  
  async generateToken(data: GenerateTokenRequest, metadata: Metadata): Promise<Token> {
    if (!(metadata.get('token').length > 0)) throw new RpcException('Token not found');
    
    return await this.service.generateToken(metadata.get('token')[0].toString(), data);
  };
  
  async fetchToken(data: FetchTokenRequest): Promise<Token> {
    return await this.service.fetchById(data.id);
  };
};