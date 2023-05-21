import { ContentTheme } from "../Content/Content.shared";
import { FooterTheme } from "../Footer/Footer.shared";
import { TitleBarTheme } from "../TitleBar/TitleBar.shared";

export interface TerminalTheme {
  titleBar: TitleBarTheme;
  content: ContentTheme;
  footer: FooterTheme;
}
