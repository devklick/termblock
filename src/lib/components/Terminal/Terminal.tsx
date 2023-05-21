import { CommandSectionProps } from "../CommandSection/CommandSection.tsx";
import Content from "../Content";
import Footer from "../Footer";
import TitleBar from "../TitleBar/TitleBar.tsx";
import { DeepPartial } from "../shared.ts";
import * as styles from "./Terminal.styles";
import { TerminalTheme } from "./Terminal.shared.ts";

export interface TerminalProps {
  /**
   * The text to be displayed in the title bar at the top of the TermBlock.
   */
  title?: string;
  commands?: Array<CommandSectionProps>;
  theme?: DeepPartial<TerminalTheme>;
}

function Terminal(props?: TerminalProps): React.JSX.Element {
  return (
    <styles.TerminalStyle>
      <TitleBar
        title={props?.title}
        buttons={props?.theme?.titleBar?.buttons}
        colors={props?.theme?.titleBar?.colors}
      />
      <Content
        commands={props?.commands}
        colors={props?.theme?.content?.colors}
        height={props?.theme?.content?.height}
      />
      <Footer colors={props?.theme?.footer?.colors} />
    </styles.TerminalStyle>
  );
}

export default Terminal;
