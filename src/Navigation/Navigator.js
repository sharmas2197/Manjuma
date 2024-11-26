import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import DescriptionScreen from '../screens/DescriptionScreen';
import TestListScreen from '../screens/TestListScreen';
import TestScreen from '../screens/TestScreen';
import FunActivityScreen from '../screens/FunActivityScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import DisordersScreen from '../screens/DisordersScreen';
import GameActivity from '../screens/GameActivity';

export default function Navigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DescriptionScreen">
        <Stack.Screen
          name="DescriptionScreen"
          component={DescriptionScreen}
          options={{headerShown: false}} // Optional: Corrected title for better readability
        />
        <Stack.Screen
          name="DisorderScreen"
          component={DisordersScreen}
          options={{headerShown: false}} // Optional: Corrected title for better readability
        />
        <Stack.Screen
          name="TestListScreen"
          component={TestListScreen}
          options={{title: 'Test List', headerShown: false}} // Optional: More user-friendly title
        />
        <Stack.Screen
          name="TestScreen"
          component={TestScreen}
          options={{headerShown: false}} // Optional: More user-friendly title
        />
        <Stack.Screen
          name="FunActivityScreen"
          component={FunActivityScreen}
          options={{headerShown: false}} // Optional: More user-friendly title
        />
        <Stack.Screen
          name="LeaderboardScreen"
          component={LeaderboardScreen}
          options={{title: 'Leaderboard'}} // Optional: More user-friendly title
        />
          <Stack.Screen
          name="GameActivity"
          component={GameActivity}
          options={{headerShown: false}} // Optional: Corrected title for better readability
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
