import { StyleSheet, View, ViewProps, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { ColorScheme, ThemedViewProps } from "../@types/types";


const ThemedView = ({ style, ...props }: ThemedViewProps) => {
  const colorScheme = useColorScheme() as ColorScheme | null;

  const themeKey: ColorScheme = colorScheme === "light"? "light" : "dark";

  const theme = Colors[themeKey];

  return (
    <View
      style={[{ backgroundColor: theme.uiBackground }, styles.card, style]}
      {...props}
    />
  );
};

export default ThemedView;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
  },
});
