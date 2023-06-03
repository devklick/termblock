import { FooterTheme } from "./Footer.shared.ts";
import { DeepPartial } from "../shared.ts";
import * as styles from "./Footer.styles";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FooterProps extends DeepPartial<FooterTheme> {}

function Footer({ colors, corners = "rounded" }: FooterProps) {
  return <styles.Footer corners={corners} colors={colors} />;
}
export default Footer;
