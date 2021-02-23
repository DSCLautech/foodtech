import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ProgressCircle from "react-native-progress-circle";
import { colors } from "../styles/const";

export const Chart = ({ percent, label }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{label}</Text>
    <ProgressCircle
      percent={percent}
      radius={50}
      borderWidth={8}
      color={colors.orange}
      shadowColor={colors.background}
      bgColor="#fff"
    >
      <Text style={{ fontSize: 18 }}>{`${percent}%`}</Text>
    </ProgressCircle>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    justifyContent: "center",
    marginRight: 15,
    marginBottom: 40
  },
  text: {
    fontSize: 15,
    paddingBottom: 5,
    textAlign: "center",
    color: colors.secondary,
    fontWeight: "bold"
  }
});
