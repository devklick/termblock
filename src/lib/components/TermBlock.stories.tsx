import { Meta, StoryObj } from "@storybook/react";

import TermBlock from "./Terminal";
// import { ButtonVariants } from "./WindowButtons/WindowButtons.shared";
// import nord from "../themes/nord";
// import oneDarkPro from "../themes/oneDarkPro";
// import paperColor from "../themes/paperColor";

const meta: Meta<typeof TermBlock> = {
  title: "TermBlock",
  component: TermBlock,
};

export const Default: StoryObj<typeof TermBlock> = {};

// const contentWithOverflow = [
//   {
//     command: "npm install typescript",
//     commandOutput: [
//       "added 1 package, and audited 2 packages in 520ms",
//       "found 0 vulnerabilities",
//     ],
//   },
//   {
//     command: "npm install @types/node",
//     commandOutput: [
//       "added 1 package, and audited 3 packages in 611ms",
//       "found 0 vulnerabilities",
//     ],
//   },
//   {
//     command: "npm install typescript",
//     commandOutput: [
//       "added 1 package, and audited 2 packages in 520ms",
//       "found 0 vulnerabilities",
//     ],
//   },
//   {
//     command: "npm install @types/node",
//     commandOutput: [
//       "added 1 package, and audited 3 packages in 611ms",
//       "found 0 vulnerabilities",
//     ],
//   },
//   {
//     command: "npm install typescript",
//     commandOutput: [
//       "added 1 package, and audited 2 packages in 520ms",
//       "found 0 vulnerabilities",
//     ],
//   },
//   {
//     command: "npm install @types/node",
//     commandOutput: [
//       "added 1 package, and audited 3 packages in 611ms",
//       "found 0 vulnerabilities",
//     ],
//   },
// ];

// export const Default: StoryObj<typeof TermBlock> = {
//   argTypes: {
//     buttons: {
//       options: typeof ButtonStyles,
//     },
//   },
// };
// export const Overflow: StoryObj<typeof TermBlock> = {
//   args: {
//     contentSections: contentWithOverflow,
//   },
// };
// export const CustomTheme: StoryObj<typeof TermBlock> = {
//   args: {
//     contentSections: contentWithOverflow,
//     theme: {
//       buttonColors: {
//         close: "#a53731",
//         max: "#488133",
//         min: "#d3a550",
//       },
//       titleBar: { backgroundColor: "#809aab", foregroundColor: "#0c284d" },
//       content: { backgroundColor: "#b4ced1", foregroundColor: "#608386" },
//       directoryColor: "#86965c",
//       separatorColor: "#a284b6",
//       scrollbarColor: "#a284b6",
//       footer: { backgroundColor: "#b4ced1", foregroundColor: "#608386" },
//     },
//   },
// };
// export const RightButtons: StoryObj<typeof TermBlock> = {
//   args: {
//     buttons: { position: "right" },
//   },
// };

// const themes = { nord, oneDarkPro, paperColor };

// export const BuiltInThemes: StoryObj<typeof TermBlock> = {
//   argTypes: {
//     theme: {
//       options: Object.keys(themes),
//       mapping: themes,
//     },
//     buttons: {
//       disable: true,
//     },
//     contentSections: {
//       disable: true,
//     },
//   },
// };

export default meta;
