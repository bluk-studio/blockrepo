import type { ENodeType } from "./ENodeType";
import type { IConnectionInput, IConnectionOutput } from "./IConnection";

export interface INode {
  x: number,
  y: number,
  id: string,
  type: ENodeType,
  props?: Object
};

export interface INodeCode {
  type: ENodeType;
  category?: string;
  
  documentation: {
    title: string,
    onNodeDescription?: string,
  },

  // Inputs and outputs
  inputs?: Array<IConnectionInput>,
  outputs?: Array<IConnectionOutput>,

  // Methods
  onConnect?: () => void,
  onDisconnect?: () => void,
};