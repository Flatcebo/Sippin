import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {
  RootStackNavigationProp,
  RootStackParamList,
} from '../types/RootStackProps';
import MainTab from '../screens/MainTab';
import SearchScreen from './SearchScreen';
import SearchBar from '../components/SearchBar';
import {Platform, Pressable, StatusBar, Text, View} from 'react-native';
import ShoppingBasketScreen from './ShoppingBasketScreen';
import MenuScreen from './MenuScreen';
import MyAroundScreen from './MyAroundScreen';
import OftenPlaceScreen from './OftenPlaceScreen';
import AdditionalOrderScreen from './AdditionalOrderScreen';
import {IconAntDesign, IconFeather} from '../lib/Icon';
import {useNavigation} from '@react-navigation/native';
import ContentScreen from './ContentScreen';
import ReserveContentScreen from './ReserveContentScreen';
import ReserveTableScreen from './ReserveTableScreen';
import ReserveDateScreen from './ReserveDateScreen';
import {CloseButton} from '../components/IconButtons';
import ReserveSuccessScreen from './ReserveSuccessScreen';
import CustomerServiceScreen from './CustomerServiceScreen';
import CompletedOrderScreen from './CompletedOrderScreen';
import OrderedListScreen from './OrderedListScreen';
import CustomHeader from '../components/CustomHeader';
import CategoryScreen from './CategoryScreen';
import ByRegionContentsScreen from './ByRegionContentsScreen';
import CalendarTestScreen from './CalendarTestScreen';
import SelectFriendScreen from './SelectFriendScreen';
import ShopListScreen from './ShopListScreen';
import ReserveInfoScreen from './ReserveInfoScreen';

interface Props {
  options: NativeStackNavigationOptions;
  title?: string;
  homeButton?: boolean;
  backVisible?: boolean;
}

export default function RootStack() {
  Platform.OS === 'android'
    ? (StatusBar.setTranslucent(true),
      StatusBar.setBackgroundColor('transparent'),
      StatusBar.setBarStyle('dark-content'))
    : StatusBar.setBarStyle('dark-content');
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'fade_from_bottom',
        headerShadowVisible: false,
        // headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
        header: ({options}: any) => {
          const title = options?.title || '';
          const backVisible = options?.backVisible;
          const homeButton = options?.homeButton;
          const foodButton = options?.foodButton;
          const closeButton = options?.closeButton;
          const customerServiceButton = options?.customerServiceButton;
          const checkButton = options?.checkButton;

          return (
            <CustomHeader
              title={title}
              backVisible={backVisible}
              homeButton={homeButton}
              foodButton={foodButton}
              closeButton={closeButton}
              customerServiceButton={customerServiceButton}
              checkButton={checkButton}
            />
          );
        },
      }}>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: true,
          header: () => (
            <>
              <SearchBar
                autoFocus
                placeholder="어디로 가고 싶으신가요?"
                backVisible
              />
              {/* <FilterBar /> */}
            </>
          ),
        }}
      />
      <Stack.Screen
        name="ReserveInfo"
        component={ReserveInfoScreen}
        options={{
          title: '예약내역',
          backVisible: true,
          homeButton: false,
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          header: () => (
            <>
              <SearchBar
                // autoFocus
                placeholder="어디로 가고 싶으신가요?"
                backVisible
              />
              {/* <FilterBar /> */}
            </>
          ),
        }}
      />
      <Stack.Screen
        name="ShoppingBasket"
        component={ShoppingBasketScreen}
        options={{title: '장바구니'}}
      />
      <Stack.Screen
        name="AdditionalOrder"
        component={AdditionalOrderScreen}
        options={{
          title: '주문하기',
          headerStyle: {backgroundColor: 'white'},
          backVisible: true,

          headerRight: () => (
            <Pressable
              onPress={() => {
                navigation.navigate('ShoppingBasket');
              }}>
              <IconFeather name="shopping-cart" size={20} color="black" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="MyAround"
        component={MyAroundScreen}
        options={{
          title: '내 주변',
          backVisible: true,
        }}
      />
      <Stack.Screen
        name="OftenPlace"
        component={OftenPlaceScreen}
        options={{
          headerShown: true,
          title: '자주가는 곳',
          backVisible: true,
        }}
      />
      <Stack.Screen
        name="Content"
        component={ContentScreen}
        options={{
          title: '업체정보',
          animation: 'simple_push',
          backVisible: true,
          homeButton: true,
        }}
      />
      <Stack.Screen
        name="ReserveContent"
        component={ReserveContentScreen}
        options={{
          title: '예약하기',
          backVisible: true,
          foodButton: true,
        }}
      />
      <Stack.Screen
        name="ReserveTable"
        component={ReserveTableScreen}
        options={{
          title: '테이블 선택',
          headerTitleAlign: 'center',
          backVisible: true,
        }}
      />
      <Stack.Screen
        name="ReserveDate"
        component={ReserveDateScreen}
        options={{
          title: '예약시간',
          backVisible: true,
          animation: 'slide_from_bottom',
        }}
      />
      <Stack.Screen
        name="ByRegionContents"
        component={ByRegionContentsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          headerShown: true,
          title: '메뉴',
          closeButton: true,
        }}
      />
      <Stack.Screen
        name="ReserveSuccess"
        component={ReserveSuccessScreen}
        options={{
          headerShown: true,
          title: '',
          closeButton: true,
          customerServiceButton: true,
        }}
      />
      <Stack.Screen
        name="CustomerService"
        component={CustomerServiceScreen}
        options={{headerShown: true, title: '고객센터'}}
      />
      <Stack.Screen
        name="CompletedOrder"
        component={CompletedOrderScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="OrderedList"
        component={OrderedListScreen}
        options={{
          headerShown: true,
          title: '주문내역',
          closeButton: true,
        }}
      />
      <Stack.Screen
        name="CalendarTest"
        component={CalendarTestScreen}
        options={{
          headerShown: true,
          title: '주문내역',
          animation: 'slide_from_bottom',
          backVisible: true,
        }}
      />
      <Stack.Screen
        name="SelectFriend"
        component={SelectFriendScreen}
        options={{
          title: '친구 선택',
          backVisible: true,
          checkButton: true,
        }}
      />
      <Stack.Screen
        name="ShopList"
        component={ShopListScreen}
        options={{
          headerShown: false,
          title: '주문내역',
          closeButton: true,
        }}
      />
    </Stack.Navigator>
  );
}
{
  /* 
  <Stack.Screen
        name=""
        component={}
        options={{title: ''}}
  /> 
  */
}
