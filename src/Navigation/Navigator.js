import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LanguageToggleButton from './LanguageToggleButton';

// Screens
import DescriptionScreen from '../screens/DescriptionScreen';
import TestListScreen from '../screens/TestListScreen';
import TestScreen from '../screens/TestScreen';
import FunActivityScreen from '../screens/FunActivityScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import DisordersScreen from '../screens/DisordersScreen';
import GameActivity from '../screens/GameActivity';
import DietScreen from '../screens/DietScreen';
import ActivityDetails from '../screens/ActivityDetails';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [currentScreen, setCurrentScreen] = useState('DescriptionScreen');

  return (
    <View style={{flex: 1}}>
      <Stack.Navigator 
        initialRouteName="DescriptionScreen"
        screenListeners={{
          state: (e) => {
            const currentRoute = e.data.state.routes[e.data.state.index];
            setCurrentScreen(currentRoute.name);
          },
        }}>
        <Stack.Screen
          name="DescriptionScreen"
          component={DescriptionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DisorderScreen"
          component={DisordersScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TestListScreen"
          component={TestListScreen}
          options={{title: 'Test List', headerShown: false}}
        />
        <Stack.Screen
          name="TestScreen"
          component={TestScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FunActivityScreen"
          component={FunActivityScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LeaderboardScreen"
          component={LeaderboardScreen}
          options={{title: 'Leaderboard'}}
        />
        <Stack.Screen
          name="GameActivity"
          component={GameActivity}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DietScreen"
          component={DietScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="ActivityDetails" 
          component={ActivityDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <View style={styles.languageToggleContainer}>
        <LanguageToggleButton currentScreen={currentScreen} />
      </View>
    </View>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  languageToggleContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1000,
  },
});
