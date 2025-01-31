import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainTabNavigationScreenParams, MainTabParamList} from './MainTabProps';
import {
  ByRegionContentsParams,
  ContentParams,
  GroupCreateParams,
  MapViewParams,
  MenuParams,
  MyInfoModifyParams,
  ReserveOrderListParams,
} from './ParamsType';

export type RootStackParamList = {
  MainTab: MainTabNavigationScreenParams | undefined;
  Home: undefined;
  Map: undefined;
  Order: undefined;
  Group: undefined;
  My: undefined;
  Search: undefined;
  SearchAddr: undefined;
  SearchRegion: undefined;
  SearchMyAround: undefined;
  ReserveInfo: undefined;
  Category: undefined;
  ShoppingBasket: undefined;
  AdditionalOrder: undefined;
  MyAround: undefined;
  OftenPlace: undefined;
  Content: ContentParams;
  ReserveDate: {};
  ReserveTable: {};
  ReserveOrderList: ReserveOrderListParams;
  ByRegionContents: ByRegionContentsParams;
  Menu: MenuParams;
  ReserveSuccess: {};
  CustomerService: {};
  CompletedOrder: undefined;
  OrderedList: undefined;
  SelectFriend: undefined;
  ShopList: undefined;
  SignIn: undefined;
  SignUpEmail: undefined;
  SignUpPassword: undefined;
  SignUpCompleted: undefined;
  SignUpUserInfo: undefined;
  Loading: undefined;
  Splash: undefined;
  AgreementTerms: undefined;
  Terms: undefined;
  MyProfile: undefined;
  MyProfileModify: undefined;
  MyInfoModify: MyInfoModifyParams;
  MapView: MapViewParams;
  Review: undefined;
  UserReview: undefined;
  MapMain: undefined;
  GroupList: undefined;
  GroupCreate: GroupCreateParams;
  GroupRoom: undefined;
  Hashtag: undefined;
  // AuthMethod:undefined
  TestHeader: undefined;
  TestTimePicker: undefined;
  Test: undefined;
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
export type MapTabProp = ScreenProp<'Map'>;
export type OrderTabProp = ScreenProp<'Order'>;
export type MyTabProp = ScreenProp<'My'>;

export type AgreementTermsScreenProp = ScreenProp<'AgreementTerms'>;
export type ByRegionContentsScreenProp = ScreenProp<'ByRegionContents'>;
export type CategoryScreenProp = ScreenProp<'Category'>;
export type CompletedOrderScreenProp = ScreenProp<'CompletedOrder'>;
export type ContentScreenProp = ScreenProp<'Content'>;
export type GroupListScreenProp = ScreenProp<'GroupList'>;
export type GroupCreateScreenProp = ScreenProp<'GroupCreate'>;
export type GroupRoomScreenProp = ScreenProp<'GroupRoom'>;
export type HashtagScreenProp = ScreenProp<'Hashtag'>;
export type MapMainScreenProp = ScreenProp<'MapMain'>;
export type MapViewScreenProp = ScreenProp<'MapView'>;
export type MenuScreenProp = ScreenProp<'Menu'>;
export type MyAroundScreenProp = ScreenProp<'MyAround'>;
export type MyProfileScreenProp = ScreenProp<'MyProfile'>;
export type MyInfoModifyScreenProp = ScreenProp<'MyInfoModify'>;
export type OftenPlaceScreenProp = ScreenProp<'OftenPlace'>;
export type ReserveOrderListScreenProp = ScreenProp<'ReserveOrderList'>;
export type ReserveTableScreenProp = ScreenProp<'ReserveTable'>;
export type ReserveDateScreenProp = ScreenProp<'ReserveDate'>;
export type ReserveSuccessScreenProp = ScreenProp<'ReserveSuccess'>;
export type ReviewScreenProp = ScreenProp<'Review'>;
export type SignInScreenProp = ScreenProp<'SignIn'>;
export type SignUpEmailScreenProp = ScreenProp<'SignUpEmail'>;
export type SignUpPasswordScreenProp = ScreenProp<'SignUpPassword'>;
export type SignUpUserInfoScreenProp = ScreenProp<'SignUpUserInfo'>;
export type SearchAddrScreenProp = ScreenProp<'SearchAddr'>;
export type SearchScreenProp = ScreenProp<'Search'>;
export type SearchRegionScreenProp = ScreenProp<'SearchRegion'>;
export type SearchMyAroundScreenProp = ScreenProp<'SearchMyAround'>;
export type UserReviewScreenProp = ScreenProp<'UserReview'>;
