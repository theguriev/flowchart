import React, { FC } from "react";
import { Card, Typography, Collapse, Box, useTheme } from "@mui/material";
import { Handle, Position } from "react-flow-renderer";
import { ExpandIconButton } from "../ExpandIconButton";
import { TriggerNodeProps } from "./types";
import ShopifyIcon from "!svg-react-loader!public/images/shopify.svg";

export const TriggerNode: FC<TriggerNodeProps> = ({
  id,
  data: { title, content, subtitle, expand },
  onToggleExpand,
}) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        width: 300,
        padding: 1.5,
        backgroundColor: theme.palette.common.black,
        color: (theme) => theme.palette.info.contrastText,
      }}
    >
      <Handle
        type="source"
        position={Position.Right}
        id={id}
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
            <ShopifyIcon />
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
            padding: 1.5,
            backgroundColor: (theme) => theme.palette.grey[100],
            borderRadius: 1,
            display: "flex",
            flexDirection: "column",
            color: (theme) => theme.palette.text.primary,
          }}
        >
          {content}
        </Box>
      </Collapse>
    </Card>
  );
};
