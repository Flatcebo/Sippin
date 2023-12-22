import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/RootStackProps';
import MainTab from '../screens/MainTab';
import SearchScreen from './SearchScreen';
import SearchBar from '../components/SearchBar';
import {Platform, StatusBar} from 'react-native';
import FilterBar from '../components/FilterBar';

import InfoReserveScreen from './InfoReserveScreen';

export default function RootStack() {
  Platform.OS === 'android'
    ? (StatusBar.setTranslucent(true),
      StatusBar.setBackgroundColor('transparent'),
      StatusBar.setBarStyle('dark-content'))
    : StatusBar.setBarStyle('dark-content');
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          header: () => (
            <>
              <SearchBar autoFocus placeholder="어디로 가고 싶으신가요?" />
              {/* <FilterBar /> */}
            </>
          ),
        }}
      />
      <Stack.Screen
        name="InfoReserve"
        component={InfoReserveScreen}
        options={{title: '예약내역'}}
      />
    </Stack.Navigator>
  );
}
