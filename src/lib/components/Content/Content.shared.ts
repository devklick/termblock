import { Colors } from "../shared";

export interface ContentTheme {
  height?: "auto" | number;
  colors: Colors & {
    directory: string;
    separator: string;
    scrollbar: string;
  };
}
