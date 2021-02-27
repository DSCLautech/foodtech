import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Shop from './Shop'


const Stack = createStackNavigator();

export default function ShopStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shop" component={Shop} />

    </Stack.Navigator>
  );
}

