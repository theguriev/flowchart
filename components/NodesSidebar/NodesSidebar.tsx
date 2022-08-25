import { DragEventHandler } from "react";
import { Box, Typography, Button, OutlinedInput, Card } from "@mui/material";
import HighlightIcon from "@mui/icons-material/Highlight";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import MessageIcon from "@mui/icons-material/Message";
import LowPriorityIcon from "@mui/icons-material/LowPriority";

export const NodesSidebar = () => {
  const handleDragStart =
    (type: string): DragEventHandler<HTMLDivElement> =>
    (event) => {
      event.dataTransfer.setData("application/reactflow", type);
      event.dataTransfer.effectAllowed = "move";
    };
  return (
    <Box
      sx={{
        boxShadow: "1px 0px 0px rgba(0, 0, 0, 0.08)",
        padding: 3,
        width: 273,
        background: (theme) => theme.palette.background.paper,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Build campaign
      </Typography>
      <Button>
        <HighlightIcon />
        Tips
      </Button>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <Typography variant="subtitle1" fontWeight={500}>
          Campaign name
        </Typography>
        <OutlinedInput
          value="Welcome series 2022"
          skin="search"
          sx={{
            padding: 0,
            "& > input": {
              paddingTop: 1,
              paddingBottom: 1,
              paddingLeft: 2,
              paddingRight: 2,
            },
          }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <Typography variant="subtitle1" fontWeight={500}>
          Drag and Drop
        </Typography>
        <Card
          sx={{
            padding: 1.5,
            display: "flex",
            gap: 1,
            alignItems: "center",
            "& > svg": {
              fill: (theme) => theme.palette.connectionLine,
            },
            cursor: "grab",
          }}
          draggable
          onDragStart={handleDragStart("trigger")}
        >
          <TouchAppIcon />
          <Typography>Trigger</Typography>
        </Card>
        <Card
          sx={{
            padding: 1.5,
            display: "flex",
            gap: 1,
            alignItems: "center",
            "& > svg": {
              fill: (theme) => theme.palette.connectionLine,
            },
            cursor: "grab",
          }}
          draggable
          onDragStart={handleDragStart("delay")}
        >
          <AccessAlarmIcon />
          <Typography>Delay</Typography>
        </Card>
        <Card
          sx={{
            padding: 1.5,
            display: "flex",
            gap: 1,
            alignItems: "center",
            "& > svg": {
              fill: (theme) => theme.palette.connectionLine,
            },
            cursor: "grab",
          }}
          draggable
          onDragStart={handleDragStart("message")}
        >
          <MessageIcon />
          <Typography>Message</Typography>
        </Card>
        <Card
          sx={{
            padding: 1.5,
            display: "flex",
            gap: 1,
            alignItems: "center",
            "& > svg": {
              fill: (theme) => theme.palette.connectionLine,
            },
            cursor: "grab",
          }}
          draggable
          onDragStart={handleDragStart("actionShopify")}
        >
          <LowPriorityIcon />
          <Typography>Action</Typography>
        </Card>
      </Box>
    </Box>
  );
};
