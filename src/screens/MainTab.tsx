import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from '../types/MainTabProps';
import HomeTab from './HomeTab';
import OrderTab from './OrderTab';
import SearchBar from '../components/SearchBar';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../types/RootStackProps';
import MyTab from './MyTab';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View} from 'react-native';
import MapTab from './MapTab';
import {IconAntDesign, IconMaterialCommunityIcons} from '../lib/Icon';
import GroupTab from './GroupTab';
export default function MainTab() {
  const Tab = createBottomTabNavigator<MainTabParamList>();
  const navigation = useNavigation<NavigationProp>();
  return (
    <Tab.Navigator
      screenOptions={{tabBarShowLabel: true}}
      initialRouteName="Home">
      <Tab.Screen
        name="Map"
        component={MapTab}
        options={{
          title: '내 주변',
          headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
          tabBarIcon: () => (
            <IconMaterialCommunityIcons name="map-outline" size={20} />
          ),
          // header: () => <SearchBar placeholder="어디로 갈까요?" />,
        }}
      />
      <Tab.Screen
        name="Group"
        component={GroupTab}
        options={{
          title: '내 그룹',
          headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
          tabBarIcon: () => (
            <IconMaterialCommunityIcons
              name="account-group-outline"
              size={20}
            />
          ),

          // header: () => <SearchBar placeholder="어디로 갈까요?" />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <IconMaterialCommunityIcons name="home-outline" size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderTab}
        options={{
          title: '주문',
          headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
          tabBarIcon: () => (
            <IconMaterialCommunityIcons name="shopping-outline" size={20} />
          ),

          // header: () => <SearchBar placeholder="어디로 갈까요?" />,
        }}
      />
      <Tab.Screen
        name="My"
        component={MyTab}
        options={{
          title: '내 정보',
          headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
          tabBarIcon: () => <IconAntDesign name="user" size={20} />,
          // header: () => <SearchBar placeholder="어디로 갈까요?" />,
        }}
      />
    </Tab.Navigator>
  );
}
