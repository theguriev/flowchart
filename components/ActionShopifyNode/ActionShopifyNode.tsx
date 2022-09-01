import React, { FC } from "react";
import { Card, Typography, Collapse, Box, useTheme } from "@mui/material";
import { Handle, Position } from "react-flow-renderer";
import { ExpandIconButton } from "../ExpandIconButton";
import { ActionShopifyNodeProps } from "./types";
import ShopifyIcon from "!svg-react-loader!public/images/shopify.svg";

export const ActionShopifyNode: FC<ActionShopifyNodeProps> = ({
  id,
  data: { title, contents, subtitle, expand },
  onToggleExpand,
}) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        width: 300,
        padding: 1.5,
        backgroundColor: theme.palette.connectionLine,
        color: (theme) => theme.palette.info.contrastText,
      }}
    >
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
        sx={{
          paddingTop: 1.5,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {contents?.map((content) => (
            <Box
              key={content?.toString()}
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
          ))}
        </Box>
      </Collapse>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-right-shopify`}
        style={{ background: theme.palette.connectionLine }}
      />
    </Card>
  );
};
