import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { Loading } from "../components/loading";
import { capitalizeFirstLetter, getFood } from "../components/call";
import { useEffect } from "react";
import { Button } from "react-native";
import { Alert } from "react-native";
import { Chart } from "../components/chart";
import { ScrollView } from "react-native";

export default function Diet(props) {
    const [food, setFood] = useState({});
    const [load, setLoad] = useState(props.load);
    const [nutrient, setNutrient] = useState({});


    // console.log(props.food.foods)
    useEffect(() => {
        setFood(() => {
            if (props.food.foods) {
                return getFood(props.food.foods);
            }
        });

    }, [props.food.foods]);


    // console.log(food, load)
    if (!food.details) {
        return (
            <Loading />
        )
    }
    // useEffect(() => {
    //     setNutrient({});
    //     setNutrient(() => {
    //         if (food.details) {
    //             let nut = food.details.nutritional_information;
    //             // for (let key in food.details.nutritional_information) {
    //             //     if (food.details.nutritional_information.hasOwnProperty(key)) {
    //             //         nut.push(food.details.nutritional_information);
    //             //     }
    //             // }
    //             return nut;
    //         }
    //     })
    // }, [food])


    // if (food.details) {        
    //     console.log(nutrient, "nutr", food.details.nutritional_information)
    // }




    if (props.time.country != "Nigeria") {
        alert("Hi! We noticed you're accessing this application from a non-nigeria country!.Please Be informed that our database only contain list of nigeria food at the moment")
    }

    if (food.foodName && props.time && food.details) {
        return (
            <ScrollView >
                <Text style={{ textAlign: "center" }}>Hi  <Text style={{ fontSize: 20, fontFamily: "sans-serif", textAlign: "center" }}>{props.user ? props.user.user.fullName : "Friend"}</Text> </Text>
                <Text style={{ fontSize: 30, fontFamily: "sans-serif", textAlign: "center" }}>It's {props.time.preciseTime} time</Text>
                {/* //TODO: Add like a location icon and center the text */}
                <Text style={{ fontFamily: "Roboto", flexDirection: "row", justifyContent: "center", textAlign: "center" }}>Based on your nearest location {props.time.city + " " + props.time.country} and preference rice based foods </Text>
                <Text style={{ textAlign: "center" }}>Will you mind taking {<Text style={{ color: "green", fontWeight: "bold" }}>{food.foodName.toUpperCase()}</Text>} this {props.time.dayTime} ?</Text>

                <View style={{ justifyContent: 'center', alignItems: "center", width: '100%', }}>
                    <Image source={{ uri: food.details.img_url }} style={{ padding: 100, width: '100%', margin: 10 }} />
                </View>
                <View style={{ justifyContent: 'center', fontWeight: "bold", alignItems: "center", width: '100%', }}>
                    <Text>Nutrition Content</Text>
                </View>
                <View style={{
                    flexDirection: "row", justifyContent: "center",
                    flexWrap: "wrap"
                }}>
                    {Object.keys(food.details.nutritional_information).map(
                        (k) => <Chart percent={Math.floor(food.details.nutritional_information[k])} label={capitalizeFirstLetter(k)} />
                    )}
                </View>


                <Button title="Yes" onPress={() => { Alert.alert("Great!", `Enjoy your ${food.foodName} this ${props.time.preciseTime}`); props.navigation.navigate("Home") }} />

                <Button title="No" onPress={() => { setLoad(true); setFood(getFood(props.food.foods)); setLoad(false) }} />



            </ScrollView>
        )
    }





    // return (
    //     <Loading />
    // )


}
