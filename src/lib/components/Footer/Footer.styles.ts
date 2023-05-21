import styled from "styled-components";
import { DeepPartial } from "../shared";
import { globalTheme } from "../../themes/config";
import { FooterTheme } from "./Footer.shared";

export const Footer = styled.div<DeepPartial<FooterTheme>>`
  width: 100%;
  height: 15px;
  border-radius: 0 0 12px 12px;
  background: ${(props) =>
    props?.colors?.background ?? globalTheme.footer.colors.background};
  color: ${(props) =>
    props?.colors?.foreground ?? globalTheme.footer.colors.foreground};
`;
