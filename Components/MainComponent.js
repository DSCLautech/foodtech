import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ChatStack from './BottomNavComponent/ChatFolder/ChatStack'
import DietStack from './BottomNavComponent/DietFolder/DietStack'
import ShopStack from './BottomNavComponent/ShopFolder/Shopstack'
import ProfileStack from './BottomNavComponent/ProfileFolder/ProfileStack'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import RegistrationScreen from '../src/views/SignUp'
import LoginScreen from '../src/views/Login';
import HomeComponent from '../Components/stackNavs/home'

const Stack = createStackNavigator();

export function LoginStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={
        {
          headerStyle: {
            backgroundColor: "green"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            textAlign: 'center'
          }
        }
      }>
      <Stack.Screen name="Signup" children={(prop) => <RegistrationScreen setUser={props.setUser} {...prop} />} />
      <Stack.Screen name="Login" children={(prop) => <LoginScreen setUser={props.state} {...prop} />} />
    </Stack.Navigator>

  );
}
const Tab = createBottomTabNavigator();

export default function MainTab(props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        color: 'white',
        activeTintColor: 'green',
        activeBackgroundColor: '#24ff00',
        inactiveBackgroundColor: 'green'
      }}>
      <Tab.Screen

        name="Home" options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="home" color='white' size={size} />
          ),
        }} >
        {(prop) => <HomeComponent time={props.time} food={props.food}   {...prop} />}

      </Tab.Screen>
      <Tab.Screen name="Diet" children={(prop) => <DietStack time={props.time} load={props.load} food={props.food} user={props.user}  {...prop} />} options={{
        tabBarLabel: 'DIET',
        tabBarIcon: ({ size }) => (
          <MaterialCommunityIcons name="food-fork-drink" color='white' size={size} />
        ),
      }} />
      <Tab.Screen name="Shop" component={ShopStack} options={{
        tabBarLabel: 'SHOP',
        tabBarIcon: ({ size }) => (
          <MaterialCommunityIcons name="shopping-search" color='white' size={size} />
        ),
      }} />
      <Tab.Screen name="Chat" component={ChatStack} options={{
        tabBarLabel: 'CHAT',
        tabBarIcon: ({ size }) => (
          <MaterialCommunityIcons name="chat-processing" color='white' size={size} />
        ),
      }} />
      <Tab.Screen name="Profile" children={(prop) => <ProfileStack setUser={props.setUser} user={props.user} {...prop} />} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ size }) => (
          <MaterialCommunityIcons name="account" color='white' size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}

