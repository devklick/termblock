import { Meta, StoryObj } from "@storybook/react";

import TermBlock from "./Terminal";

import { CommandSectionProps } from "./CommandSection";

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

/**
 * TermBlock is a simple React component library that allows you to render terminals.
 * You may find it useful if you want to display, for example, instructions
 * on how to perform certain tasks in the terminal on your website.
 */
const meta: Meta<typeof TermBlock> = {
  title: "TermBlock",
  component: TermBlock,
  tags: ["autodocs"],
};

/**
 * This is the default version of TermBlock with no
 * properties passed into the component.
 *
 * Realistically, you probably wouldnt want to do this,
 * as you would want to display relevant commands
 * and perhaps apply different styling, but it's an option.
 */
export const Default: StoryObj<typeof TermBlock> = {};

/**
 * In some cases, you may want to display many commands,
 * or a command that has a long output. You can either allow
 * the terminal to auto size to fit the terminal content, or
 * you can apply a fixed height via the `theme.content.height`
 * prop. If ding the latter, the content will become scrollable.
 */
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

export default meta;
