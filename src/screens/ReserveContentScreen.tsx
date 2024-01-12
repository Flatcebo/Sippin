import React, {useEffect, useState} from 'react';
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BottomButton from '../components/BottomButton';
import {
  FoodButton,
  HomeButton,
  ReserveDateButton,
  ReserveTableButton,
} from '../components/IconButtons';
import PressableListItem from '../components/PressableListItem';
import QuantityItem from '../components/QuantityItem';
import {globalStyles} from '../lib/GlobalStyles';
import {IconMaterialCommunityIcons} from '../lib/Icon';
import {ReserveContentScreenProp} from '../types/RootStackProps';

export default function ReserveContentScreen({
  route,
  navigation,
}: ReserveContentScreenProp) {
  const {title} = route.params;

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <>
  //         <View
  //           style={{
  //             flexDirection: 'row',
  //             justifyContent: 'center',
  //             alignItems: 'center',
  //           }}>
  //           <View>
  //             <HomeButton />
  //           </View>
  //           <View style={{marginLeft: 8}}>
  //             <FoodButton
  //               onPress={() => {
  //                 navigation.push('Menu', {title: title});
  //               }}
  //             />
  //           </View>
  //         </View>
  //       </>
  //     ),
  //   });
  // }, [navigation]);

  return (
    <>
      <View style={{backgroundColor: 'white'}}>
        <ScrollView>
          <View
            style={{
              // borderBottomWidth: 1.4,
              borderColor: '#eaeaea',
              // marginTop: '1%',
              paddingVertical: '1%',
              borderBottomWidth: 1.4,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: '5%',
              }}>
              <Text style={[globalStyles.fontBold16, {marginRight: 0}]}>
                {title}
              </Text>
              {/* <Text>T-1 &emsp; 12-31 17:30</Text> */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  // borderWidth: 0.4,
                  // borderColor: '#9a9a9a',

                  // paddingVertical: '1%',
                }}>
                <ReserveTableButton title={'T-16'} />
                <ReserveDateButton title={'12-31 17:30'} />
              </View>
            </View>
          </View>
          {/* <View
            style={{
              // height: 200,
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomWidth: 0.4,
              borderColor: '#cacaca',
            }}>
            <Text
              style={{
                color: '#9a9a9a',
                fontSize: 18,
                paddingVertical: '5%',
                textAlign: 'center',
              }}>
              선택한 메뉴가 없습니다.
            </Text>
          </View> */}
          <PressableListItem
            // title="오코노미야끼"
            layoutStyle={{borderBottomWidth: 0.4, borderColor: '#cacaca'}}
            containerStyle={{
              // justifyContent: 'center',
              // alignItems: 'center',
              paddingVertical: '3%',
              marginHorizontal: '5%',
            }}
            titleStyle={[globalStyles.fontNormal16]}
            content={
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={[globalStyles.fontNormal16]}>오코노미야끼</Text>
                  <IconMaterialCommunityIcons
                    name="close"
                    size={20}
                    color={'black'}
                    style={{textAlign: 'right'}}
                  />
                </View>
                <QuantityItem />
              </>
            }
          />
          <PressableListItem
            // title="오코노미야끼"
            layoutStyle={{borderBottomWidth: 0.4, borderColor: '#cacaca'}}
            containerStyle={{
              // justifyContent: 'center',
              // alignItems: 'center',
              paddingVertical: '3%',
              marginHorizontal: '5%',
            }}
            titleStyle={[globalStyles.fontNormal16]}
            content={
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={[globalStyles.fontNormal16]}>오코노미야끼</Text>
                  <IconMaterialCommunityIcons
                    name="close"
                    size={20}
                    color={'black'}
                    style={{textAlign: 'right'}}
                  />
                </View>
                <QuantityItem />
              </>
            }
          />
        </ScrollView>
      </View>
      <BottomButton
        title="예약 완료하기"
        onPress={() => {
          navigation.reset({
            routes: [{name: 'MainTab'}, {name: 'ReserveSuccess'}],
          });
          // navigation.push('ReserveSuccess', {});
        }}
      />
      {/*  => loadingScreen => 예약 내역 Screen */}
    </>
  );
}

const styles = StyleSheet.create({
  layout: {},
  container: {},
});
