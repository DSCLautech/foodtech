import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../../src/views/Login'
import SignUp from '../../../src/views/SignUp'
import Diet from '../../../src/views/Diet';



const Stack = createStackNavigator();

export default function DietStack(props) {
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
      }>
      <Stack.Screen name="Diet" children={(prop) => <Diet time={props.time} food={props.food}  {...prop} />} />
      {/* <Stack.Screen name="Login" component={Login} /> */}
      {/* <Stack.Screen name="SignUp" component={SignUp} /> */}


    </Stack.Navigator>

  );
}
