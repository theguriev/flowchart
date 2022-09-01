import type { NextPage } from "next";
import { Box, Button } from "@mui/material";
import { GetStaticProps } from "next";
import { Flow, FlowInitialProps, NodesSidebar } from "components";
import ConnectlyWhiteIcon from "!svg-react-loader!/public/images/connectly-white.svg";
import UserIcon from "!svg-react-loader!/public/images/user.svg";
import BrickIcon from "!svg-react-loader!/public/images/brick.svg";
import BubleIcon from "!svg-react-loader!/public/images/buble.svg";
import RuporIcon from "!svg-react-loader!/public/images/rupor.svg";

const edgeType = "smoothstep";

export const getServerSideProps: GetStaticProps<
  FlowInitialProps
> = async () => {
  return {
    props: {
      initialEdges: [
        {
          source: "1",
          sourceHandle: "1",
          target: "2",
          targetHandle: "2-left",
          markerEnd: "arrow",
          style: {
            stroke: "#7986CB",
            strokeWidth: 2,
          },
          id: "reactflow__edge-11-22-left",
          selected: false,
          type: "smoothstep",
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
          type: "smoothstep",
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
          type: "smoothstep",
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
          type: "smoothstep",
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
          type: "smoothstep",
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
          type: "smoothstep",
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
          type: "smoothstep",
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
          type: "smoothstep",
        },
        {
          source: "6",
          sourceHandle: "6-add-to-cart",
          target: "66",
          targetHandle: "66-left",
          markerEnd: "arrow",
          style: {
            stroke: "#7986CB",
            strokeWidth: 2,
          },
          id: "reactflow__edge-66-add-to-cart-6666-left",
          selected: false,
          type: "smoothstep",
        },
        {
          source: "66",
          sourceHandle: "66-empty-cart",
          target: "666",
          targetHandle: "666-left",
          markerEnd: "arrow",
          style: {
            stroke: "#7986CB",
            strokeWidth: 2,
          },
          id: "reactflow__edge-6666-empty-cart-666666-left",
          selected: false,
          type: "smoothstep",
        },
        {
          source: "A902",
          sourceHandle: "A902-pay-now",
          target: "06",
          targetHandle: "06-left",
          markerEnd: "arrow",
          style: {
            stroke: "#7986CB",
            strokeWidth: 2,
          },
          id: "reactflow__edge-A902A902-pay-now-0606-left",
          selected: false,
          type: "smoothstep",
        },
        {
          source: "A902",
          sourceHandle: "A902-pay-now",
          target: "04",
          targetHandle: "04-left",
          markerEnd: "arrow",
          style: {
            stroke: "#7986CB",
            strokeWidth: 2,
          },
          id: "reactflow__edge-A902A902-pay-now-0404-left",
          selected: false,
          type: "smoothstep",
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
          type: "smoothstep",
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
          type: "smoothstep",
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
          type: "smoothstep",
        },
        {
          source: "10",
          sourceHandle: "10-right",
          target: "A902",
          targetHandle: "A902-left",
          markerEnd: "arrow",
          style: {
            stroke: "#7986CB",
            strokeWidth: 2,
          },
          id: "reactflow__edge-1010-right-A902A902-left",
          type: "smoothstep",
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
            x: -391.7051640880354,
            y: 205.46104979288256,
          },
          width: 324,
          height: 117,
          selected: false,
          positionAbsolute: {
            x: -391.7051640880354,
            y: 205.46104979288256,
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
            headerImage: "/images/header-image-2.png",
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
            x: 516.8434895946942,
            y: 26.492637795309175,
          },
          width: 324,
          height: 256,
          selected: false,
          positionAbsolute: {
            x: 516.8434895946942,
            y: 26.492637795309175,
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
            headerImage: "/images/header-image-1.png",
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
            headerImage: "/images/header-image.png",
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
          id: "66",
          type: "message",
          data: {
            content:
              "You have {#} items with total of ${#} in your cart. Continue shopping or checkout?",
            headerImage: "/images/header-image.png",
            title: "Message",
            buttons: [
              {
                title: "Continue Shopping",
              },
              {
                title: "Checkout",
              },
              {
                title: "Empty Cart",
              },
            ],
            expand: true,
          },
          position: {
            x: 1962.2705205891434,
            y: 92.16839075543422,
          },
          width: 324,
          height: 456,
          selected: false,
          positionAbsolute: {
            x: 1962.2705205891434,
            y: 92.16839075543422,
          },
          dragging: false,
        },
        {
          id: "666",
          type: "message",
          data: {
            content: "Your cart has been emptyed.",
            title: "Message",
            buttons: [
              {
                title: "Continue Shopping",
              },
            ],
            expand: true,
          },
          position: {
            x: 2450.5159881521317,
            y: 388.3467074756295,
          },
          width: 324,
          height: 212,
          selected: false,
          positionAbsolute: {
            x: 2450.5159881521317,
            y: 388.3467074756295,
          },
          dragging: false,
        },
        {
          id: "A902",
          type: "message",
          data: {
            content: "Follow the link below to finalize your payment:",
            title: "Message",
            buttons: [
              {
                title: "Pay Now",
              },
            ],
            expand: true,
          },
          position: {
            x: 2451.0651895607707,
            y: -72.25469066316799,
          },
          width: 324,
          height: 231,
          selected: false,
          positionAbsolute: {
            x: 2451.0651895607707,
            y: -72.25469066316799,
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
            headerImage: "/images/header-image-1.png",
            title: "Message",
            expand: true,
          },
          position: {
            x: 3693.447431584487,
            y: -226.05510495674622,
          },
          width: 324,
          height: 342,
          selected: false,
          positionAbsolute: {
            x: 3693.447431584487,
            y: -226.05510495674622,
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
            x: 2943.2437272030274,
            y: 278.48733059500194,
          },
          width: 324,
          height: 168,
          selected: false,
          positionAbsolute: {
            x: 2943.2437272030274,
            y: 278.48733059500194,
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
            x: 2941.591844116149,
            y: -15.439468526599207,
          },
          width: 324,
          height: 168,
          selected: false,
          positionAbsolute: {
            x: 2941.591844116149,
            y: -15.439468526599207,
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
            x: 3450.7989575496445,
            y: -87.00495263126555,
          },
          width: 157,
          height: 56,
          selected: false,
          positionAbsolute: {
            x: 3450.7989575496445,
            y: -87.00495263126555,
          },
          dragging: false,
        },
        {
          id: "10",
          type: "message",
          data: {
            content:
              "While we create your payment link here is a video we think you will enjoy",
            headerImage: "/images/video-cover.png",
            title: "Message",
            expand: true,
          },
          position: {
            x: 1962.8994195814062,
            y: -296.1925149053171,
          },
          width: 324,
          height: 342,
          selected: false,
          positionAbsolute: {
            x: 1962.8994195814062,
            y: -296.1925149053171,
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
            x: 3581.751103610758,
            y: 278.16520020026235,
          },
          width: 324,
          height: 193,
          selected: false,
          positionAbsolute: {
            x: 3581.751103610758,
            y: 278.16520020026235,
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
      }}
    >
      <Box
        sx={{
          background: "#20232a",
          width: "56px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: 48,
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            borderBottom: "1px solid #616161",
            "& > svg": {
              width: 24,
              height: 24,
              fill: "#fff",
            },
          }}
        >
          <ConnectlyWhiteIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            height: 48,
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            borderBottom: "1px solid #616161",
            "& > svg": {
              width: 24,
              height: 24,
              fill: "#fff",
            },
          }}
        >
          <UserIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            height: 48,
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "& > svg": {
              width: 24,
              height: 24,
              fill: "#fff",
            },
          }}
        >
          <BrickIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            height: 48,
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "& > svg": {
              width: 24,
              height: 24,
              fill: "#fff",
            },
          }}
        >
          <BubleIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            height: 48,
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "& > svg": {
              width: 24,
              height: 24,
              fill: "#fff",
            },
          }}
        >
          <RuporIcon />
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: 1,
            background:
              "linear-gradient(180deg, rgba(121, 134, 203, 0.2) 0%, rgba(255, 255, 255, 0) 41.15%), #FFFFFF;",
          }}
        >
          <NodesSidebar />
          <Flow initialEdges={initialEdges} initialNodes={initialNodes} />
        </Box>
        <Box
          sx={{
            height: 70,
            width: "100%",
            background: "#fff",
            boxShadow: "0px -4px 4px rgba(0, 0, 0, 0.15)",
            display: "flex",
            justifyContent: "flex-end",
            boxSizing: "border-box",
            padding: "19px 24px",
            gap: 1,
          }}
        >
          <Button>Cancel</Button>
          <Button variant="contained">Next</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FlowChart;
