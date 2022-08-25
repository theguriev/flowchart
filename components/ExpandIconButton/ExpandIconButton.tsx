import React, { FC, ComponentProps } from "react";
import { IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const ExpandIconButton: FC<
  { expand: boolean } & ComponentProps<typeof IconButton>
> = ({ expand = false, ...rest }) => (
  <IconButton
    sx={{
      transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
      width: 32,
      height: 32,
      background: (theme) => theme.palette.grey[100],
      "&:hover": {
        background: (theme) => theme.palette.grey[200],
      },
      transition: (theme) =>
        theme.transitions.create("transform", {
          duration: theme.transitions.duration.shortest,
        }),
    }}
    size="small"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    <ExpandMoreIcon />
  </IconButton>
);
