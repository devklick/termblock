import styled from "styled-components";
import { globalTheme } from "../../themes/config";
import { TitleBarTheme } from "./TitleBar.shared";
import { DeepPartial } from "../shared";

export const TitleBar = styled.div<DeepPartial<TitleBarTheme>>`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: ${(props) =>
    props.corners == "rounded" ? "12px 12px 0 0" : 0};
  background: ${(props) =>
    props.colors?.background ?? globalTheme.titleBar.colors.background};
  color: ${(props) =>
    props.colors?.foreground ?? globalTheme.titleBar.colors.foreground};
`;

export const Title = styled.span`
  font-weight: bold;
`;
