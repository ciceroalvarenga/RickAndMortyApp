import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AboutCharacter} from '@screens/AboutCharacter';
import {TabRoutes} from '@routes/Tab/tab.routes';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={TabRoutes} />
      <Stack.Screen name="AboutCharacter" component={AboutCharacter} />
    </Stack.Navigator>
  );
}
