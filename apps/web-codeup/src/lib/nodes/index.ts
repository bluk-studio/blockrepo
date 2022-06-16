// Importing all nodes
import { ENodeType, type INodeCode } from '$lib/types';
import { NodeCategoriesParser } from './NodeCategories';
import * as playerNodes from './player';

const AllNodes: { 
  [ENodeType.EVENT]: Record<string, INodeCode> 
  [ENodeType.ACTION]: Record<string, INodeCode> 
  [ENodeType.VARIABLE]: Record<string, INodeCode> 
} = {
  events: {},
  actions: {},
  variables: {},
};

// Parsing all nodes
[...Object.values(playerNodes)].forEach(ElementClass => {
  const element = new ElementClass();

  // Events
  if (element.type == ENodeType.EVENT) {
    AllNodes.events[ElementClass.name] = element;
  }

  // Actions
  else if (element.type = ENodeType.ACTION) {
    AllNodes.actions[ElementClass.name] = element;
  }
});

export { AllNodes };
export const NodeTypes = {
  [ENodeType.EVENT]: {
    color: '#eab308',
    title: 'Событие'
  },
  [ENodeType.ACTION]: {
    color: '#6366f1',
    title: 'Действие'
  },
  [ENodeType.VARIABLE]: {
    color: '#eab308',
    title: 'Переменная'
  }
}
export const NodeCategories = new NodeCategoriesParser(AllNodes).getComputeCategories();