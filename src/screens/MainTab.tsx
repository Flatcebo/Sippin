import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from '../types/MainTabProps';
import HomeTab from './HomeTab';
import OrderTab from './OrderTab';
import SearchBar from '../components/SearchBar';
import {useNavigation} from '@react-navigation/native';
import {
  NavigationProp,
  RootStackNavigationProp,
  RootStackParamList,
} from '../types/RootStackProps';
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
          header: () => <SearchBar placeholder="어디로 갈까요?" />,
        }}
      />
    </Tab.Navigator>
  );
}
