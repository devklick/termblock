import { CommandSectionProps } from "../CommandSection/CommandSection.tsx";
import Content from "../Content";
import Footer from "../Footer";
import TitleBar from "../TitleBar/TitleBar.tsx";
import { DeepPartial } from "../shared.ts";
import * as styles from "./Terminal.styles";
import { TerminalTheme } from "./Terminal.shared.ts";

export interface TerminalProps {
  /**
   * The text to be displayed in the title bar at the top of the terminal.
   */
  title?: string;
  /**
   * The information about the commands that should be displayed in the terminal.
   */
  commands?: Array<CommandSectionProps>;
  /**
   * The overrides to be applied to the global theme.
   */
  theme?: DeepPartial<TerminalTheme>;
}

function Terminal(props?: TerminalProps): React.JSX.Element {
  return (
    <styles.Terminal>
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
    </styles.Terminal>
  );
}

export default Terminal;
