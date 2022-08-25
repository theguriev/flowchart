import { Node } from "react-flow-renderer";
import { MouseEventHandler, ReactNode } from "react";

export type MessageNodeButton = {
  title: string;
  value?: string;
};

export type MessageNodeProps = Node<{
  subtitle?: string;
  headerImage?: string;
  title?: string;
  buttons?: Array<MessageNodeButton>;
  content?: ReactNode;
  expand?: boolean;
}> & { onToggleExpand?: MouseEventHandler<HTMLButtonElement> };
