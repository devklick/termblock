// prettier-ignore
export type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]>; }
  : T;

export interface Colors {
  /**
   * The color of the background (i.e. non-text)
   */
  background: string;
  /**
   * The color of the text.
   */
  foreground: string;
}
