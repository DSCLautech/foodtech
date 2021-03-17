
import React, { Component } from "react";
import { render } from "react-dom";
import { ScrollView, StyleSheet, Text, View, Button } from "react-native";
import { Image, Avatar, Divider, } from 'react-native-paper'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Loading } from "../../../src/components/loading";
import { Overlay } from "react-native-elements";
import { Picker } from '@react-native-picker/picker';



export default function Profile(props) {
    const [load, setLoad] = useState(false);
    const [visible, setVisible] = useState(false);
    const [pref, setPref] = useState("rice_based")

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const signout = async () => {
        setLoad(true)
        try {
            await AsyncStorage.removeItem("uid")
            props.setUser({ loggedIn: false })
        } catch (error) {
            alert("An error occured");
            console.log(error)
        }
        setLoad(false)
    }

    const changePref = async () => {

    }


    if (load) {
        return <Loading />
    }


    return (
        <ScrollView>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
            <Picker
                    selectedValue={pref}
                    style={styles.input}
                    onValueChange={(itemValue, itemIndex) =>
                        setPref(itemValue)
                    }>
                    <Picker.Item label="Rice Related" value="rice_based" />
                    <Picker.Item label="Bean Related" value="bean_based" />
                    <Picker.Item label="Cassava Related" value="cassava_based" />
                    <Picker.Item label="Yam Related" value="yam_based" />
                    <Picker.Item label="Much Stew" value="soups_and_stews" />
                    <Picker.Item label="Common Food" value="snacks" />
                    <Picker.Item label="Much Beverage" value="beverages" />
                    <Picker.Item label="Others" value="others" />

                </Picker>      </Overlay>

            <View style={styles.container}>
                <View style={{ alignItems: 'center', paddingTop: 20, backgroundColor: '#252b45' }}>
                    <Avatar.Image size={120} source={require('../../../assets/a.jpg')} />
                    <Text style={{ fontSize: 20, color: 'white', paddingTop: 20, paddingBottom: 10 }}>{props.user ? props.user.user.fullName : "Friend"}</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.text1}>
                        <Text style={{ fontSize: 15, color: 'black' }}>Account Details</Text>
                    </View>
                </TouchableOpacity>
                <Divider />



                <TouchableOpacity onPress={() => alert("Please email yor feedback to olawalejuwon@gmail.com")}>
                    <View style={styles.text1}>
                        <Text style={{ fontSize: 15, color: 'black' }}>Feed Back</Text>
                    </View>
                </TouchableOpacity>
                <Divider />
                <TouchableOpacity onPress={() => setVisible(true)}>
                    <View style={styles.text1}>
                        <Text style={{ fontSize: 15, color: 'black' }}>Change preference</Text>
                    </View>
                </TouchableOpacity>

                <Divider />
                <TouchableOpacity >
                    <View style={styles.text1}>
                        <Text style={{ fontSize: 15, color: 'black' }} onPress={signout}>Sign out</Text>
                    </View>
                </TouchableOpacity>



            </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },

    text1: {
        paddingLeft: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 15

    }
});
