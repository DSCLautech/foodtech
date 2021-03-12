import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile'


const Stack = createStackNavigator();

export default function ProfileStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" children={(prop) => <Profile  user={props.user} setUser={props.setUser} {...prop} />} />

    </Stack.Navigator>
  );
}

