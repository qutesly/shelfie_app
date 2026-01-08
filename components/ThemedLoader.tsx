import React from "react";
import { ActivityIndicator, useColorScheme } from "react-native";
import { ColorScheme } from "../@types/types";
import { Colors } from "../constants/Colors";
import ThemedView from "./ThemedView";

const ThemedLoader = () => {
  const colorScheme = useColorScheme() as ColorScheme | null;

  const themeKey: ColorScheme = colorScheme === "light" ? "light" : "dark";
  const theme = Colors[themeKey];

  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ActivityIndicator size="large" color={theme.text} />
    </ThemedView>
  );
};

export default ThemedLoader;
