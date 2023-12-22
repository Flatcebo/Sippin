import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainTabNavigationScreenParams, MainTabParamList} from './MainTabProps';

export type RootStackParamList = {
  MainTab: MainTabNavigationScreenParams | undefined;
  Home: undefined;
  Search: undefined;
  InfoReserve: undefined;
};
export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type NavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  BottomTabNavigationProp<MainTabParamList>
>;

//
//
//
type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

type ScreenNavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

type ScreenProp<T extends keyof RootStackParamList> = {
  navigation: ScreenNavigationProp<T>;
  route: ScreenRouteProp<T>;
};

export type HomeTabProp = ScreenProp<'Home'>;
