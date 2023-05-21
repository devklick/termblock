import styled from "styled-components";
import { globalTheme } from "../../themes/config";

export const CommandSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommandInput = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CurrentDirectory = styled.div``;

export const CurrentDirectoryText = styled.div<{
  directoryColor?: string;
}>`
  font-weight: bold;
  color: ${(props) =>
    props.directoryColor ?? globalTheme.content.colors.directory};
`;

export const Separator = styled.div`
  font-weight: bold;
  margin: 0 10px;
`;

export const Command = styled.div``;

export const CommandText = styled.span``;

export const SeparatorText = styled.div<{ color?: string }>`
  color: ${(props) => props.color ?? globalTheme.content.colors.separator};
`;

export const CommandOutputContainer = styled.div`
  margin-top: 7px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const CommandOutputLine = styled.span``;
