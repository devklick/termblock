import { Meta, StoryObj } from "@storybook/react";
import Terminal from "./Terminal";

const meta: Meta<typeof Terminal> = {
  title: "Buttons",
  component: Terminal,
  // tags: ["autodocs"],
  argTypes: {
    commands: {
      control: false,
    },
    title: {
      control: false,
    },
  },
};

export const Default: StoryObj<typeof Terminal> = {};

export default meta;
