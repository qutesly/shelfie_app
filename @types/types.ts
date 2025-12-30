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
  safe?: boolean;
  onPress?: () => void;
  placeholder?: string;
  keyBoardType?: string;
  value?: string;
  secureTextEntry?: boolean;
  onChangeText?: {
    (text: string): void; // Function signature
    metadata?: {
      // Optional metadata
      debounce?: number;
      validate?: boolean;
      field?: string;
    };
  };
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

// =====USER CONTEXT TYPE =====
export interface userContextType {
  email: string;
  password: string;
  children: React.ReactNode;
}

export type User = {
  name?: string;
  id?: string;
  email?: string | null;
  password?: string;
  
};

export type userContextValue = {
  user: User | undefined | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  authChecked: boolean
};
