import { ENodeType, type IConnectionOutput, type INodeCode } from "$lib/types";

export class Chat implements INodeCode {
  public type = ENodeType.ACTION;
  public category = "player";

  public documentation = {
    title: 'Отправить сообщение',
    onNodeDescription: 'Lorem ipsum dolor sit amet.',
  };

  public inputs = [
    {
      type: 'org.bukkit.entity.Player',
      name: 'Игрок',
    },
    {
      type: 'basic.String',
      name: 'Сообщение'
    }
  ];
};