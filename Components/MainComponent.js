import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import BottomNav from './BottomNavComponent/BottomNav'
import { createStackNavigator } from '@react-navigation/stack';
import { List } from '../src/views/List';
import { Home } from '../src/views/Home';
import { Recipe } from '../src/views/Recipe';
const Stack = createStackNavigator();

export default function MainComponent() {
    // return (
    //     <View>
    //         <BottomNav />
    //     </View>
    // )

    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor: "#f4511e"
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold"
                    }
                }
            }
        >
            <Stack.Screen
                name="Home"
                component={Home} />
            <Stack.Screen
                name="List"
                component={List} />
            <Stack.Screen
                name="Recipe"
                component={Recipe} />
        </Stack.Navigator>
    )
}
