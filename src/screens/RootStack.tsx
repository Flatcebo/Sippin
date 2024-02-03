import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {
  NavigationProp,
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
import ReserveContentScreen from './ReserveOrderListScreen';
import ReserveTableScreen from './ReserveTableScreen';
import ReserveDateScreen from './ReserveDateScreen';
import {
  CheckButton,
  CloseButton,
  CustomerServiceButton,
  HomeButton,
  ShoppingBasketButton,
} from '../components/IconButtons';
import ReserveSuccessScreen from './ReserveSuccessScreen';
import CustomerServiceScreen from './CustomerServiceScreen';
import CompletedOrderScreen from './CompletedOrderScreen';
import OrderedListScreen from './OrderedListScreen';
import CustomHeader from '../components/CustomHeader';
import CategoryScreen from './CategoryScreen';
import ByRegionContentsScreen from './ByRegionContentsScreen';
import CalendarTestScreen from './TestHeaderScreen';
import SelectFriendScreen from './SelectFriendScreen';
import ShopListScreen from './ShopListScreen';
import ReserveInfoScreen from './ReserveInfoScreen';
import LoginScreen from './SignInScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpEmailScreen';
import AgreementTermsScreen from './AgreementTermsScreen';
import TermsScreen from './TermsScreen';
import SignUpEmailScreen from './SignUpEmailScreen';
import SignUpPasswordScreen from './SignUpPasswordScreen';
import SignUpUserInfoScreen from './SignUpUserInfoScreen';
import SignUpCompletedScreen from './SignUpCompletedScreen';
import SearchAddrScreen from './SearchAddrScreen';
import TestHeaderScreen from './TestHeaderScreen';
import TestTimePickerScreen from './TestTimePickerScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import ReserveOrderListScreen from './ReserveOrderListScreen';
import {useHeaderHeight} from '@react-navigation/elements';
import {verticalScale} from '../utils/scaling';
import OrderTab from './OrderTab';
import MyInfoModifyScreen from './MyInfoModifyScreen';
import MyProfileScreen from './MyProfileScreen';
import MyProfileModifyScreen from './MyProfileModifyScreen';
import MapViewScreen from './MapViewScreen';
import ReviewScreen from './ReviewScreen';
import TestScreen from './TestScreen';
import UserReviewScreen from './UserReviewScreen';

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

  const navigation = useNavigation<NavigationProp>();

  // const headerHeight = useHeaderHeight();

  // console.log(headerHeight);

  return (
    <Stack.Navigator
      screenOptions={{
        // animation: 'fade_from_bottom',
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: 'bold',
        },
        // contentStyle: {backgroundColor: 'red'},
        // headerRight: ({canGoBack}) => <CustomHeader options={} />,
        // header: ({options}) => <CustomHeader options={options} />,
      }}>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpEmail"
        component={SignUpEmailScreen}
        options={{
          headerShown: true,
          title: 'SignUpEmail',
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="SignUpPassword"
        component={SignUpPasswordScreen}
        options={{
          headerShown: true,
          title: 'SignUpPassword',
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="SignUpCompleted"
        component={SignUpCompletedScreen}
        options={{
          headerShown: true,
          title: 'SignUpCompleted',
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="SignUpUserInfo"
        component={SignUpUserInfoScreen}
        options={{
          headerShown: true,
          title: 'SignUpUserInfo',
          // closeButton: true,
          headerBackVisible: false,
          headerRight: () => <CloseButton />,
        }}
      />
      <Stack.Screen
        name="AgreementTerms"
        component={AgreementTermsScreen}
        options={{headerShown: true, title: 'Title', headerBackVisible: true}}
      />
      <Stack.Screen
        name="Terms"
        component={TermsScreen}
        options={{headerShown: true, title: 'Terms', headerBackVisible: true}}
      />
      <Stack.Screen
        name="Order"
        component={OrderTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: true,
          header: () => (
            // <SafeAreaView
            //   style={{backgroundColor: 'white', height: verticalScale(100)}}>
            <SearchBar
              autoFocus
              placeholder="어디로 가고 싶으신가요?"
              backVisible
            />
            // </SafeAreaView>
          ),
          headerBackVisible: false,

          // header: () => (
          //   <SearchBar
          //     autoFocus
          //     placeholder="어디로 가고 싶으신가요?"
          //     backVisible
          //   />
          // ),
        }}
      />
      <Stack.Screen
        name="SearchAddr"
        component={SearchAddrScreen}
        options={{
          title: '주소검색',
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="ReserveInfo"
        component={ReserveInfoScreen}
        options={{
          title: '예약내역',
          headerBackVisible: true,
          // homeButton: false,
          headerRight: () => <HomeButton />,
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
        options={{title: '장바구니', headerBackVisible: true}}
      />
      <Stack.Screen
        name="AdditionalOrder"
        component={AdditionalOrderScreen}
        options={{
          title: '주문하기',
          headerStyle: {backgroundColor: 'white'},
          headerBackVisible: true,

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
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="OftenPlace"
        component={OftenPlaceScreen}
        options={{
          headerShown: true,
          title: '자주가는 곳',
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="Content"
        component={ContentScreen}
        options={{
          title: '업체정보',
          animation: 'simple_push',
          headerBackVisible: true,
          // homeButton: true,
          headerRight: () => <HomeButton />,
          // headerBlurEffect: 'regular',
          // headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ReserveOrderList"
        component={ReserveOrderListScreen}
        options={{
          title: '예약하기',
          headerBackVisible: true,
          // shoppingBasket: true,
          // foodButton: true,
          headerRight: () => <ShoppingBasketButton />,
        }}
      />
      <Stack.Screen
        name="ReserveTable"
        component={ReserveTableScreen}
        options={{
          title: '테이블 선택',
          headerTitleAlign: 'center',
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="ReserveDate"
        component={ReserveDateScreen}
        options={{
          title: '예약시간',
          headerBackVisible: true,
          animation: 'slide_from_bottom',
        }}
      />
      <Stack.Screen
        name="ByRegionContents"
        component={ByRegionContentsScreen}
        options={{
          // header: () => <Text>alalallala</Text>,
          headerShown: true,
          headerBackVisible: true,
          title: '지역별',

          headerRight: () => <HomeButton />,
        }}
      />
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          headerShown: true,
          title: '메뉴',
          headerBackVisible: false,
          // closeButton: true,
          headerRight: () => <CloseButton />,
        }}
      />
      <Stack.Screen
        name="ReserveSuccess"
        component={ReserveSuccessScreen}
        options={{
          headerShown: true,
          title: '',
          headerBackVisible: false,
          headerRight: () => (
            <>
              <View style={{marginRight: 10}}>
                <CustomerServiceButton />
              </View>
              <CloseButton />
            </>
          ),
          // closeButton: true,
          // customerServiceButton: true,
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
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderedList"
        component={OrderedListScreen}
        options={{
          headerShown: true,
          title: '주문내역',
          // closeButton: true,
          headerRight: () => <CloseButton />,
        }}
      />

      <Stack.Screen
        name="SelectFriend"
        component={SelectFriendScreen}
        options={{
          title: '친구 선택',
          headerBackVisible: true,
          // checkButton: true,
          headerRight: () => (
            <CheckButton
              onPress={() => {
                navigation.navigate('ReserveTable', {});
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ShopList"
        component={ShopListScreen}
        options={{
          headerShown: false,
          title: '주문내역',
          // closeButton: true,
          headerRight: () => <CloseButton />,
        }}
      />
      <Stack.Screen
        name="MyInfoModify"
        component={MyInfoModifyScreen}
        options={{
          headerShown: true,
          title: '나의 정보',
          headerBackVisible: false,
          // closeButton: true,
          headerRight: () => <CloseButton />,
        }}
      />
      <Stack.Screen
        name="MyProfileModify"
        component={MyProfileModifyScreen}
        options={{
          headerShown: true,
          title: '프로필 수정',
          headerBackVisible: false,
          // closeButton: true,
          headerRight: () => <CloseButton />,
        }}
      />

      <Stack.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={{
          headerShown: true,
          title: '프로필',
          // closeButton: true,
        }}
      />
      <Stack.Screen
        name="MapView"
        component={MapViewScreen}
        options={{
          headerShown: true,
          title: '지도',
          // closeButton: true,
        }}
      />
      <Stack.Screen
        name="Review"
        component={ReviewScreen}
        options={{
          headerShown: true,
          title: '리뷰',
          // closeButton: true,
        }}
      />
      <Stack.Screen
        name="UserReview"
        component={UserReviewScreen}
        options={{
          headerShown: true,
          title: '유저 리뷰',
          // closeButton: true,
        }}
      />
      <Stack.Group>
        <Stack.Screen
          name="TestHeader"
          component={TestHeaderScreen}
          options={{
            headerShown: true,
            title: '주문내역',
            animation: 'slide_from_bottom',
            headerBackVisible: true,
          }}
        />
        <Stack.Screen
          name="TestTimePicker"
          component={TestTimePickerScreen}
          options={{
            headerShown: true,
            title: '주문내역',
            animation: 'slide_from_bottom',
            headerBackVisible: true,
          }}
        />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Group>
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
