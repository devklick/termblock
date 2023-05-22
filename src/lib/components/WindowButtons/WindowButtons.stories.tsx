import { Meta, StoryObj } from "@storybook/react";
import { ButtonPosition, ButtonVariant } from "./WindowButtons.shared";

import TermBlock from "../Terminal";
import { PartialTerminalTheme } from "../..";

/**
 * TermBlock renders "buttons" on the terminal by default. While
 * they are not functional, they add to the look-and-feel of the terminal.
 *
 * There are a few ways to configure the buttons, and this section
 * gives you some info on how to do just that.
 */
const meta: Meta<typeof TermBlock> = {
  title: "Buttons",
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

const positionThemes: Record<ButtonPosition, PartialTerminalTheme> = {
  left: { titleBar: { buttons: { position: "left" } } },
  right: { titleBar: { buttons: { position: "right" } } },
};

const variantThemes: Record<ButtonVariant, PartialTerminalTheme> = {
  "mac-os": { titleBar: { buttons: { variant: "mac-os" } } },
  none: { titleBar: { buttons: { variant: "none" } } },
};

/**
 * Whether you're a righty or a lefty, TermBlock has you covered!
 * You can chose whether to render the window buttons in the
 * left or right corner of the terminal.
 *
 * By default, the buttons are displayed in the top left corner.
 *
 * Note that the "close" button will always be nearest to the
 * outer edge of the terminal, the "maximize" button closest to
 * the middle, and the "minimize" button will always be in between.
 */
export const Position: StoryObj<typeof TermBlock> = {
  args: {
    title: "Button Position",
    theme: { titleBar: { buttons: { position: "left" } } },
  },
  argTypes: {
    theme: {
      options: Object.keys(positionThemes),
      mapping: positionThemes,
    },
  },
};

/**
 * You also have the option to specify which button variant
 * you would like to display. At the moment, only "mac-os" or "none"
 * are supported, but "windows" buttons will be included in the future.
 */
export const Variant: StoryObj<typeof TermBlock> = {
  args: {
    title: "Button Variant",
    theme: { titleBar: { buttons: { variant: "mac-os" } } },
  },
  argTypes: {
    commands: {
      control: false,
    },
    theme: {
      options: Object.keys(variantThemes),
      mapping: variantThemes,
    },
  },
};

/**
 * You can override the global theme and apply colors to
 * the terminal buttons by passing in props.
 *
 * You can provide any valid format, e.g:
 * - Color name (lime)
 * - HEX value (#00ff00)
 * - RGB Value (rgb(0, 255, 0))
 * - HSL value (hsl(120, 100.00%, 50.00%))
 */
export const Colors: StoryObj<typeof TermBlock> = {
  args: {
    title: "Button Variant",
    theme: {
      titleBar: {
        buttons: {
          colors: {
            close: "fuchsia",
            min: "orangered",
            max: "lime",
          },
        },
      },
    },
  },
  argTypes: {
    commands: {
      control: false,
    },
    theme: {
      titleBar: {
        buttons: {
          colors: {
            min: "",
            max: "",
            close: "",
          },
        },
      },
    },
  },
};

export default meta;
