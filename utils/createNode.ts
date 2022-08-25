import { v4 as uuid } from "uuid";

export type NodeType = "actionShopify" | "message" | "delay" | "trigger";

const nodesDictionary: Record<NodeType, Record<string, unknown>> = {
  message: {
    type: "message",
    data: {
      content: "Here is your content",
      title: "Message",
      expand: true,
    },
  },
  delay: {
    id: "05",
    type: "delay",
    data: {
      title: "Delay title",
      content: "0 days",
    },
  },
  actionShopify: {
    type: "actionShopify",
    data: {
      contents: ["One", "Two"],
      title: "Action",
      subtitle: "Shopify",
      expand: true,
    },
  },
  trigger: {
    type: "trigger",
    data: {
      content: "Subscriber created",
      title: "Trigger",
      subtitle: "Connectly popup",
      expand: true,
    },
  },
};
export const createNode = (type: NodeType) => {
  const newNode = nodesDictionary[type];
  if (newNode) {
    return {
      ...newNode,
      id: uuid(),
    };
  }
};
