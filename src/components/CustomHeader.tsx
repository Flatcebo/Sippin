import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackVisible from './BackVisible';
import {HomeButton} from './IconButtons';

interface CustomHeaderProps {
  headerFooterContents?: React.ReactNode;
  title?: string;
  backVisible?: boolean;
  homeButton?: boolean;
}
const CustomHeader = ({
  headerFooterContents,
  backVisible,
  title,
  homeButton,
}: CustomHeaderProps) => {
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
