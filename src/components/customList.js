import React from "react";
import { colors } from "../styles/const";
import { StyleSheet, Button, View, Text } from "react-native";
import { Subtitle } from "../styles/title";

export const ListComponent = props => (
  <View style={styles.list}>
    <Subtitle>{props.title}</Subtitle>
    {props.data ? (
      props.data.map((item, id) => (
        <Text style={styles.item} key={id}>
          {item}
        </Text>
      ))
    ) : (
      <Text>No informations on this recipe</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  list: {
    flexDirection: "column",
    padding: 20
  },
  item: {
    marginTop: 10
  }
});
