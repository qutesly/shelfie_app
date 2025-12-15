import { View } from "react-native";
import React from "react";
import { SpacerProps } from "../@types/types";

const Spacer = ({ width = "100%", height = 40 }: SpacerProps) => {
  return <View style={{ width, height }} />;
};

export default Spacer;
