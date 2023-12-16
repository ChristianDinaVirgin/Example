import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './IndexScreen';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Main Page" component={IndexScreen} />
        <Stack.Screen name="Home Page" component={HomeScreen} />
        <Stack.Screen name="About Page" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
