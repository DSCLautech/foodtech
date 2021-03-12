import React, { useState } from "react";
import axios from "axios";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { Title } from "../styles/title";
import { Loading } from "../components/loading";
import { getFood } from "../components/call";
import { useEffect } from "react";
import { Button } from "react-native";
import { Alert } from "react-native";

export default function Diet(props) {
    const [food, setFood] = useState({})
    const [load, setLoad] = useState(props.load)

    useEffect(() => {
        if (props.food.foods) {
            setFood(getFood(props.food.foods));
        }

    }, [props.food.foods]);




    if (load) {
        return (
            <Loading />
        )
    }

    if (props.time.country != "Nigeria") {
        alert("Hi! We noticed you're accessing this application from a non-nigeria country!.Please Be informed that our database only contain list of nigeria food at the moment")
    }

    if (food.foodName && props.time) {
        return (
            <View >
                <Text style={{ textAlign: "center" }}>Hi  <Text style={{ fontSize: 20, fontFamily: "sans-serif", textAlign: "center" }}>{props.user ? props.user.user.fullName : "Friend"}</Text> </Text>
                <Text style={{ fontSize: 30, fontFamily: "sans-serif", textAlign: "center" }}>It's {props.time.preciseTime}</Text>
                {/* //TODO: Add like a location icon and center the text */}
                <Text style={{ fontFamily: "Roboto", flexDirection: "row", justifyContent: "center", textAlign: "center" }}> {props.time.city + " " + props.time.country} </Text>
                <Text style={{ textAlign: "center" }}>Will you mind taking {<Text style={{ color: "green", fontWeight: "bold" }}>{food.foodName.toUpperCase()}</Text>} this {props.time.dayTime} ?</Text>
    
                <View style={{ justifyContent: 'center', alignItems: "center", width: '100%', }}>
                    <Image source={{ uri: food.details.img_url }} style={{ padding: 100, width: '100%', margin: 10 }} />
                </View>
                <Button title="Yes" onPress={() => {Alert.alert("Great!", `Enjoy your ${food.foodName} this ${props.time.preciseTime}`); props.navigation.navigate("Home")}}/>

                <Button title="No" onPress={() =>{setLoad(true); setFood(getFood(props.food.foods)); setLoad(false)}}/>
    
    
    
            </View>
        )
    }

    return (
        <Loading />
    )

    
}
