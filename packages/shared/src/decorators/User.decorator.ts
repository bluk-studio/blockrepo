import { Metadata } from "@grpc/grpc-js";
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToRpc();
    const metadata: Metadata = request.getContext();
    const localUser = metadata.get('__local_user');

    if (localUser.length > 0 && localUser[0] != null) {
      return JSON.parse(localUser[0].toString());
    } else {
      return null;
    };
  },
);

export const Data = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    return ctx.switchToRpc().getData();
  },
);