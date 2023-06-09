import { ContentTheme } from "./Content.shared.ts";
import CommandSection, { CommandSectionProps } from "../CommandSection";
import { DeepPartial } from "../shared.ts";
import * as styles from "./Content.styles";

interface ContentProps extends DeepPartial<ContentTheme> {
  /**
   * The content of TermBlock content is made up from multiple sections,
   * where each section essentially contains a command and output.
   */
  commands?: Array<CommandSectionProps>;
}
function Content({
  colors,
  height,
  commands = [
    {
      command: "npm install termblock",
      output: [
        "added 1 package, and audited 2 packages in 520ms",
        "found 0 vulnerabilities",
      ],
    },
  ],
}: ContentProps) {
  return (
    <styles.Content className="content" colors={colors} height={height}>
      {commands.map((section, i) => (
        <CommandSection key={i} colors={colors} {...section} />
      ))}
    </styles.Content>
  );
}

export default Content;
