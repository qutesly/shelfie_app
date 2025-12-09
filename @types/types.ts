export interface Theme {
  uiBackground: string;
  uiForeground: string;
  text: string;
  primary: string;
  secondary: string;
  accent: string;
  error: string;
  success: string;
  warning: string;
  info: string;
  border: string;
  card: string;
  background: string;
}

export type ColorScheme = 'light' | 'dark' | 'system';

export interface ColorsType {
  light: Theme;
  dark: Theme;
}