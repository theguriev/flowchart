import React, { FC } from "react";
import { Card, Typography, Box, Chip, useTheme } from "@mui/material";
import { Handle, Position } from "react-flow-renderer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { DelayNodeProps } from "./types";

export const DelayNode: FC<DelayNodeProps> = ({
  id,
  data: { title, content },
}) => {
  const theme = useTheme();
  return (
    <Card sx={{ padding: 1.5 }}>
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
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <AccessTimeIcon />
            <Typography>{title}</Typography>
          </Box>
          <Chip
            label={content}
            sx={{
              paddingTop: 0.5,
              paddingBottom: 0.5,
              paddingLeft: 0,
              paddingRight: 0,
              background: (theme) => theme.palette.common.black,
              color: (theme) => theme.palette.info.contrastText,
              borderRadius: 1,
            }}
          />
        </Box>
      </Box>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-right`}
        style={{ background: theme.palette.connectionLine }}
      />
    </Card>
  );
};
