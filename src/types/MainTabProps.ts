import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {RootStackNavigationProp} from './RootStackProps';

export type MainTabParamList = {
  Home: undefined;
  Order: undefined;
  My: undefined;
};

export type MainTabNavigationScreenParams =
  NavigatorScreenParams<MainTabParamList>;
