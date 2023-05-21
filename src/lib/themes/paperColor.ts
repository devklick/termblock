import { TerminalTheme } from "../components/Terminal/Terminal.shared";

const paperColor: TerminalTheme = {
  titleBar: {
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
      directory: "#0087af",
      separator: "#af0000",
      scrollbar: "#dcdcdc",
    },
  },
  footer: {
    colors: {
      background: "#ededed",
      foreground: "#444444",
    },
  },
  // titleBar: {  },
  // buttonColors: {  },
};

export default paperColor;
