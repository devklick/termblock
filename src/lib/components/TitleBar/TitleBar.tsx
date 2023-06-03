import WindowButtons from "../WindowButtons";
import { DeepPartial } from "../shared";
import { TitleBarTheme } from "./TitleBar.shared";

import * as styles from "./TitleBar.styles";

interface TitleBarProps extends DeepPartial<TitleBarTheme> {
  /**
   * The text to be displayed in the title bar at the top of the TermBlock.
   *
   * @default 'TermBlock'
   */
  title?: string;
}

function TitleBar({
  title = "TermBlock",
  buttons,
  colors,
  corners,
}: TitleBarProps) {
  const buttonPosition = buttons?.position ?? "left";
  return (
    <styles.TitleBar colors={colors} corners={corners}>
      {buttonPosition === "left" && <WindowButtons {...buttons} />}
      <styles.Title>{title}</styles.Title>
      {buttonPosition === "right" && <WindowButtons {...buttons} />}
    </styles.TitleBar>
  );
}

export default TitleBar;
