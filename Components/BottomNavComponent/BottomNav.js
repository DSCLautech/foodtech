import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Diet from './Diet';
import Shop from './Shop';
import Chat from './Chat';


const Tab = createBottomTabNavigator();


function BottomNav(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Diet" component={Diet} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Chat" component={Chat} />


    </Tab.Navigator>
  
  );
}

export default BottomNav;