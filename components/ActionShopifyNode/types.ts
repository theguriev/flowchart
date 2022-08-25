import { Node } from "react-flow-renderer";
import { MouseEventHandler, ReactNode } from "react";

export type ActionShopifyNodeButton = {
  title: string;
  value?: string;
};

export type ActionShopifyNodeProps = Node<{
  subtitle?: string;
  title?: string;
  contents?: Array<ReactNode>;
  expand?: boolean;
}> & { onToggleExpand?: MouseEventHandler<HTMLButtonElement> };
