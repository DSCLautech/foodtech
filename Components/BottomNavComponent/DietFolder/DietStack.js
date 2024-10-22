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
      <Stack.Screen name="Diet" children={(prop) => <Diet time={props.time} load={props.load} food={props.food} user={props.user}  {...prop} />} />
    </Stack.Navigator>

  );
}
