import { Meta, StoryObj } from "@storybook/react";

import TermBlock from "./Terminal";
// import { ButtonVariants } from "./WindowButtons/WindowButtons.shared";
import nord from "../themes/nord";
import oneDarkPro from "../themes/oneDarkPro";
import paperColor from "../themes/paperColor";
import { CommandSectionProps } from "./CommandSection";

const meta: Meta<typeof TermBlock> = {
  title: "TermBlock",
  component: TermBlock,
};

export const Default: StoryObj<typeof TermBlock> = {};

const commandsWithOverflow: Array<CommandSectionProps> = [
  {
    command: "npm install typescript",
    output: [
      "added 1 package, and audited 2 packages in 520ms",
      "found 0 vulnerabilities",
    ],
  },
  {
    command: "npm install @types/node",
    output: [
      "added 1 package, and audited 3 packages in 611ms",
      "found 0 vulnerabilities",
    ],
  },
  {
    command: "npm install typescript",
    output: [
      "added 1 package, and audited 2 packages in 520ms",
      "found 0 vulnerabilities",
    ],
  },
  {
    command: "npm install @types/node",
    output: [
      "added 1 package, and audited 3 packages in 611ms",
      "found 0 vulnerabilities",
    ],
  },
  {
    command: "npm install typescript",
    output: [
      "added 1 package, and audited 2 packages in 520ms",
      "found 0 vulnerabilities",
    ],
  },
  {
    command: "npm install @types/node",
    output: [
      "added 1 package, and audited 3 packages in 611ms",
      "found 0 vulnerabilities",
    ],
  },
];

export const Overflow: StoryObj<typeof TermBlock> = {
  args: {
    commands: commandsWithOverflow,
    theme: {
      content: {
        height: 320,
      },
    },
  },
};

export const CustomTheme: StoryObj<typeof TermBlock> = {
  args: {
    commands: commandsWithOverflow,
    theme: {
      content: {
        colors: {
          background: "#b4ced1",
          foreground: "#608386",
          directory: "#86965c",
          separator: "#a284b6",
          scrollbar: "#a284b6",
        },
        height: 320,
      },
      footer: {
        colors: {
          background: "#b4ced1",
          foreground: "#608386",
        },
      },
      titleBar: {
        buttons: {
          colors: {
            close: "#a53731",
            max: "#488133",
            min: "#d3a550",
          },
        },
      },
    },
  },
};

// export const RightButtons: StoryObj<typeof TermBlock> = {
//   args: {
//     buttons: { position: "right" },
//   },
// };

const themes = { nord, oneDarkPro, paperColor };

export const BuiltInThemes: StoryObj<typeof TermBlock> = {
  argTypes: {
    theme: {
      options: Object.keys(themes),
      mapping: themes,
    },
  },
};

export default meta;
