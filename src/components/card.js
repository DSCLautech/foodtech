import React from "react";
import { colors } from "../styles/const";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import { Subtitle } from "../styles/title";
import { Tag } from "./tag";

export const Card = ({ imgUrl, title, style, onPress, tags }) => (
  <TouchableOpacity style={(style, styles.container)} onPress={onPress}>
    <Image
      style={{ width: "100%", height: "70%" }}
      // source={imgUrl ? { uri: imgUrl } : require("../../assets/background.jpg")}
    ></Image>
    <View style={{ paddingLeft: 10, paddingTop: 5, paddingBottom: 5 }}>
      <Subtitle>{title}</Subtitle>
    </View>
    <View style={styles.tagsContainer}>
      {tags.map((tag, idx) => (
        <Tag tag={tag} key={idx} />
      ))}
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    height: 270,
    margin: 10,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 5,
    paddingBottom: 10
  },
  tagsContainer: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 10
  }
});
