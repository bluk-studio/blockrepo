import { ENodeType, type IConnectionOutput, type INodeCode } from "$lib/types";

export class PlayerJoin implements INodeCode {
  public type = ENodeType.EVENT;
  public category = "player";

  public documentation = {
    title: 'Игрок зашел на сервер',
    onNodeDescription: 'Lorem ipsum dolor sit amet.',
  };

  public outputs = [
    {
      type: 'org.bukkit.entity.Player',
      name: 'Игрок',
    }
  ];
};