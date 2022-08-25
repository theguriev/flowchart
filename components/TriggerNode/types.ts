import { Node } from "react-flow-renderer";
import { MouseEventHandler, ReactNode } from "react";

export type TriggerNodeButton = {
  title: string;
  value?: string;
};

export type TriggerNodeProps = Node<{
  subtitle?: string;
  title?: string;
  buttons?: Array<TriggerNodeButton>;
  content?: ReactNode;
  expand?: boolean;
}> & { onToggleExpand?: MouseEventHandler<HTMLButtonElement> };
