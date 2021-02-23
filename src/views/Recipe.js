import React, { useEffect, useState } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { colors } from "../styles/const";
import { Card } from "../components/card";
import { ListComponent } from "../components/customList";
import { Chart } from "../components/chart";
import { Loading } from "../components/loading";

export const Recipe = props => {
  useEffect(() => {
    setRecipe(props.navigation.getParam("recipe"));
    setIsLoading(false);
  }, []);

  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  return !isLoading ? (
    <ScrollView>
      <View style={styles.container}>
        <ListComponent title="Ingredients" data={recipe.ingredientLines} />
        <Text style={styles.title}>Nutrients</Text>
        <View style={styles.chartContainer}>
          {recipe.digest &&
            recipe.digest.map((value, index) => (
              <Chart
                key={index}
                label={value.label}
                percent={Math.floor(~value.daily / ~value.total)}
              />
            ))}
        </View>
      </View>
    </ScrollView>
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
  list: {
    flexDirection: "column"
  },
  chartContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 20
  },
  title: {
    marginTop: 30,
    fontSize: 30,
    color: colors.main
  }
});
