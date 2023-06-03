import { Meta, StoryObj } from "@storybook/react";
import Content from "./Content";

type Story = StoryObj<typeof Content>;

const meta: Meta<typeof Content> = {
  title: "Content",
  component: Content,
  args: {
    overflow: "scroll",
  },
  argTypes: {
    commands: {
      control: false,
    },
  },
};

export const Default: Story = {};

export default meta;
