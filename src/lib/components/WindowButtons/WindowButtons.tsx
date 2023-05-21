import { DeepPartial } from "../shared.ts";

import * as styles from "./WindowButton.styles";
import { WindowButtonsTheme } from "./WindowButtons.shared.ts";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WindowButtonsProps extends DeepPartial<WindowButtonsTheme> {}

function WindowButtons({
  position = "left",
  variant = "mac-os",
  colors,
}: WindowButtonsProps) {
  if (variant === "none") return null;

  const buttons: Array<React.JSX.Element> = [
    <styles.WindowButton
      key={"x"}
      type="close"
      variant={variant}
      color={colors?.close}
    />,
    <styles.WindowButton
      key={"-"}
      type="min"
      variant={variant}
      color={colors?.min}
    />,
    <styles.WindowButton
      key={"+"}
      type="max"
      variant={variant}
      color={colors?.max}
    />,
  ];

  if (position === "right") buttons.reverse();

  return (
    <styles.WindowButtonContainer position={position}>
      {buttons}
    </styles.WindowButtonContainer>
  );
}

export default WindowButtons;
