import {
  FC,
  useMemo,
  ComponentProps,
  useCallback,
  useRef,
  DragEvent,
  useEffect,
  useState,
} from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  MarkerType,
  OnConnect,
  ReactFlowInstance,
  OnEdgeUpdateFunc,
  updateEdge,
  Edge,
} from "react-flow-renderer";
import { useTheme, Box } from "@mui/material";
import { MessageNode } from "../MessageNode";
import { TriggerNode } from "../TriggerNode";
import { ActionShopifyNode } from "../ActionShopifyNode";
import { DelayNode } from "../DelayNode";
import { applyHook, createNode, NodeType } from "utils";
import { FlowProps } from "./types";

const useFlow = ({ initialEdges, initialNodes }: Partial<FlowProps>) => {
  const edgeUpdateSuccessful = useRef(true);
  const flowRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance>();
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
      setEdges((edges) => {
        const newEdges = addEdge(
          {
            ...params,
            markerEnd: MarkerType.Arrow,
            style: { stroke: theme.palette.connectionLine, strokeWidth: 2 },
          },
          edges
        );
        console.log("newEdges", newEdges);
        return newEdges;
      });
    },
    [setEdges, theme]
  );

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      const reactFlowBounds = flowRef.current?.getBoundingClientRect();
      if (!reactFlowInstance || !reactFlowBounds) {
        return null;
      }
      event.preventDefault();

      const newNode = createNode(
        event.dataTransfer.getData("application/reactflow") as NodeType
      );

      if (!newNode) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      setNodes((nodes) => nodes.concat({ ...newNode, position } as any));
    },
    [reactFlowInstance, setNodes]
  );

  const handleEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const handleEdgeUpdate: OnEdgeUpdateFunc = useCallback(
    (oldEdge, newConnection) => {
      edgeUpdateSuccessful.current = true;
      setEdges((els) => updateEdge(oldEdge, newConnection, els));
    },
    [setEdges]
  );

  const handleEdgeUpdateEnd = useCallback(
    (_event: MouseEvent, edge: Edge) => {
      if (!edgeUpdateSuccessful.current) {
        setEdges((eds) => eds.filter((e) => e.id !== edge.id));
      }

      edgeUpdateSuccessful.current = true;
    },
    [setEdges]
  );

  useEffect(() => {
    localStorage.setItem("nodes", JSON.stringify(nodes));
    localStorage.setItem("edges", JSON.stringify(edges));
  }, [nodes, edges]);

  return {
    nodes,
    edges,
    onEdgesChange,
    onNodesChange,
    onConnect: handleConnect,
    selectNodesOnDrag: false,
    minZoom: 0.1,
    nodeTypes,
    flowRef,
    onDragOver: handleDragOver,
    onInit: setReactFlowInstance,
    onDrop: handleDrop,
    snapToGrid: true,
    onEdgeUpdateStart: handleEdgeUpdateStart,
    onEdgeUpdate: handleEdgeUpdate,
    onEdgeUpdateEnd: handleEdgeUpdateEnd,
  };
};

const FlowRepresentation: FC<FlowProps> = ({
  initialEdges,
  initialNodes,
  flowRef,
  ...rest
}) => (
  <Box ref={flowRef} sx={{ width: "100%", height: "100%" }}>
    <ReactFlow {...rest}>
      <Background />
      <MiniMap />
      <Controls />
    </ReactFlow>
  </Box>
);

export const Flow = applyHook(FlowRepresentation, useFlow as any);
