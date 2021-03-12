
import React, { Component } from "react";
import { render } from "react-dom";
import { ScrollView, StyleSheet, Text, View, Button } from "react-native";
import { Image, Avatar, Divider, } from 'react-native-paper'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Loading } from "../../../src/components/loading";



export default function Profile(props) {
    const [load, setLoad] = useState(false)

    const signout = async () => {
        setLoad(true)
        try {
            await AsyncStorage.removeItem("uid")
            props.setUser({loggedIn: false})
        } catch (error) {
            alert("An error occured");
            console.log(error)
        }
        setLoad(false)
    }

    if (load) {
        return <Loading />
    }
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ alignItems: 'center', paddingTop: 20, backgroundColor: '#252b45' }}>
                        <Avatar.Image size={120} source={require('../../../assets/a.jpg')} />


                        <Text style={{ fontSize: 20, color: 'white', paddingTop: 20, paddingBottom: 10 }}></Text>
                    </View>

                    <TouchableOpacity>
                        <View style={styles.text1}>
                            <Text style={{ fontSize: 15, color: 'black' }}>Profile</Text>
                        </View>
                    </TouchableOpacity>

                

                  


                    <TouchableOpacity>
                        <View style={styles.text1}>
                            <Text style={{ fontSize: 15, color: 'black' }}>Account Details</Text>
                        </View>
                    </TouchableOpacity>
                    <Divider />

               

                    <TouchableOpacity>
                        <View style={styles.text1}>
                            <Text style={{ fontSize: 15, color: 'black' }}>Feed Back</Text>
                        </View>
                    </TouchableOpacity>
                    <Divider />
                    <TouchableOpacity>
                        <View style={styles.text1}>
                            <Text style={{ fontSize: 15, color: 'black' }}>Settings</Text>
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