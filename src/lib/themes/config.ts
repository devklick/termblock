import { TerminalTheme } from "../components/Terminal/Terminal.shared";
import nord from "./nord";

export let globalTheme: TerminalTheme = nord;

export function configureGlobal(theme: TerminalTheme) {
  globalTheme = theme;
}
