import React from "react";
import { colors } from "./const";
import { StyleSheet, Text, View } from "react-native";

export const Title = ({ children, style }) => (
  <Text style={(style, styles.title)}>{children}</Text>
);

export const Subtitle = ({ children, style }) => (
  <Text style={(style, styles.subtitle)}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: colors.tertiary,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 16,
    color: colors.secondary,
    fontWeight: "bold"
  }
});
