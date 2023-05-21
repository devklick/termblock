export const ButtonTypes = ["close", "min", "max"] as const;
export type ButtonType = (typeof ButtonTypes)[number];

export const ButtonVariants = ["none", "mac-os" /* | "windows";*/] as const;
export type ButtonVariant = (typeof ButtonVariants)[number];

export const ButtonPositions = ["left", "right"] as const;
export type ButtonPosition = (typeof ButtonPositions)[number];

export interface WindowButtonsTheme {
  /**
   * The type of buttons to be displayed in the title bar.
   *
   * **Note**: windows buttons will be added in future.
   */
  variant: ButtonVariant;
  /**
   * The position within the title bar that the
   * buttons should be displayed.
   */
  position: ButtonPosition;

  colors: {
    /**
     * The button that closes the terminal.
     */
    close: string;
    /**
     * The button that maximizes the terminal.
     */
    max: string;
    /**
     * The button that minimizes the terminal.
     */
    min: string;
  };
}
