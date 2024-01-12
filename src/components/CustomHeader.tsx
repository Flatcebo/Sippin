import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProp} from '../types/RootStackProps';
import BackVisible from './BackVisible';
import {
  CheckButton,
  CloseButton,
  FoodButton,
  HomeButton,
  CustomerServiceButton,
} from './IconButtons';

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
}
const CustomHeader = ({
  headerFooterContents,
  backVisible,
  title,
  homeButton,
  foodButton,
  closeButton,
  customerServiceButton,
  checkButton,
  onPressCheck,
}: CustomHeaderProps) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: 'white',
        }}>
        <View
          style={[
            // animatedStyle,
            {
              height: 50,
              backgroundColor: 'white',
              alignItems: 'center',
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
                    navigation.push('ReserveDate', {});
                  }}
                />
              )}
              {closeButton && <CloseButton />}
            </View>
          </View>
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
      </SafeAreaView>
      {/* {searchBar && <SearchHeader />} */}
      {/* {filterBar && (
        <FilterHeader title={filterBarTitle} location={filterBarLocation} />
      )} */}
      {/* {reserveBar && <ReserveBar title={reserveBarTitle} />} */}

      {headerFooterContents}
    </>
  );
};

export default CustomHeader;
