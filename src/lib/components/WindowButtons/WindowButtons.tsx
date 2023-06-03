import { DeepPartial } from "../shared.ts";
import {
  ButtonPosition,
  ButtonType,
  ButtonVariant,
  DistinctTuple,
  WindowButtonColors,
  WindowButtonsTheme,
} from "./WindowButtons.shared.ts";

import * as styles from "./WindowButton.styles";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WindowButtonsProps extends DeepPartial<WindowButtonsTheme> {}

const defaultButtonOrder: Record<ButtonVariant, DistinctTuple<ButtonType>> = {
  "mac-os": ["close", "min", "max"],
  windows: ["min", "max", "close"],
  none: [],
};

const defaultButtonPosition: Record<
  Exclude<ButtonVariant, "none">,
  ButtonPosition
> = {
  "mac-os": "left",
  windows: "right",
};

const buttonKeys: Record<ButtonType, string> = {
  close: "x",
  min: "-",
  max: "+",
};

function MacOSButton({
  variant,
  colors,
  type,
}: {
  variant: ButtonVariant;
  colors?: Partial<WindowButtonColors>;
  type: ButtonType;
}) {
  return (
    <styles.MacOSWindowButton
      key={buttonKeys[type]}
      type={type}
      variant={variant}
      color={colors && colors[type]}
    />
  );
}

function CloseButton({
  variant,
  colors,
}: {
  variant: ButtonVariant;
  colors?: Partial<WindowButtonColors>;
}) {
  switch (variant) {
    case "mac-os":
      return MacOSButton({ variant, colors, type: "close" });
    case "windows":
      return (
        <styles.MSWindowCloseButton
          key={buttonKeys["close"]}
          fill={colors?.close}
        />
      );
    default:
      return null;
  }
}
function MinButton({
  variant,
  colors,
}: {
  variant: ButtonVariant;
  colors?: Partial<WindowButtonColors>;
}) {
  switch (variant) {
    case "mac-os":
      return MacOSButton({ variant, colors, type: "min" });
    case "windows":
      return (
        <styles.MSWindowMinButton
          key={buttonKeys["min"]}
          fill={colors?.close}
        />
      );
    default:
      return null;
  }
}
function MaxButton({
  variant,
  colors,
}: {
  variant: ButtonVariant;
  colors?: Partial<WindowButtonColors>;
}) {
  switch (variant) {
    case "mac-os":
      return MacOSButton({ variant, colors, type: "max" });
    case "windows":
      return (
        <styles.MSWindowMaxButton
          key={buttonKeys["max"]}
          fill={colors?.close}
        />
      );
    default:
      return null;
  }
}

function WindowButtons({
  variant = "mac-os",
  order = defaultButtonOrder[variant],
  position,
  colors,
}: WindowButtonsProps) {
  if (variant === "none") return null;
  position ??= defaultButtonPosition[variant];

  const buttons: Array<React.JSX.Element | null> = order.map((o) => {
    switch (o) {
      case "close":
        return CloseButton({ variant, colors });
      case "max":
        return MaxButton({ variant, colors });
      case "min":
        return MinButton({ variant, colors });
      default:
        return null;
    }
  });

  return (
    <styles.WindowButtonsContainer position={position}>
      {buttons}
    </styles.WindowButtonsContainer>
  );
}

export default WindowButtons;
