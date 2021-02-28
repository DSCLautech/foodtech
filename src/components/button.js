import React from "react";
import { colors } from "../styles/const";
import { StyleSheet, Button, View } from "react-native";

export const CustomButton = ({ children, onPress, title }) => (
  <Button onPress={onPress} title={title} color={"black"}>
    <View style={StyleSheet.button}>{children}</View>
  </Button>
);

const styles = StyleSheet.create({
  button: {
    width: 90,
    height: 50
  }
});
