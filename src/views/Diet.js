import React, { useState } from "react";
import axios from "axios";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { Title } from "../styles/title";
import { Loading } from "../components/loading";

export default function Diet(props) {
    // var date = new Date(1614388361);
    // // Hours part from the timestamp
    // var hrs = date.getHours();
    // // Minutes part from the timestamp
    // var minutes = "0" + date.getMinutes();
    // // Seconds part from the timestamp
    // var seconds = "0" + date.getSeconds();
    //  var greet;

    //     if (hrs < 12)
    //         greet = 'Good Morning';
    //     else if (hrs >= 12 && hrs <= 17)
    //         greet = 'Good Afternoon';
    //     else if (hrs >= 17 && hrs <= 24)
    //         greet = 'Good Evening';
    // console.log(greet)
    // console.log(props.food.load);
    // const [details, setDetails] = useState({});

    if (props.food.load) {
        return (
            <Loading />
        )
    }
    return (
        <View>
            <Text style={{ fontSize: 20, fontFamily: "sans-serif", letterSpacing: 3 }}>Hi Micheal, </Text>
            <Text style={{ fontSize: 30, fontFamily: "sans-serif", letterSpacing: 3 }}>It's {props.time.preciseTime}</Text>
            {/* //TODO: Add like a location icon and center the text */}
            <Text style={{ fontFamily: "Roboto", flexDirection: "row", justifyContent: "center", }}> {props.time.city + " " + props.time.country} </Text>
            <Text>Will you mind taking {<Text style={{ color: "green", fontWeight: "bold", }}>{props.food.foodName.toUpperCase()}</Text>} this {props.time.dayTime} ?</Text>

            <Image source={{ uri: props.food.details.img_url }} style={{ width: 290, height: 200 }} />



        </View>
    )
}