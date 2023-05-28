const BUTTON_VARIANT = ['primary', 'secondary', 'text'] as const;
export type ButtonVariant = (typeof BUTTON_VARIANT)[number];

export interface Colors {
  backgroundColor: string;
  textColor: string;
}
