import { TerminalTheme } from ".";

const paperColor: TerminalTheme = {
  titleBar: {
    corners: "rounded",
    colors: {
      background: "#dcdcdc",
      foreground: "#444444",
    },
    buttons: {
      variant: "mac-os",
      position: "left",
      colors: {
        min: "#d75f00",
        max: "#008700",
        close: "#d70000",
      },
    },
  },
  content: {
    colors: {
      background: "#ededed",
      foreground: "#444444",
      context: "#0087af",
      separator: "#af0000",
      scrollbar: "#dcdcdc",
    },
  },
  footer: {
    corners: "rounded",
    colors: {
      background: "#ededed",
      foreground: "#444444",
    },
  },
};

export default paperColor;
