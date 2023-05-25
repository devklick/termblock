import { Meta, StoryObj } from "@storybook/react";

import TermBlock from "./Terminal";
import * as Terminal from "./Terminal/Terminal.stories";
import * as WindowButtons from "./WindowButtons/WindowButtons.stories";
import * as TitleBar from "./TitleBar/TitleBar.stories";
import * as Footer from "./Footer/Footer.stories";
import * as Themes from "../themes/Themes.stories";

type Story = StoryObj<typeof TermBlock>;

/**
 * TermBlock is a simple React component library that allows
 * you to render faux terminals. You may find it useful if you want
 * to display, for example, instructions on how to perform certain
 * tasks in the terminal on your website.
 */
const meta: Meta<typeof TermBlock> = {
  title: "TermBlock",
  component: TermBlock,
  tags: ["autodocs"],
};

/* ============ TERMINAL ============ */
export const TerminalDefault: Story = {
  name: "Terminal - Default",
  ...Terminal.Default,
};

export const TerminalCommands: Story = {
  name: "Terminal - Commands",
  ...Terminal.Commands,
};

export const TerminalOverflow: Story = {
  name: "Terminal - Overflow",
  ...Terminal.Overflow,
};

/* ============ THEMES ============ */
export const ThemesBuiltIn: Story = {
  name: "Themes - Built In Themes",
  ...Themes.BuiltInThemes,
};
export const ThemesCustom: Story = {
  name: "Themes - Custom Themes",
  ...Themes.CustomTheme,
};

/* ============ TITLE BAR ============ */
export const TitleBarDefault: Story = {
  name: "TitleBar - Default",
  ...TitleBar.Default,
};
export const TitleBarTitle: Story = {
  name: "TitleBar - Title",
  ...TitleBar.Title,
};
export const TitleBarColors: Story = {
  name: "TitleBar - Colors",
  ...TitleBar.Colors,
};

/* ============ BUTTONS ============ */
export const ButtonPosition: Story = {
  name: "Buttons - Position",
  ...WindowButtons.Position,
};
export const ButtonVariant: Story = {
  name: "Buttons - Variant",
  ...WindowButtons.Variant,
};
export const ButtonOrdering: Story = {
  name: "Buttons - Ordering",
  ...WindowButtons.Ordering,
};
export const ButtonColors: Story = {
  name: "Buttons - Colors",
  ...WindowButtons.Colors,
};

/* ============ FOOTER ============ */
export const FooterDefault: Story = {
  name: "Footer - Default",
  ...Footer.Default,
};
export const FooterColors: Story = {
  name: "Footer - Colors",
  ...Footer.Colors,
};

export default meta;
