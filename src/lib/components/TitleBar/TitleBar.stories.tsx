import { Meta, StoryObj } from "@storybook/react";

import TermBlock from "../Terminal";
/**
 * The Title Bar is the uppermost section of the terminal.
 * In a real terminal, it may display your username, machine name,
 * command being run etc. In TermBlock, it can be whatever you want.
 *
 * It's also where the window buttons live. For information on the buttons,
 * see the Buttons stories.
 */
const meta: Meta<typeof TermBlock> = {
  title: "Title Bar",
  component: TermBlock,
  tags: ["autodocs"],
  argTypes: {
    commands: {
      control: false,
    },
  },
};

/**
 * If you decide not to give your terminal a title, the default
 * value `TermBlock` will be used.
 */
export const Default: StoryObj<typeof TermBlock> = {
  argTypes: {
    theme: {
      control: false,
    },
  },
};

/**
 * Giving your terminal a title is as simple as passing
 * in a string prop.
 */
export const Title: StoryObj<typeof TermBlock> = {
  args: {
    title: "user@machine",
  },
  argTypes: {
    theme: {
      control: false,
    },
  },
};

/**
 * As with most aspects of TermBlock, you can override the default
 * global theme by passing in props.
 *
 * You can provide any valid format, e.g:
 * - Color name (lime)
 * - HEX value (#00ff00)
 * - RGB Value (rgb(0, 255, 0))
 * - HSL value (hsl(120, 100.00%, 50.00%))
 */
export const Colors: StoryObj<typeof TermBlock> = {
  args: {
    theme: {
      titleBar: {
        colors: {
          background: "#5557b3",
          foreground: "#f0a2ec",
        },
      },
    },
  },
};

export default meta;
