import { Node, Edge, ReactFlowProps } from "react-flow-renderer";

export type FlowInitialProps = {
  initialNodes: Array<Node<Record<string, unknown>>>;
  initialEdges: Array<Edge>;
};

export type FlowProps = FlowInitialProps & ReactFlowProps;
