import React, { FC } from "react";
import {
  Card,
  Typography,
  Button,
  Collapse,
  Box,
  useTheme,
} from "@mui/material";
import { Handle, Position } from "react-flow-renderer";
import { ExpandIconButton } from "../ExpandIconButton";
import { MessageNodeProps } from "./types";
import MessageIcon from "!svg-react-loader!public/images/message.svg";
import MessageCornerImage from "!svg-react-loader!public/images/message-corner.svg";

export const MessageNode: FC<MessageNodeProps> = ({
  id,
  data: { title, buttons = [], content, subtitle, expand, headerImage },
  onToggleExpand,
}) => {
  const theme = useTheme();
  return (
    <Card sx={{ width: 300, padding: 1.5 }}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-left`}
        style={{ background: theme.palette.connectionLine }}
      />
      <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: 28, height: 28, marginRight: 1 }}>
            <MessageIcon />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 500, lineHeight: 1 }}>
              {title}
            </Typography>
            {subtitle && <Typography variant="caption">{subtitle}</Typography>}
          </Box>
        </Box>
        <ExpandIconButton expand={!!expand} onClick={onToggleExpand} />
      </Box>
      <Collapse
        in={expand}
        timeout="auto"
        unmountOnExit
        sx={{ paddingTop: 1.5 }}
      >
        <Box
          sx={{
            padding: 2.5,
            backgroundColor: (theme) => theme.palette.grey[100],
            borderRadius: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minHeight: 40,
              padding: 1,
              boxSizing: "border-box",
              borderRadius: "0 6px 6px 6px",
              filter: "drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2))",
              backgroundColor: (theme) => theme.palette.background.paper,
              marginBottom: 0.5,
            }}
          >
            <Box
              sx={{
                color: "white",
                position: "absolute",
                top: -2.5,
                left: -8,
              }}
            >
              <MessageCornerImage />
            </Box>
            {headerImage && (
              <Box
                component="img"
                src={headerImage}
                alt={title}
                sx={{ borderRadius: 1, width: "100%", marginBottom: 1 }}
              />
            )}
            <Box sx={{ whiteSpace: "pre-line" }}>{content}</Box>
            <Box
              sx={{
                marginTop: 1,
                color: (theme) => theme.palette.text.disabled,
              }}
            >
              Reply ‘STOP’ to opt out
            </Box>
          </Box>
          {buttons.map((button) => (
            <Button
              key={button.title}
              variant="template"
              sx={{ marginBottom: 0.5 }}
            >
              {button.title}
              <Handle
                type="source"
                position={Position.Right}
                style={{ background: theme.palette.connectionLine }}
                id={`${id}-${button.title.toLowerCase().split(" ").join("-")}`}
              />
            </Button>
          ))}
          {!buttons.length && (
            <Handle
              type="source"
              position={Position.Right}
              id={`${id}-right`}
              style={{ background: theme.palette.connectionLine }}
            />
          )}
        </Box>
      </Collapse>
    </Card>
  );
};
