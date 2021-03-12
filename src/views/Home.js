import React from "react";
import axios from "axios";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Title } from "../styles/title";
import { CustomButton } from "../components/button";
import { colors } from "../styles/const";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export const Home = props => {
  return (

    <ScrollView >
<View style={styles.container}>
      <Text style={{textAlign:"center", fontSize:17,padding:20}}> Welcome to DIET APP , Find the below  Diet Recommendation From  Our Expert </Text>
      <View style={{ flexDirection: 'column', justifyContent: 'space-between', }}>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("Diet")}>
          <View style={styles.titleContainer}>
            <Text style={styles.text}>Recommended Diet</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Shop")}>
          <View style={styles.titleContainer}>
            <Text style={styles.text}>List Of Diet</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "column", justifyContent: 'space-between', marginBottom: 10 }}>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("Chat")}>
          <View style={styles.titleContainer}>
            <Text style={styles.text}>Chat With Expert</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("List")}>
          <View style={styles.titleContainer}>
            <Text style={styles.text}>List Of Shop</Text>
          </View>
        </TouchableOpacity>

      </View>




      <TouchableOpacity
        onPress={() => props.navigation.navigate("List")}>
        <View style={styles.buttonContainer}>
          <Text style={{ textAlign: "center", fontSize: 20, color: 'green' }}>Start</Text>
        </View>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
// <ImageBackground
//   style={styles.container}
//   source={require("../../assets/background.jpg")}
// >    </ImageBackground>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    // alignItems: "center",
    justifyContent: 'center'
  },
  titleContainer: {
    width: '100%',
    height: 100,
    backgroundColor: "green",
    justifyContent: "center",
    marginBottom: 4


  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  buttonContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderWidth: 2,
    borderColor: 'green',
    margin: 30
  }
});
