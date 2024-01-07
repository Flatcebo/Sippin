import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Animated,
  FlatList,
  GestureResponderEvent,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  RootStackNavigationProp,
  RootStackParamList,
} from '../types/RootStackProps';
import BackVisible from './BackVisible';
import {HomeButton} from './IconButtons';
// import CreateChatButton from './CreateChatButton';
// import FilterHeader from './FilterHeader';
// import ReserveBar from './ReserveBar';
// import SearchHeader from './SearchHeader';
// import ShoppingBasketButton from './ShoppingBasketButton';
// import SubmitHeader from './SubmitHeader';

interface HeaderProps {
  title: string;
  // searchBar?: boolean;
  // filterBar?: boolean;
  bottomContents?:
    | React.ComponentType<any>
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null
    | undefined;
  headerFooterContents?: React.ReactNode;
  // filterBarLocation?: string;
  // filterBarTitle?: string;
  backVisible?: boolean;
  // createChat?: boolean;
  // createChatOnPress?:
  //   | ((event: GestureResponderEvent) => void)
  //   | null
  //   | undefined;

  // createChatParams?: any;
  // ShoppingBasketParams?: any;
  collapsible?: boolean;
  // shoppingBasket?: boolean;
  // shoppingBasketOnPress?:
  //   | ((event: GestureResponderEvent) => void)
  //   | null
  //   | undefined;
  // reserveBar?: boolean;
  // reserveBarTitle?: string;
  // submitHeader?: boolean;
  // height: any;
  homeButton?: boolean;
}

export function CollapsibleHeaderV1({
  title,
  // height,
  // searchBar,
  bottomContents,
  // filterBar,
  // filterBarLocation,
  // filterBarTitle,
  backVisible,
  headerFooterContents,
  collapsible,
  homeButton,
}: // createChat,
// createChatOnPress,
// createChatParams,
// ShoppingBasketParams,
// shoppingBasket,
// shoppingBasketOnPress,
// reserveBar,
// reserveBarTitle,
// submitHeader,

HeaderProps) {
  // const [scrollY] = useState(new Animated.Value(0));

  // const handleScroll = Animated.event(
  //   [{nativeEvent: {contentOffset: {y: scrollY}}}],
  //   {useNativeDriver: false},
  // );

  // const headerHeight = scrollY.interpolate({
  //   inputRange: [0, 100],
  //   outputRange: [100, 50],
  //   extrapolate: 'clamp',
  // });
  const navigation = useNavigation<RootStackNavigationProp>();
  const [scrollY] = useState(new Animated.Value(0));
  const handleScrolls = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {useNativeDriver: false},
  );
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [50, 0],
    extrapolate: 'clamp',
  });
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: 'white',
          // elevation: 5, // Android에서 그림자를 나타내는 속성
          // shadowColor: '#000', // iOS에서 그림자 색상
          // shadowOffset: {width: 0, height: 2}, // 그림자의 오프셋
          // shadowOpacity: 0.3, // 그림자의 투명도
          // shadowRadius: 4, // 그림자의 반경
        }}>
        <Animated.View
          style={[
            // animatedStyle,
            {
              height: headerHeight,
              backgroundColor: 'white',
              // position: 'absolute',
              // top: 10,
              // zIndex: 10,
              // justifyContent: 'center',
              alignItems: 'center',
              // borderWidth: 1,
              flexDirection: 'row',
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
              // marginTop: '5%',
            }}>
            {title}
          </Text>
          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              width: '18%',
            }}>
            {homeButton && <HomeButton />}
            {/* {createChat && (
            <CreateChatButton
              onPress={() => {
                navigation.push('CreateChat', createChatParams && {});
              }}
            />
          )}
          {shoppingBasket && (
            <ShoppingBasketButton
              onPress={() => {
                navigation.push('ShoppingBasket', ShoppingBasketParams && {});
              }}
            />
          )}
          {submitHeader && <SubmitHeader />} */}
          </View>
        </Animated.View>
      </SafeAreaView>
      {/* {searchBar && <SearchHeader />} */}
      {/* {filterBar && (
        <FilterHeader title={filterBarTitle} location={filterBarLocation} />
      )} */}
      {/* {reserveBar && <ReserveBar title={reserveBarTitle} />} */}

      {headerFooterContents}

      {collapsible ? (
        <FlatList
          data={undefined}
          renderItem={undefined}
          onScroll={handleScrolls}
          scrollEventThrottle={16}
          ListHeaderComponent={bottomContents}
        />
      ) : (
        <FlatList
          data={undefined}
          renderItem={undefined}
          scrollEventThrottle={16}
          ListHeaderComponent={bottomContents}
        />
      )}
    </>
  );
}

export function CollapsibleHeaderV2(props: any) {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  // const animationValue = new Animated.Value(0);
  // const fadeInAnimation = Animated.timing(animationValue, {
  //   toValue: 1,
  //   duration: 3000,
  //   useNativeDriver: true,
  // });
  // fadeInAnimation.start();

  // const animatedStyle = {
  //   opacity: animationValue,
  // };

  const handleScroll = (event: any) => {
    const _scrollTop = event.nativeEvent.contentOffset.y;
    const _navHeight = 100; // 네비게이션 바의 높이값을 넣어주세요
    // 현재 코드는 위로 내리면 사라지고 제자리 또는 올리면 나타남 false 상황을 명확히 정해줘야함

    if (_scrollTop >= _navHeight) {
      if (_scrollTop > lastScrollTop && lastScrollTop > 0) {
        // 네비게이션 바 숨기기
        setHeaderVisible(false);
      } else {
        // 네비게이션 바 보이기
        setHeaderVisible(true);
      }
      setLastScrollTop(_scrollTop);
    }
  };

  return <>{headerVisible && <View></View>}</>;
}
