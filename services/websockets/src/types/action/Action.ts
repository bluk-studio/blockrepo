import { WebSocket } from 'ws';

export interface IAction {
  id: string,
  function: string,
  arguments?: Array<string | boolean>,
};

export class ActionRequest {
  constructor(
    private readonly action: IAction,
    private readonly connection: WebSocket,
  ) {}

  reply(object: any) {
    this.connection.send(JSON.stringify({
      id: this.action.id,
      function: this.action.function,
      response: object,
    }));
  };
};