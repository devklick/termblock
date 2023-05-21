import styled from "styled-components";
import { DeepPartial } from "../shared";
import { ContentTheme } from "./Content.shared";
import { globalTheme } from "../../themes/config";

function getHeight(props: Pick<ContentTheme, "height">) {
  if (!props.height || props.height == "auto") return "auto";
  return `${props.height}px`;
}
export const Content = styled.div<DeepPartial<ContentTheme>>`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: start;
  font-family: JetBrainsMono;
  font-size: 16px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: ${(props) => getHeight(props)};
  padding: 15px;
  padding-bottom: 0;
  background: ${(props) =>
    props.colors?.background ?? globalTheme.content.colors.background};
  color: ${(props) =>
    props.colors?.foreground ?? globalTheme.content.colors.foreground};
  scrollbar-color: ${(props) =>
      props.colors?.scrollbar ?? globalTheme.content.colors.scrollbar}
    ${(props) =>
      props.colors?.background ?? globalTheme.content.colors.background};
`;
