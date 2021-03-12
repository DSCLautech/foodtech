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
    // console.log(props.user.user.fullName);
    // const [details, setDetails] = useState({});

    if (props.time.country != "Nigeria") {
        alert("Hi! We noticed you're accessing this application from a non-nigeria country!.Please Be informed that our database only contain list of nigeria food at the moment")
    }

    if (props.food.load) {
        return (
            <Loading />
        )
    }
    return (
        <View >
            <Text style={{ textAlign: "center" }}>Hi  <Text style={{ fontSize: 20, fontFamily: "sans-serif",textAlign: "center"}}>{props.user ? props.user.user.fullName : "Friend"}</Text> </Text>
            <Text style={{ fontSize: 30, fontFamily: "sans-serif", textAlign: "center" }}>It's {props.time.preciseTime}</Text>
            {/* //TODO: Add like a location icon and center the text */}
            <Text style={{ fontFamily: "Roboto", flexDirection: "row", justifyContent: "center", textAlign: "center" }}> {props.time.city + " " + props.time.country} </Text>
            <Text style={{ textAlign: "center" }}>Will you mind taking {<Text style={{ color: "green", fontWeight: "bold" }}>{props.food.foodName.toUpperCase()}</Text>} this {props.time.dayTime} ?</Text>

            <View style={{ justifyContent: 'center', alignItems: "center", width: '100%', }}>
                <Image source={{ uri: props.food.details.img_url }} style={{ padding: 100, width: '100%', margin: 10 }} />
            </View>


        </View>
    )
}
