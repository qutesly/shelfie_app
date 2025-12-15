import { Text, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { ColorScheme, ThemedViewProps } from "../@types/types";

const ThemedText = ({ style, title = false, ...props }: ThemedViewProps) => {
  const colorScheme = useColorScheme() as ColorScheme | null;

  const themeKey: ColorScheme = colorScheme === "light" ? "light" : "dark";
  const theme = Colors[themeKey];

  const textColor = title ? theme.title : theme.text;

  return <Text style={[{ color: textColor }, style]} {...props} />;
};

export default ThemedText;
