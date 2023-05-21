import nord from "./nord";
import oneDarkPro from "./oneDarkPro";
import paperColor from "./paperColor";
export type { TerminalTheme } from "../components/Terminal/Terminal.shared";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PartialTerminalTheme extends DeepPartial<TerminalTheme> {}

import { configureGlobal } from "./config";
import { DeepPartial } from "../components/shared";
import { TerminalTheme } from "../components/Terminal/Terminal.shared";

export const themes = {
  configureGlobal,
  nord,
  oneDarkPro,
  paperColor,
};
