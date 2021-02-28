import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { colors } from "../styles/const";
import { Card } from "../components/card";
import { Loading } from "../components/loading";
import { CustomButton } from "../components/button";

export const List = props => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, [tags]);

  const fetchRecipes = () => {
    axios
      .get(
        `https://api.edamam.com/search?q=veggie&app_id=b2f9e1bf&app_key=0005a9180f1c835e0aa38e593268299d&from=0&to=10&health=vegetarian${
          tags ? tags.map(tag => `&health=${tag}`) : null
        }`
      )
      .then(response => {
        setRecipes(response.data.hits);
        setIsLoading(false);
      });
  };

  return !isLoading ? (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.buttonsWrapper}>
          <View
            style={
              tags.includes("vegan") ? styles.active : styles.buttonContainer
            }
          >
            <CustomButton
              title="Vegan"
              onPress={() =>
                setTags(prevState =>
                  prevState.includes("vegan")
                    ? prevState.filter(v => v !== "vegan")
                    : [...prevState, "vegan"]
                )
              }
            />
          </View>
          <View
            style={
              tags.includes("gluten-free")
                ? styles.active
                : styles.buttonContainer
            }
          >
            <CustomButton
              title="Gluten-free"
              onPress={() =>
                setTags(prevState =>
                  prevState.includes("gluten-free")
                    ? prevState.filter(v => v !== "gluten-free")
                    : [...prevState, "gluten-free"]
                )
              }
            />
          </View>
        </View>
        {recipes.length > 0 &&
          recipes.map((recipe, index) => (
            <Card
              onPress={() =>
                props.navigation.navigate("Recipe", { recipe: recipe.recipe })
              }
              key={index}
              title={recipe.recipe.label}
              imgUrl={recipe.recipe.image}
              tags={recipe.recipe.digest}
            />
          ))}
      </ScrollView>
    </View>
  ) : (
    <Loading />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  buttonsWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "nowrap"
  },
  buttonContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 30,
    paddingLeft: 30,
    backgroundColor: colors.tertiary,
    opacity: 0.5,
    marginRight: 10
  },
  active: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 30,
    paddingLeft: 30,
    backgroundColor: colors.tertiary,
    opacity: 1,
    marginRight: 10
  }
});
