import { FC, useMemo, ComponentProps, useCallback, useEffect } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  MarkerType,
  OnConnect,
} from "react-flow-renderer";
import { useTheme } from "@mui/material";
import { MessageNode } from "../MessageNode";
import { TriggerNode } from "../TriggerNode";
import { ActionShopifyNode } from "../ActionShopifyNode";
import { DelayNode } from "../DelayNode";
import { applyHook } from "utils";
import { FlowProps } from "./types";

const useFlow = ({ initialEdges, initialNodes }: Partial<FlowProps>) => {
  const theme = useTheme();
  const [nodes, setNodes, onNodesChange] = useNodesState(
    initialNodes as NonNullable<typeof initialNodes> & {
      onToggleExpand: () => void;
    }
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    initialEdges as NonNullable<typeof initialEdges>
  );

  const createToggleExpandHandler = useCallback(
    (id: string) => () => {
      setNodes((nodes) =>
        nodes.map((node) => {
          if (node.id !== id) {
            return node;
          }
          return {
            ...node,
            data: {
              ...node.data,
              expand: !node?.data?.expand,
            },
          };
        })
      );
    },
    [setNodes]
  );

  const nodeTypes = useMemo(
    () => ({
      message: (props: ComponentProps<typeof MessageNode>) => (
        <MessageNode
          onToggleExpand={createToggleExpandHandler(props.id)}
          {...props}
        />
      ),
      trigger: (props: ComponentProps<typeof TriggerNode>) => (
        <TriggerNode
          onToggleExpand={createToggleExpandHandler(props.id)}
          {...props}
        />
      ),
      actionShopify: (props: ComponentProps<typeof TriggerNode>) => (
        <ActionShopifyNode
          onToggleExpand={createToggleExpandHandler(props.id)}
          {...props}
        />
      ),
      delay: DelayNode,
    }),
    [createToggleExpandHandler]
  );

  const handleConnect: OnConnect = useCallback(
    (params) => {
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            markerEnd: MarkerType.Arrow,
            style: { stroke: theme.palette.connectionLine, strokeWidth: 2 },
          },
          eds
        )
      );
    },
    [setEdges, theme]
  );

  //   useEffect(() => {
  //     localStorage.setItem("nodes", JSON.stringify(nodes));
  //     localStorage.setItem("edges", JSON.stringify(edges));
  //   }, [nodes, edges]);

  return {
    nodes,
    edges,
    onEdgesChange,
    onNodesChange,
    onConnect: handleConnect,
    selectNodesOnDrag: false,
    fitView: true,
    minZoom: 0.1,
    nodeTypes,
  };
};

const FlowRepresentation: FC<FlowProps> = ({
  initialEdges,
  initialNodes,
  ...rest
}) => (
  <ReactFlow {...rest}>
    <Background />
    <MiniMap />
    <Controls />
  </ReactFlow>
);

export const Flow = applyHook(FlowRepresentation, useFlow as any);
