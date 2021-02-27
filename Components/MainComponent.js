import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './BottomNavComponent/HomeFolder/HomeStack'
import ChatStack from './BottomNavComponent/ChatFolder/ChatStack'
import DietStack from './BottomNavComponent/DietFolder/DietStack'
import ShopStack from './BottomNavComponent/ShopFolder/Shopstack'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeComponent from './StackNavs/home';


const Tab = createBottomTabNavigator();

export default function MainComponents(props) {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                color: 'white',
                activeTintColor: 'green',
                activeBackgroundColor: '#24ff00',
                inactiveBackgroundColor: 'green'
            }}>
            <Tab.Screen name="Home" options={{
                tabBarLabel: 'HOME',
                tabBarIcon: ({ size }) => (
                    <MaterialCommunityIcons name="home" color='white' size={size} />
                ),
            }} > {(prop) => <HomeComponent time={props.time} food={props.food} {...prop} />} </Tab.Screen>
            <Tab.Screen name="Diet" component={DietStack} options={{
                tabBarLabel: 'DIET',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="food-fork-drink" color='white' size={size} />
                ),
            }} />
            <Tab.Screen name="Shop" component={ShopStack} options={{
                tabBarLabel: 'SHOP',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="shopping-search" color='white' size={size} />
                ),
            }} />
            <Tab.Screen name="Chat" component={ChatStack} options={{
                tabBarLabel: 'CHAT',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="chat-processing" color='white' size={size} />
                ),
            }} />
        </Tab.Navigator>
    );
}

