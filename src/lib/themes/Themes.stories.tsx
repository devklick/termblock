import { Meta, StoryObj } from "@storybook/react";

import TermBlock from "../components/Terminal";
import nord from "./nord";
import oneDarkPro from "./oneDarkPro";
import paperColor from "./paperColor";

const nonControlFields = {
  commands: {
    control: false,
  },
  title: {
    control: false,
  },
};
const themes = { nord, oneDarkPro, paperColor };

/**
 * Every website is different, and the odds are, if you want to use TermBlock,
 * you're probably going to want it fit match the design of your site. Perhaps
 * one of the built in themes will be suitable, but if not, you can roll your own.
 *
 * You can either configure your terminal theme via props, or globally.
 * In addition to the documentation here, check out the README for more.
 */
const meta: Meta<typeof TermBlock> = {
  title: "Themes",
  component: TermBlock,
  tags: ["autodocs"],
  argTypes: {
    ...nonControlFields,
  },
};

/**
 * TermBlock comes with some of your favorite themes pre-configured.
 * All you have to do is tell TermBlock to use them.
 *
 * The default theme is Nord, because who doesn't love Nord?!
 *
 * While there are only a few at the moment, this list will grow in the near future.
 */
export const BuiltInThemes: StoryObj<typeof TermBlock> = {
  argTypes: {
    theme: {
      options: Object.keys(themes),
      mapping: themes,
    },
  },
};

/**
 * Rather than using one of the built in themes provided by TermBlock,
 * you can create your own!
 *
 *  You can provide any valid color format, e.g:
 * - Color name (lime)
 * - HEX value (#00ff00)
 * - RGB Value (rgb(0, 255, 0))
 * - HSL value (hsl(120, 100.00%, 50.00%))
 */
export const CustomTheme: StoryObj<typeof TermBlock> = {
  args: {
    theme: {
      titleBar: {
        colors: {
          background: "#2b2a28",
          foreground: "#c4a244",
        },
        buttons: {
          colors: {
            close: "#a53731",
            max: "#585e3c",
            min: "#b4a681",
          },
        },
      },
      content: {
        colors: {
          background: "#585e3c",
          foreground: "#b4a681",
          directory: "#c4a244",
          separator: "#2b2a28",
          scrollbar: "#585e3c",
        },
      },
      footer: {
        colors: {
          background: "#585e3c",
          foreground: "#b4a681",
        },
      },
    },
  },
};

export default meta;
