import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainTabNavigationScreenParams, MainTabParamList} from './MainTabProps';
import {
  ByRegionContentsParams,
  ContentParams,
  MenuParams,
  ReserveContentParam,
} from './ParamsType';

export type RootStackParamList = {
  MainTab: MainTabNavigationScreenParams | undefined;
  Home: undefined;
  Order: undefined;
  My: undefined;
  Search: undefined;
  ReserveInfo: undefined;
  Category: undefined;
  ShoppingBasket: undefined;
  AdditionalOrder: undefined;
  MyAround: undefined;
  OftenPlace: undefined;
  Content: ContentParams;
  ReserveDate: {};
  ReserveTable: {};
  ReserveContent: ReserveContentParam;
  ByRegionContents: ByRegionContentsParams;
  Menu: MenuParams;
  ReserveSuccess: {};
  CustomerService: {};
  CompletedOrder: undefined;
  OrderedList: undefined;
  CalendarTest: undefined;
  SelectFriend: undefined;
  ShopList: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type NavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  BottomTabNavigationProp<MainTabParamList>
>;

// export type RootNavigationProp = CompositeNavigationProp<
//   RootStackNavigationProp,
//   BottomTabNavigationProp<MainTabParamList>
// >;
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
  // params: RootStackParamList[T];
};

export type HomeTabProp = ScreenProp<'Home'>;
export type OrderTabProp = ScreenProp<'Order'>;
export type MyTabProp = ScreenProp<'My'>;

export type CategoryScreenProp = ScreenProp<'Category'>;
export type ContentScreenProp = ScreenProp<'Content'>;
export type MyAroundScreenProp = ScreenProp<'MyAround'>;
export type ByRegionContentsScreenProp = ScreenProp<'ByRegionContents'>;
export type MenuScreenProp = ScreenProp<'Menu'>;
export type ReserveContentScreenProp = ScreenProp<'ReserveContent'>;
export type ReserveTableScreenProp = ScreenProp<'ReserveTable'>;
export type ReserveDateScreenProp = ScreenProp<'ReserveDate'>;
export type CompletedOrderScreenProp = ScreenProp<'CompletedOrder'>;
export type ReserveSuccessScreenProp = ScreenProp<'ReserveSuccess'>;
export type OftenPlaceScreenProp = ScreenProp<'OftenPlace'>;
