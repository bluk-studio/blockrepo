import { IAction } from "src/types";

export function isAction(object: any): object is IAction {
  return 'function' in object;
};