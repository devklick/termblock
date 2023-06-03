import { TerminalTheme } from ".";

const macOs: TerminalTheme = {
  titleBar: {
    buttons: {
      colors: {
        close: "#fb6058",
        min: "#fbb934",
        max: "#2cc641",
      },
      position: "left",
      variant: "mac-os",
      order: ["close", "min", "max"],
    },
    colors: {
      background: "#edeff0",
      foreground: "#494a49",
    },
    corners: "rounded",
  },
  content: {
    colors: {
      background: "#ffffff",
      context: "#000000",
      foreground: "#000000",
      scrollbar: "#aeaeae",
      separator: "#000000",
    },
  },
  footer: {
    colors: {
      background: "#ffffff",
      foreground: "#ffffff",
    },
    corners: "rounded",
  },
};

export default macOs;
