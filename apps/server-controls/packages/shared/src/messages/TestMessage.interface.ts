import { BaseMessage } from "./Base.interface";

export const TestMessageCommandId = "testMessage";
export interface TestMessage extends BaseMessage {
  isTest: boolean;
};