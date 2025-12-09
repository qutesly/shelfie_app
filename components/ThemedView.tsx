import { View, ViewProps, useColorScheme, } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

type Theme = typeof Colors.light;

interface ThemedViewTypes extends ViewProps {}


const ThemedView = ({ style, ...props }: ThemedViewTypes) => {
  const colorScheme = useColorScheme();
  
   // Type assertion to ensure we get the right key
  const themeKey = colorScheme === 'light' || colorScheme === 'dark' 
    ? colorScheme 
    : 'light';
  
  const theme: Theme = Colors[themeKey];

  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props} />
  );
};

export default ThemedView;
