import { DeepPartial } from "../shared";
import * as styles from "./CommandSection.styles";
import { CommandSectionTheme } from "./CommandSection.shared";

export interface CommandSectionProps extends DeepPartial<CommandSectionTheme> {
  /**
   * The text that precedes the command being executed.
   * This is often the username, current directory etc.
   *
   * @default "~/project"
   */
  context?: string;
  /**
   * The command being executed.
   *
   * @default "npm install typescript"
   */
  command: string;
  /**
   * The output to show after executing the command.
   * 
   * @default 
   *  "added 1 package, and audited 2 packages in 520ms",
      "found 0 vulnerabilities",
   */
  output?: string[];
}

function CommandSection({
  context = "~/project",
  command,
  output,
  colors,
}: CommandSectionProps) {
  return (
    <>
      <styles.CommandSection>
        <styles.CommandInput>
          <styles.Context>
            <styles.ContextText color={colors?.context}>
              {context}
            </styles.ContextText>
          </styles.Context>

          <styles.Separator>
            <styles.SeparatorText color={colors?.separator}>
              {">"}
            </styles.SeparatorText>
          </styles.Separator>

          <styles.Command>
            <styles.CommandText>{command}</styles.CommandText>
          </styles.Command>
        </styles.CommandInput>

        <styles.CommandOutputContainer>
          {output?.map((line, i) => (
            <styles.CommandOutputLine key={i}>{line}</styles.CommandOutputLine>
          ))}
        </styles.CommandOutputContainer>
      </styles.CommandSection>
    </>
  );
}

export default CommandSection;
