import { TerminalTheme } from ".";

const windows10: TerminalTheme = {
  titleBar: {
    buttons: {
      variant: "windows",
      colors: {
        close: "#a7a7a7",
        max: "#a7a7a7",
        min: "#a7a7a7",
      },
      position: "right",
      order: ["min", "max", "close"],
    },
    colors: {
      background: "#ffffff",
      foreground: "#9a9a9b",
    },
    corners: "squared",
  },
  content: {
    colors: {
      background: "#0c0c0c",
      foreground: "#c5c5c5",
      context: "#c5c5c5",
      separator: "#c5c5c5",
      scrollbar: "#ffffff",
    },
  },
  footer: {
    colors: {
      background: "#0c0c0c",
      foreground: "#0c0c0c",
    },
    corners: "squared",
  },
};

export default windows10;
