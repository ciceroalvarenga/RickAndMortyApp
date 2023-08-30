import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Home} from '@screens/Home';
import {FavoriteCharacter} from '@screens/Favorites';

import {useTheme} from 'styled-components';

const {Navigator, Screen} = createBottomTabNavigator();

export function TabRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      // initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.saved,
        tabBarInactiveTintColor: theme.colors.unknown,
        tabBarStyle: {
          height: 90,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          backgroundColor: '#323232',
          borderTopColor: 'transparent',
        },
      }}>
      <Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Favoritos"
        component={FavoriteCharacter}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="bookmark" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
