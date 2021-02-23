import React from "react";
import { colors } from "../styles/const";
import { StyleSheet, Text, View } from "react-native";
import { Subtitle } from "../styles/title";

const tagsMap = [
  {
    name: "PROCNT",
    label: "Protein",
    min: 10,
    color: colors.orange
  },
  {
    name: "FE",
    label: "Iron",
    min: 2,
    color: colors.tertiary
  },
  {
    name: "VITB12",
    label: "Vitamin B12",
    min: 5,
    color: colors.secondary
  },
  {
    name: "TOCPHA",
    label: "Vitamin E",
    min: 5,
    color: colors.grey
  }
];

export const Tag = ({ tag }) => (
  <View style={styles.container}>
    {tagsMap.map(
      (tagItem, index) =>
        tagItem.name === tag.tag &&
        tagItem.min <= ~tag.daily / ~tag.total && (
          <View
            style={{
              backgroundColor: tagItem.color,
              borderRadius: 3,
              marginRight: 5
            }}
            key={index}
          >
            <Text style={styles.text}>{tag.label}</Text>
          </View>
        )
    )}
  </View>
);
const styles = StyleSheet.create({
  container: {
    marginTop: 5
  },
  text: {
    color: "#FFF",
    padding: 5
  }
});
