import React from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeDetails from './HomeDetails';



const Stack = createStackNavigator();


export default function Home() {
    return (


        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeDetails}  />

        {/* <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>


    )
}
