import styled from "styled-components";
import { Colors } from "../shared";
import { globalTheme } from "../../themes/config";

export const TitleBar = styled.div<{
  colors?: Partial<Colors>;
}>`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 12px 12px 0 0;
  background: ${(props) =>
    props.colors?.background ?? globalTheme.titleBar.colors.background};
  color: ${(props) =>
    props.colors?.foreground ?? globalTheme.titleBar.colors.foreground};
`;

export const Title = styled.span`
  font-weight: bold;
`;
