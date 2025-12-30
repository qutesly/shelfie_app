import { View, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { ColorScheme, ThemedViewProps } from "../@types/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";


const ThemedView = ({ style, safe = false, ...props }: ThemedViewProps) => {
  const colorScheme = useColorScheme() as ColorScheme | null;
  
  const themeKey: ColorScheme = colorScheme === 'light' ? 'light' : 'dark'
  
  const theme = Colors[themeKey];

  if(!safe) return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props} />
  )

  const insets = useSafeAreaInsets()

  return (
    <View style={[{
       backgroundColor: theme.background,
       paddingTop: insets.top,
       paddingBottom: insets.bottom 
      }, 
      style]} 
      {...props}
       />
  );
};

export default ThemedView;
