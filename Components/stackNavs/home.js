import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../src/views/Home';
import { List } from '../../src/views/List';
import { Recipe } from '../../src/views/Recipe';
import Diet from '../../src/views/Diet';
const Stack = createStackNavigator();

export default function HomeComponent(props) {

    return (
        <Stack.Navigator
            initialRouteName="Home"
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

            {/* <Stack.Screen name="Diet" >
                {(prop) => <Diet time={props.time} food={props.food}  {...prop} />}
            </Stack.Screen> */}
        </Stack.Navigator>
    )
}
