import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
  ],
  framework: "@storybook/react-vite",
  // Fix for firefox. See https://github.com/storybookjs/storybook/issues/33769#issuecomment-3929210792
  managerHead: (head) => `
    ${head}
    <style>
    main[aria-labelledby="main-preview-heading"] > div {
      place-content: stretch;
    }
  </style>
  `,
};
export default config;
