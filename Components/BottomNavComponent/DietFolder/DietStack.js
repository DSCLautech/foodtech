import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Diet from './Diet'
import Login from '../../../src/views/Login'
import SignUp from '../../../src/views/SignUp'



const Stack = createStackNavigator();

export default function DietStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Diet" component={Diet} />
      {/* <Stack.Screen name="Login" component={Login} /> */}
      {/* <Stack.Screen name="SignUp" component={SignUp} /> */}


    </Stack.Navigator>
    
  );
}
