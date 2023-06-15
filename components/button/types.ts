export const BUTTON_VARIANTS = ['primary', 'secondary', 'text'] as const;
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];

export interface Colors {
  backgroundColor: string;
  textColor: string;
}
