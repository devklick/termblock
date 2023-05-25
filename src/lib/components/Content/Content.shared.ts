import { Colors } from "../shared";

export interface ContentTheme {
  height?: "auto" | number;
  colors: Colors & {
    context: string;
    separator: string;
    scrollbar: string;
  };
}
