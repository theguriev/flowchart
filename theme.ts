import { createTheme } from "@mui/material";
import { grey, blue } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Palette {
    connectionLine: React.CSSProperties["color"];
  }
  interface PaletteOptions {
    connectionLine: React.CSSProperties["color"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    tag: true;
    template: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    templateStatus: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h7: true;
  }
}

declare module "@mui/material/TableCell" {
  interface TableCellProps {
    skin?: "common";
  }
}

declare module "@mui/material/OutlinedInput" {
  interface OutlinedInputProps {
    skin?: "search";
  }
}

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#007dff",
      light: blue[50],
      dark: "rgb(0,125,255)",
      contrastText: "#fff",
    },
    secondary: {
      main: grey[200],
      light: grey[100],
      dark: grey[500],
      contrastText: "#000",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
    divider: "#D6D6D6",
    connectionLine: "#7986CB",
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      variants: [
        {
          props: { variant: "tag" },
          style: {
            textTransform: "none",
            background: "#fff",
            borderRadius: 50,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 8,
            paddingBottom: 8,
          },
        },
        {
          props: { variant: "tag", color: "secondary" },
          style: {
            background: "#007dff",
            color: "#fff",
            "&:hover": {
              background: "#0069d9",
            },
          },
        },
        {
          props: { variant: "template" },
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "34px",
            padding: "0 12px",
            boxSizing: "border-box",
            borderRadius: "4px",
            background: "white",
            color: "#007dff",
            boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.2)",
            fontSize: "16px",
            lineHeight: "22px",
            cursor: "pointer",
            textTransform: "none",
          },
        },
      ],
    },
    MuiTableCell: {
      variants: [
        {
          props: { skin: "common" },
          style: {
            background: grey[100],
            border: 0,
          },
        },
      ],
    },
    MuiChip: {
      variants: [
        {
          props: { variant: "templateStatus" },
          style: {
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "17px",
            letterSpacing: "0.15px",
          },
        },
      ],
    },
    MuiOutlinedInput: {
      variants: [
        {
          props: { skin: "search" },
          style: {
            borderRadius: 10,
            background: "#fff",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#E1E1E1",
            "& fieldset": {
              border: 0,
            },
          },
        },
      ],
    },
  },
});
