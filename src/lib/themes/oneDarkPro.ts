import { TerminalTheme } from ".";

const oneDarkPro: TerminalTheme = {
  titleBar: {
    corners: "rounded",
    colors: {
      background: "#21252b",
      foreground: "#d7dae0",
    },
    buttons: {
      position: "left",
      variant: "mac-os",
      colors: {
        min: "#d19a66",
        max: "#8cc265",
        close: "#e05561",
      },
    },
  },
  content: {
    colors: {
      background: "#282c34",
      foreground: "#d7dae0",
      context: "#4aa5f0",
      separator: "#de73ff",
      scrollbar: "#282c34",
    },
  },
  footer: {
    corners: "rounded",
    colors: {
      background: "#282c34",
      foreground: "#d7dae0",
    },
  },
};

export default oneDarkPro;
