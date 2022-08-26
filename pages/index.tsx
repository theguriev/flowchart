import type { NextPage } from "next";
import { Box } from "@mui/material";
import { GetStaticProps } from "next";
import { Flow, FlowInitialProps, NodesSidebar } from "components";

const edgeType = "smoothstep";

export const getServerSideProps: GetStaticProps<
  FlowInitialProps
> = async () => {
  return {
    props: {
      initialEdges: [
        {
          id: "1-sure!-2",
          source: "1-sure!",
          target: "2",
          selected: false,
          type: edgeType,
        },
        {
          source: "1",
          sourceHandle: "1",
          target: "2",
          targetHandle: "2-left",
          markerEnd: "arrow",
          type: edgeType,
          style: {
            stroke: "#7986CB",
            strokeWidth: 2,
          },
          id: "reactflow__edge-11-22-left",
          selected: false,
        },
        {
          source: "2",
          sourceHandle: "2-get-discount-code",
          target: "3",
          targetHandle: "3-left",
          markerEnd: "arrow",
          style: {
            stroke: "#7986CB",
            strokeWidth: 2,
          },
          id: "reactflow__edge-22-get-discount-code-33-left",
          selected: false,
          type: edgeType,
        },
        {
          source: "2",
          sourceHandle: "2-learn-more",
          target: "8",
          targetHandle: "8-left",
          markerEnd: "arrow",
          style: {
            stroke: "#7986CB",
            strokeWidth: 2,
          },
          id: "reactflow__edge-22-learn-more-88-left",
          selected: false,
          type: edgeType,
        },
        {
          source: "2",
          sourceHandle: "2-shop-on-wa",
          target: "5",
          targetHandle: "5-left",
          markerEnd: "arrow",
          style: {
            stroke: "#7986CB",
            strokeWidth: 2,
          },
          id: "reactflow__edge-22-shop-on-wa-55-left",
          selected: false,
          type: edgeType,
        },
        {
          source: "5",
          sourceHandle: "5-connectly-hoodie",
          target: "6",
          targetHandle: "6-left",
          markerEnd: "arrow",
          style: {
            stroke: "#7986CB",
            strokeWidth: 2,
          },
          id: "reactflow__edge-55-connectly-hoodie-66-left",
          selected: false,
          type: edgeType,
        },
        {
          source: "5",
          sourceHandle: "5-connectly-t-shirt",
          target: "7",
          targetHandle: "7-left",
          markerEnd: "arrow",
          style: {
            stroke: "#7986CB",
            strokeWidth: 2,
          },
          id: "reactflow__edge-55-connectly-t-shirt-77-left",
          selected: false,
          type: edgeType,
        },
        {
          source: "5",
          sourceHandle: "5-connectly-water-bottle",
          target: "4",
          targetHandle: "4-left",
          markerEnd: "arrow",
          style: {
            stroke: "#7986CB",
            strokeWidth: 2,
          },
          id: "reactflow__edge-55-connectly-water-bottle-44-left",
          selected: false,
          type: edgeType,
        },
        {
          source: "6",
          sourceHandle: "6-buy-now",
          target: "10",
          targetHandle: "10-left",
          markerEnd: "arrow",
          style: {
            stroke: "#7986CB",
            strokeWidth: 2,
          },
          id: "reactflow__edge-66-buy-now-1010-left",
          selected: false,
          type: edgeType,
        },
        {
          source: "06",
          sourceHandle: "06-left",
          target: "10",
          targetHandle: "10-right",
          markerEnd: "arrow",
          style: {
            stroke: "#7986CB",
            strokeWidth: 2,
          },
          id: "reactflow__edge-0606-left-1010-right",
          selected: false,
          type: edgeType,
        },
        {
          source: "04",
          sourceHandle: "04-left",
          target: "10",
          targetHandle: "10-right",
          markerEnd: "arrow",
          style: {
            stroke: "#7986CB",
            strokeWidth: 2,
          },
          id: "reactflow__edge-0404-left-1010-right",
          selected: false,
          type: edgeType,
        },
        {
          source: "05",
          sourceHandle: "05-left",
          target: "06",
          targetHandle: "06-right",
          markerEnd: "arrow",
          style: {
            stroke: "#7986CB",
            strokeWidth: 2,
          },
          id: "reactflow__edge-0505-left-0606-right",
          selected: false,
          type: edgeType,
        },
        {
          source: "05",
          sourceHandle: "05-right",
          target: "9",
          targetHandle: "9-left",
          markerEnd: "arrow",
          style: {
            stroke: "#7986CB",
            strokeWidth: 2,
          },
          id: "reactflow__edge-0505-right-99-left",
          selected: false,
          type: edgeType,
        },
        {
          source: "06",
          sourceHandle: "06-right-shopify",
          target: "05",
          targetHandle: "05-left",
          markerEnd: "arrow",
          style: {
            stroke: "#7986CB",
            strokeWidth: 2,
          },
          id: "reactflow__edge-0606-right-shopify-0505-left",
          selected: false,
          type: edgeType,
        },
        {
          source: "04",
          sourceHandle: "04-right-shopify",
          target: "120",
          targetHandle: "120-left",
          markerEnd: "arrow",
          style: {
            stroke: "#7986CB",
            strokeWidth: 2,
          },
          id: "reactflow__edge-0404-right-shopify-120120-left",
          selected: false,
          type: edgeType,
        },
      ],
      initialNodes: [
        {
          id: "1",
          type: "trigger",
          data: {
            content: "Subscriber created",
            title: "Trigger",
            subtitle: "Connectly popup",
            icon: "trigger",
            expand: true,
          },
          position: {
            x: -403.5595984611108,
            y: 281.66812790551,
          },
          width: 324,
          height: 117,
          selected: false,
          positionAbsolute: {
            x: -403.5595984611108,
            y: 281.66812790551,
          },
          dragging: false,
        },
        {
          id: "2",
          type: "message",
          data: {
            content:
              "👋 Hi {First Name}! \n\n              Welcome to our VIP list 😍 We will be updating you here with new product releases. You can also shop directly in thread with special loyalty discounts only available on WhatsApp 🤩\n               ",
            title: "Message",
            buttons: [
              {
                title: "Get discount code",
              },
              {
                title: "Shop on WA",
              },
              {
                title: "Learn more",
              },
            ],
            headerImage: "https://picsum.photos/200/100",
            expand: true,
          },
          position: {
            x: 86.82254372371892,
            y: -15.010472935487428,
          },
          width: 324,
          height: 557,
          selected: false,
          positionAbsolute: {
            x: 86.82254372371892,
            y: -15.010472935487428,
          },
          dragging: false,
        },
        {
          id: "3",
          type: "message",
          data: {
            content:
              "Awesome! Enter “Connectly15” at checkout for 15% off your next order.",
            title: "Message",
            subtitle: "Lorem ipsum message name",
            buttons: [
              {
                title: "Shop Now",
                value: "https://google.com",
              },
            ],
            expand: true,
          },
          position: {
            x: 516.843489594694,
            y: 7.864240923333579,
          },
          width: 324,
          height: 256,
          selected: false,
          positionAbsolute: {
            x: 516.843489594694,
            y: 7.864240923333579,
          },
          dragging: false,
        },
        {
          id: "4",
          type: "message",
          data: {
            content:
              "Awesome! Enter “Connectly15” at checkout for 15% off your next order.",
            title: "Message",
            buttons: [
              {
                title: "Shop Now",
                value: "https://google.com",
              },
            ],
          },
          position: {
            x: 1539.7435330410192,
            y: 623.910321839478,
          },
          width: 324,
          height: 56,
          selected: false,
          positionAbsolute: {
            x: 1539.7435330410192,
            y: 623.910321839478,
          },
          dragging: false,
        },
        {
          id: "5",
          type: "message",
          data: {
            content:
              "We have three exciting products for you to purchase here on WhatsApp.\n\n            Connectly Hoodie\n            Connectly T-shirt\n            Connectly Water Bottle",
            headerImage: "https://picsum.photos/200/100",
            title: "Message",
            buttons: [
              {
                title: "Connectly Hoodie",
              },
              {
                title: "Connectly T-shirt",
              },
              {
                title: "Connectly Water Bottle",
              },
            ],
            expand: true,
          },
          position: {
            x: 917.108723986734,
            y: 58.92688399392307,
          },
          width: 324,
          height: 532,
          selected: false,
          positionAbsolute: {
            x: 917.108723986734,
            y: 58.92688399392307,
          },
          dragging: false,
        },
        {
          id: "6",
          type: "message",
          data: {
            content:
              "Great choice on the sweatshirt. It’s sooo warm and comes in a luxurious black. It’s a 100% organic cotton.",
            headerImage: "https://picsum.photos/200/100",
            title: "Message",
            buttons: [
              {
                title: "Buy now",
              },
              {
                title: "Add to cart",
              },
            ],
            expand: true,
          },
          position: {
            x: 1491.9752540395002,
            y: -191.44478525541916,
          },
          width: 324,
          height: 437,
          selected: false,
          positionAbsolute: {
            x: 1491.9752540395002,
            y: -191.44478525541916,
          },
          dragging: false,
        },
        {
          id: "7",
          type: "message",
          data: {
            content:
              "Awesome! Enter “Connectly15” at checkout for 15% off your next order.",
            title: "Message",
            buttons: [
              {
                title: "Shop Now",
                value: "https://google.com",
              },
            ],
          },
          position: {
            x: 1605.4712449668898,
            y: 418.89884654024127,
          },
          width: 324,
          height: 56,
          selected: false,
          positionAbsolute: {
            x: 1605.4712449668898,
            y: 418.89884654024127,
          },
          dragging: false,
        },
        {
          id: "8",
          type: "message",
          data: {
            content:
              "Connectly is the best choice when it comes to building workflows that help you sell to your customers. \n              The merch store allows you to proudly represent Connectly.",
            title: "Message",
            buttons: [
              {
                title: "Shop Now",
                value: "https://google.com",
              },
            ],
            expand: true,
          },
          position: {
            x: 497.077305180272,
            y: 554.728676389002,
          },
          width: 324,
          height: 307,
          selected: false,
          positionAbsolute: {
            x: 497.077305180272,
            y: 554.728676389002,
          },
          dragging: false,
        },
        {
          id: "9",
          type: "message",
          data: {
            content:
              "While we create your payment link here is a video we think you will enjoy",
            headerImage: "https://picsum.photos/200/100",
            title: "Message",
            expand: true,
          },
          position: {
            x: 3344.3139485699758,
            y: -79.42746926757248,
          },
          width: 324,
          height: 342,
          selected: false,
          positionAbsolute: {
            x: 3344.3139485699758,
            y: -79.42746926757248,
          },
          dragging: false,
        },
        {
          id: "04",
          type: "actionShopify",
          data: {
            contents: ["Opened link", "AND | Did purchase"],
            title: "Action",
            subtitle: "Shopify",
            expand: true,
          },
          position: {
            x: 2520.5078174106793,
            y: 514.2400993468707,
          },
          width: 324,
          height: 168,
          selected: false,
          positionAbsolute: {
            x: 2520.5078174106793,
            y: 514.2400993468707,
          },
          dragging: false,
        },
        {
          id: "06",
          type: "actionShopify",
          data: {
            contents: ["Opened link", "AND | Did purchase"],
            title: "Action",
            subtitle: "Shopify",
            expand: true,
          },
          position: {
            x: 2515.5662713070733,
            y: 87.61995240226788,
          },
          width: 324,
          height: 168,
          selected: false,
          positionAbsolute: {
            x: 2515.5662713070733,
            y: 87.61995240226788,
          },
          dragging: false,
        },
        {
          id: "05",
          type: "delay",
          data: {
            title: "After",
            content: "3 days",
          },
          position: {
            x: 2970.1744521480423,
            y: 64.9193282485697,
          },
          width: 157,
          height: 56,
          selected: false,
          positionAbsolute: {
            x: 2970.1744521480423,
            y: 64.9193282485697,
          },
          dragging: false,
        },
        {
          id: "10",
          type: "message",
          data: {
            content:
              "While we create your payment link here is a video we think you will enjoy",
            headerImage: "https://picsum.photos/200/100",
            title: "Message",
            expand: true,
          },
          position: {
            x: 2084.960786472153,
            y: 195.64299286034026,
          },
          width: 324,
          height: 342,
          selected: false,
          positionAbsolute: {
            x: 2084.960786472153,
            y: 195.64299286034026,
          },
          dragging: false,
        },
        {
          id: "120",
          type: "message",
          data: {
            content: "Thank you! Your order has been placed.",
            title: "Message",
            expand: true,
          },
          position: {
            x: 2954.6355758220648,
            y: 497.5914301885434,
          },
          width: 324,
          height: 193,
          selected: false,
          positionAbsolute: {
            x: 2954.6355758220648,
            y: 497.5914301885434,
          },
          dragging: false,
        },
      ],
    },
  };
};

const FlowChart: NextPage<FlowInitialProps> = ({
  initialEdges,
  initialNodes,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        background:
          "linear-gradient(180deg, rgba(121, 134, 203, 0.2) 0%, rgba(255, 255, 255, 0) 41.15%), #FFFFFF;",
      }}
    >
      <NodesSidebar />
      <Flow initialEdges={initialEdges} initialNodes={initialNodes} />
    </Box>
  );
};

export default FlowChart;
