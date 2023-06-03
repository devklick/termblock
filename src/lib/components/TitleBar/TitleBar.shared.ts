import { WindowButtonsTheme } from "../WindowButtons/WindowButtons.shared";
import { Colors, Corner } from "../shared";

export interface TitleBarTheme {
  corners: Corner;
  buttons: WindowButtonsTheme;
  colors: Colors;
}
