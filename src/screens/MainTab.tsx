import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from '../types/MainTabProps';
import HomeTab from './HomeTab';
import OrderTab from './OrderTab';
import SearchBar from '../components/SearchBar';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../types/RootStackProps';
import MyTab from './MyTab';
export default function MainTab() {
  const Tab = createBottomTabNavigator<MainTabParamList>();
  const navigation = useNavigation<NavigationProp>();
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: true}}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          header: () => (
            <SearchBar
              pressableInput
              placeholder="무엇을 검색해볼까요?"
              onPress={() => {
                navigation.navigate('Search');
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderTab}
        options={{
          title: '경상밥상 남악점',
          headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},

          // header: () => <SearchBar placeholder="어디로 갈까요?" />,
        }}
      />
      <Tab.Screen
        name="My"
        component={MyTab}
        options={{
          title: '내 정보',
          headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},

          // header: () => <SearchBar placeholder="어디로 갈까요?" />,
        }}
      />
    </Tab.Navigator>
  );
}
