import { ENodeType, type INodeCode } from "$lib/types";
import type { IconSource } from "@steeze-ui/svelte-icon/types";
import type { AllNodes } from ".";
import { EmojiHappy } from '@steeze-ui/heroicons';

export interface INodeCategory {
  title: string,
  icon: IconSource,
  nodes: Array<{ type: ENodeType, id: string }>,
};

export class NodeCategoriesParser {
  constructor(
    public nodes: typeof AllNodes
  ) {}

  private categories: Record<string, INodeCategory> = {
    'player': {
      title: 'Игрок',
      icon: EmojiHappy,
      nodes: []
    }
  };

  getComputeCategories() {
    // Adding all nodes to categories
    [ENodeType.EVENT, ENodeType.ACTION, ENodeType.VARIABLE].forEach((category) => {
      Object.keys(this.nodes[category]).forEach((key) => {
        const element = this.nodes[category][key];

        if (element.category && this.categories[element.category]) {
          this.categories[element.category].nodes.push({ type: category, id: key });
        };
      });
    });

    return this.categories;
  };
}