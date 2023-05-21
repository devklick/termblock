import styled from "styled-components";
import {
  ButtonPosition,
  ButtonType,
  ButtonVariant,
} from "./WindowButtons.shared";
import { globalTheme } from "../../themes/config";

export const WindowButtonContainer = styled.div<{
  position: ButtonPosition;
}>`
  position: absolute;
  display: flex;
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
  border-radius: 50%;
  background-color: ${(props) =>
    props.color ?? globalTheme.titleBar.buttons.colors[props.type]};
`;
