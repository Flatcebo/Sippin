import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Appbar} from 'react-native-paper';
import SearchBar from '../components/SearchBar';
import {GroupListScreenProp} from '../types/RootStackProps';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import WholeTab from './GroupTab/WholeTab';

const Tab = createMaterialTopTabNavigator();

export default function GroupListScreen({
  navigation,
  route,
}: GroupListScreenProp) {
  return (
    <>
      <Appbar.Header
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          // animate:
        }}>
        <SearchBar
          placeholder="무엇을 검색해볼까요?"
          center
          backVisible
          pressableInput={true}
          onPress={() => {
            navigation.push('Search');
          }}
        />
      </Appbar.Header>
      <Tab.Navigator sceneContainerStyle={{marginTop: '0%'}}>
        <Tab.Screen
          name="Whole"
          component={WholeTab}
          options={{
            title: '전체',
            tabBarStyle: {padding: 0},
            tabBarActiveTintColor: '#9a9a9a',
            // tabBarInactiveTintColor: '',
          }}
        />
      </Tab.Navigator>
    </>
  );
}
