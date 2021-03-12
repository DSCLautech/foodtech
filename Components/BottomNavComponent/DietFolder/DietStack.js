import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
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