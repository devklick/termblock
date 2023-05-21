import { TerminalTheme } from "../components/Terminal/Terminal.shared";

const nord: TerminalTheme = {
  titleBar: {
    colors: { background: "#2e3440", foreground: "#d9dce3" },
    buttons: {
      variant: "mac-os",
      position: "left",
      colors: { min: "#e6c075", max: "#9cb983", close: "#bf5f69" },
    },
  },
  content: {
    colors: {
      directory: "#5e81ac",
      separator: "#a3be8c",
      scrollbar: "#2e3440",
      background: "#252932",
      foreground: "#d9dce3",
    },
  },
  footer: {
    colors: {
      background: "#252932",
      foreground: "#d9dce3",
    },
  },
};

export default nord;
