// ===== REACT NATIVE TYPES =====
import {
  ViewStyle,
  TextStyle,
  ImageStyle,
  StyleProp,
  DimensionValue,
} from "react-native";

// ===== THEME TYPES =====
export interface ThemeColors {
  background: string;
  text: string;
  title: string;
  navBackground: string;
  iconColor: string;
  iconColorFocused: string;
  uiBackground: string;
  [key: string]: string;
}

export type ColorScheme = "light" | "dark";
export type ColorsType = Record<ColorScheme, ThemeColors>;

// ===== COMPONENT PROPS TYPES =====

// ThemedView Props
export interface ThemedViewProps {
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
  backgroundColor?: string;
  children?: React.ReactNode;
  title?: boolean;
  onPress?: () => void;
}

// ThemeLogo Props
export interface ThemeLogoProps {
  size?: number;
  style?: StyleProp<ImageStyle>;
  testID?: string;
}

// Spacer Props
export interface SpacerProps {
  width?: DimensionValue;
  height?: DimensionValue;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  flex?: number;
}

// ===== UTILITY TYPES =====
export type Style<T> = StyleProp<T>;
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

// ===== RE-EXPORT COMMON TYPES =====
export type {
  ViewStyle,
  TextStyle,
  ImageStyle,
  StyleProp,
  DimensionValue,
} from "react-native";

// Export as namespace for easy access
export namespace AppTypes {
  export type Theme = ThemeColors;
  export type ColorSchemeType = ColorScheme;
  export type Colors = ColorsType;

  export type ThemedView = ThemedViewProps;
  export type ThemeLogo = ThemeLogoProps;
  export type Spacer = SpacerProps;
}
