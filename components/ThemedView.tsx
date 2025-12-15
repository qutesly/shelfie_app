import { View, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { ColorScheme, ThemedViewProps } from "../@types/types";


const ThemedView = ({ style, ...props }: ThemedViewProps) => {
  const colorScheme = useColorScheme() as ColorScheme | null;
  
  const themeKey: ColorScheme = colorScheme === 'light' ? 'light' : 'dark'
  
  const theme = Colors[themeKey];

  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props} />
  );
};

export default ThemedView;
