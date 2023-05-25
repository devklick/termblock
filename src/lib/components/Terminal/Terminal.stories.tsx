import { Meta, StoryObj } from "@storybook/react";
import Terminal from "./Terminal";
import { CommandSectionProps } from "../CommandSection";

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

type Story = StoryObj<typeof Terminal>;

const meta: Meta<typeof Terminal> = {
  title: "Buttons",
  component: Terminal,
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
 * The Terminal component is your entrypoint into TermBlock.
 * This is aliased as TermBlock for brevity.
 *
 * TermBlock does not require any parameters. This example
 * is the default implementation with no parameters provided.
 *
 * Realistically, you probably wouldn't want to do this,
 * as you would want to display relevant commands
 * and perhaps apply different styling, but it's an option.
 */
export const Default: Story = {};

/**
 * You can specify multiped commands to be displayed displayed
 * in your terminal, and with each command you can include a list
 * of command outputs.
 *
 * You can also specify the context that the command is being
 * executed from, as well as overriding the colors for the context
 * info.
 *
 * Most of TermBlock is themable, and more on this topic is covered
 * in the Theme stories.
 */
export const Commands: Story = {
  args: {
    commands: [
      { command: "whoami", output: ["user"] },
      { command: "sudo -s", output: ["[sudo] password for user: ********"] },
      {
        command: "whoami",
        output: ["root"],
        context: "root@machine",
        colors: { directory: "#994f4f", separator: "#47629c" },
      },
    ],
  },
};

/**
 * In some cases, you may want to display many commands,
 * or a command that has a long output. You can either allow
 * the terminal to auto size to fit the terminal content
 * (which is the default behavior), or you can apply a fixed
 * height via the `theme.content.height` prop.
 * If ding the latter, the content will become scrollable.
 *
 * The the color of the scrollbar can be controlled via themes.
 */
export const Overflow: Story = {
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
