import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Platform} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {NavigationProp} from '../types/RootStackProps';
import {scale, verticalScale} from '../utils/scaling';
import BackVisible from './BackVisible';
import {
  CheckButton,
  CloseButton,
  FoodButton,
  HomeButton,
  CustomerServiceButton,
  ShoppingBasketButton,
} from './IconButtons';
import {useHeaderHeight} from '@react-navigation/elements';

interface CustomHeaderProps {
  headerFooterContents?: React.ReactNode;
  title?: string;
  backVisible?: boolean;
  homeButton?: boolean;
  foodButton?: boolean;
  closeButton?: boolean;
  customerServiceButton?: boolean;
  checkButton?: boolean;
  onPressCheck?: () => void;
  shoppingBasket?: boolean;
}
const CustomHeader = ({options}: any) => {
  const navigation = useNavigation<NavigationProp>();

  const {
    title = '',
    backVisible,
    homeButton,
    foodButton,
    closeButton,
    customerServiceButton,
    checkButton,
    shoppingBasket,
  } = options;
  const insets = useSafeAreaInsets();
  // let headerHeight;
  // const hasDynamicIsland = Platform.OS === 'ios' && insets.top > 50;
  // const statusBarHeight = hasDynamicIsland ? insets.top - 5 : insets.top;
  // if (Platform.OS === 'ios') {
  //   headerHeight = 56;
  // } else if (Platform.OS === 'android') {
  //   headerHeight = 56;
  // } else {
  //   headerHeight = 64;
  // }

  // const headerRealHeight = headerHeight + statusBarHeight;
  const headerHeight = useHeaderHeight();

  // console.log(dd);
  return (
    <>
      {/* <SafeAreaView
        style={{
          backgroundColor: 'red',
          // height: '10%',
          height: verticalScale(80),
        }}> */}
      <View
        style={[
          // animatedStyle,
          {
            // height: verticalScale(60),
            height: headerHeight,
            // flex: 1,
            // paddingVertical: 10,
            backgroundColor: 'white',
            alignItems: 'center',
            flexDirection: 'row',
            // marginTop: '5%',
          },
        ]}>
        {backVisible ? (
          <BackVisible />
        ) : (
          <View
            style={{
              width: '13%',
              height: '100%',
              // borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}></View>
        )}
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            textAlign: 'left',
            fontWeight: 'bold',
            width: '65%',

            // marginLeft: '4%',
            // borderWidth: 1,
            // marginTop: scale(20),
          }}>
          {title}
        </Text>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '18%',
            flexDirection: 'row',
            // rowGap: 10,
            // borderWidth: 1,
          }}>
          <View>{customerServiceButton && <CustomerServiceButton />}</View>
          <View>
            {foodButton && <FoodButton />}
            {homeButton && <HomeButton />}
            {checkButton && (
              <CheckButton
                onPress={() => {
                  navigation.push('ReserveTable', {});
                }}
              />
            )}
            {closeButton && <CloseButton />}
            {shoppingBasket && <ShoppingBasketButton />}
          </View>
        </View>
        {/* {createChat && (
            <CreateChatButton
              onPress={() => {
                navigation.push('CreateChat', createChatParams && {});
              }}
            />
          )} */}
        {/* {submitHeader && <SubmitHeader />}  */}
      </View>
      {/* </SafeAreaView> */}
      {/* {searchBar && <SearchHeader />} */}
      {/* {filterBar && (
        <FilterHeader title={filterBarTitle} location={filterBarLocation} />
      )} */}
      {/* {reserveBar && <ReserveBar title={reserveBarTitle} />} */}

      {/* {headerFooterContents} */}
    </>
  );
};

export default CustomHeader;
