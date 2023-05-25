import styled from "styled-components";
import {
  ButtonPosition,
  ButtonType,
  ButtonVariant,
} from "./WindowButtons.shared";
import { globalTheme } from "../../themes/config";
import { ReactComponent as CloseIcon } from "./close-icon.svg";
import { ReactComponent as MaxIcon } from "./max-icon.svg";
import { ReactComponent as MinIcon } from "./min-icon.svg";

export const WindowButtonsContainer = styled.div<{
  position: ButtonPosition;
}>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 12px;
  left: ${(props) => (props.position === "left" ? 0 : "auto")};
  right: ${(props) => (props.position === "right" ? 0 : "auto")};
`;

export const WindowButton = styled.div<{
  variant: ButtonVariant;
  color?: string;
  type: ButtonType;
}>`
  width: 12px;
  height: 12px;
  background-color: ${(props) =>
    props.color ?? globalTheme.titleBar.buttons.colors[props.type]};
`;

export const MacOSWindowButton = styled(WindowButton)`
  border-radius: 50%;
`;

export const MSWindowCloseButton = styled(CloseIcon)`
  width: 12px;
  height: 12px;
  fill: ${(props) => props.fill ?? globalTheme.titleBar.buttons.colors.close};
`;
export const MSWindowMinButton = styled(MinIcon)`
  width: 12px;
  height: 12px;
  fill: ${(props) => props.fill ?? globalTheme.titleBar.buttons.colors.min};
`;
export const MSWindowMaxButton = styled(MaxIcon)`
  width: 12px;
  height: 12px;
  fill: ${(props) => props.fill ?? globalTheme.titleBar.buttons.colors.max};
`;
