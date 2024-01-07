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
import InfoReserveScreen from './InfoReserveScreen';
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
          const backVisible = options?.backVisible !== false;
          const homeButton = options?.homeButton !== false;

          return (
            <CustomHeader
              title={title}
              backVisible={backVisible}
              homeButton={homeButton}
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
        name="InfoReserve"
        component={InfoReserveScreen}
        options={{title: '예약내역'}}
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
          headerRight: () => (
            <Pressable
              onPress={() => {
                navigation.navigate('ShoppingBasket');
              }}>
              <IconFeather name="shopping-cart" size={20} color="black" />
            </Pressable>
            // <View>
            //   <OrderModal
            //     onRequestClose={() => {
            //       setModalVisible(!modalVisible);
            //     }}
            //     visible={modalVisible}
            //   />
            //   <Pressable
            //     onPress={() => {
            //       setModalVisible(true);
            //     }}>
            //     <IconEntypo name="menu" size={26} color="black" />
            //   </Pressable>
            // </View>
          ),
        }}
      />
      <Stack.Screen
        name="MyAround"
        component={MyAroundScreen}
        options={{title: '내 주변'}}
      />
      <Stack.Screen
        name="OftenPlace"
        component={OftenPlaceScreen}
        options={{
          title: '자주가는 곳',
        }}
      />
      <Stack.Screen
        name="Content"
        component={ContentScreen}
        options={{
          title: '업체정보',
          animation: 'simple_push',
          // backVisible: true,
          // homeButton: true,

          // header: () => <CustomHeader backVisible={false} />,
          // headerTitle: 'hihi',
        }}
      />
      <Stack.Screen
        name="ReserveContent"
        component={ReserveContentScreen}
        options={{
          title: '예약하기',
          // headerShadowVisible: false,
          // headerRight: () => (
          //   <>
          //     <View>
          //       <ReserveTableButton />
          //     </View>
          //     <View>
          //       <ReserveDateButton />
          //     </View>
          //   </>
          // ),

          // headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ReserveTable"
        component={ReserveTableScreen}
        options={{
          title: '테이블 선택',
          // headerLeft: () => (
          //   <CloseButton
          //     onPress={() => {
          //       navigation.goBack();
          //     }}
          //   />
          // ),
          // headerBackVisible: false,
          headerTitleAlign: 'center',

          // presentation: '',
          // contentStyle: {backgroundColor: '#0000003e'},
        }}
      />
      <Stack.Screen
        name="ReserveDate"
        component={ReserveDateScreen}
        options={{
          title: '예약시간',
          homeButton: false,
          animation: 'slide_from_bottom',
          // headerShown:false
          // headerLeft: () => (
          //   <CloseButton
          //     onPress={() => {
          //       navigation.goBack();
          //     }}
          //   />
          // ),
          // headerShown: false,
          // headerBackVisible: false,
          // headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ByRegionContents"
        component={ByRegionContentsScreen}
        options={{
          headerShown: false,
          backVisible: false,
        }}
      />
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{headerShown: true, title: '메뉴'}}
      />
      <Stack.Screen
        name="ReserveSuccess"
        component={ReserveSuccessScreen}
        options={{
          headerShown: true,
          title: '',
          headerBackVisible: true,
          headerRight: () => (
            <Pressable
              onPress={() => {
                navigation.navigate('CustomerService', {});
              }}>
              <IconAntDesign name="customerservice" size={24} />
            </Pressable>
          ),
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
        options={{headerShown: true, title: '주문내역'}}
      />
      <Stack.Screen
        name="CalendarTest"
        component={CalendarTestScreen}
        options={{
          headerShown: true,
          title: '주문내역',
          animation: 'slide_from_bottom',
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
