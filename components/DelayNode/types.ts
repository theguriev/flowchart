import { Node } from "react-flow-renderer";
import { MouseEventHandler, ReactNode } from "react";

export type DelayNodeProps = Node<{
  title?: string;
  content?: string;
}> & { onToggleExpand?: MouseEventHandler<HTMLButtonElement> };
