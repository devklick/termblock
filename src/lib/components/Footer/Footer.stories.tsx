import { Meta, StoryObj } from "@storybook/react";
import TermBlock from "../Terminal";

/**
 * The footer is the very bottom of the terminal, and it's only real purpose
 * is round off the bottom corners without having the scrollbar overlap with
 * the rounded corners.
 */
const meta: Meta<typeof TermBlock> = {
  title: "Footer",
  component: TermBlock,
  tags: ["autodocs"],
  argTypes: {
    commands: {
      control: false,
    },
    title: {
      control: false,
    },
  },
};

/**
 * By default, the footer does not require any params and
 * will use the same color as the main content of the terminal.
 */
export const Default: StoryObj<typeof TermBlock> = {
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
 *
 * But lets be honest, it really
 * doesn't look very good, so you'll probably just want to the
 * same color as your terminal content.
 *
 * Note that although there's no way to render any text
 * to the footer, it does allow you to specify a foreground color.
 * This is mainly for consistency with the rest of the theme options
 * and for possible future usage.
 */
export const Colors: StoryObj<typeof TermBlock> = {
  args: {
    theme: {
      footer: {
        colors: {
          background: "#5e81ac",
          foreground: "#44b190",
        },
      },
    },
  },
};

export default meta;
