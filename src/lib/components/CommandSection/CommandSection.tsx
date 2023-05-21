import { DeepPartial } from "../shared";
import * as styles from "./CommandSection.styles";
import { CommandSectionTheme } from "./CommandSection.shared";

export interface CommandSectionProps extends DeepPartial<CommandSectionTheme> {
  /**
   * The directory that the command is being executed from.
   *
   * @default "~/project"
   */
  currentDirectory?: string;
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
  output: string[];
}

function CommandSection({
  currentDirectory = "~/project",
  command,
  output,
  colors,
}: CommandSectionProps) {
  return (
    <>
      <styles.CommandSection>
        <styles.CommandInput>
          <styles.CurrentDirectory>
            <styles.CurrentDirectoryText directoryColor={colors?.directory}>
              {currentDirectory}
            </styles.CurrentDirectoryText>
          </styles.CurrentDirectory>

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
          {output.map((line, i) => (
            <styles.CommandOutputLine key={i}>{line}</styles.CommandOutputLine>
          ))}
        </styles.CommandOutputContainer>
      </styles.CommandSection>
    </>
  );
}

export default CommandSection;
