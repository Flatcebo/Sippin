import React, {useCallback} from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {globalStyles} from '../lib/GlobalStyles';
import LinearGradient from 'react-native-linear-gradient';
import {DefaultTheme} from '@react-navigation/native';
import PressableItem from '../components/PressableItem';
import {HomeTabProp} from '../types/RootStackProps';
export default function HomeTab({navigation}: HomeTabProp) {
  const homeData = [
    {
      id: 0,
      title: '예약하기',
      desc: '원하는 술집, 예약 시작해봐요!',
    },
    {
      id: 1,
      title: '주문하기',
      desc: '테이블오더 주문, 여기서 진행해봐요!',
    },
    {
      id: 2,
      title: '내 주변',
      desc: '',
      // height: 50,
    },
    {
      id: 3,
      title: '자주가는 곳',
      desc: '',
      // height: 50,
    },
  ];

  const reserveData = [
    {
      id: 0,
      title: '',
      addr: '',
      phoneNumber: '',
      name: '',
    },
    {
      id: 0,
      title: '',
      addr: '',
      phoneNumber: '',
      name: '',
    },
  ];

  return (
    <>
      <FlatList
        data={undefined}
        renderItem={undefined}
        keyExtractor={undefined}
        ListHeaderComponentStyle={
          {
            // height: '100%',
            // backgroundColor: 'white',
          }
        }
        ListHeaderComponent={
          <LinearGradient
            colors={[
              'white',
              DefaultTheme.colors.background,
              DefaultTheme.colors.background,
            ]}
            style={{flex: 1}}>
            <View
              style={[
                globalStyles.marginHorizontal5,
                {
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // marginTop: '3%',
                },
              ]}>
              <Pressable
                onPress={() => {
                  navigation.push('InfoReserve');
                }}
                style={[
                  styles.button,
                  {width: '100%', height: 160, shadowColor: 'red'},
                ]}>
                <View
                  style={[
                    globalStyles.marginHorizontal5,
                    globalStyles.marginVertical5,
                    // globalStyles.borderWidth1,
                    {},
                  ]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={[globalStyles.fontBold18, {textAlign: 'left'}]}>
                      예약정보
                    </Text>
                    <Text
                      style={[globalStyles.fontBold18, {textAlign: 'left'}]}>
                      No.1 16:30 ~
                    </Text>
                  </View>
                  <Text
                    style={[
                      globalStyles.fontNormal16,
                      globalStyles.textGray,
                      // globalStyles.marginHorizontal3,
                      globalStyles.marginBottom1,
                      {textAlign: 'left'},
                    ]}>
                    달빛경성술집 무안남악점
                  </Text>
                  <Text
                    style={[
                      globalStyles.textGray,
                      // globalStyles.marginHorizontal3,
                      globalStyles.marginBottom1,

                      {textAlign: 'left', height: '30%'},
                    ]}>
                    전남 무안군 삼향읍 대죽서로 41 114호, 115호
                  </Text>
                  <Text
                    style={[
                      globalStyles.textGray,
                      globalStyles.marginHorizontal3,
                      {textAlign: 'right', fontSize: 14},
                    ]}>
                    010-0000-0000
                  </Text>
                  <Text
                    style={[
                      globalStyles.textGray,
                      globalStyles.marginHorizontal3,
                      {textAlign: 'right', fontSize: 14},
                    ]}>
                    황서은
                  </Text>
                </View>
              </Pressable>
              {homeData.map((item: any) => {
                if (item.id <= 1) {
                  return (
                    <PressableItem
                      key={item.id}
                      item={item}
                      button
                      desc={item.desc}
                      shadowColor
                      title
                    />
                  );
                }
              })}

              {/* 광고 */}
              <View
                style={{
                  borderWidth: 1,
                  height: 100,
                  width: '100%',
                  marginBottom: '3%',
                }}>
                <Text style={[globalStyles.font24, {textAlign: 'center'}]}>
                  광고 배너
                </Text>
              </View>
              {homeData.map(item => {
                if (item.id >= 2) {
                  return <PressableItem key={item.id} item={item} />;
                }
              })}
            </View>
          </LinearGradient>
        }
      />
      {/* <ScrollView style={{height: '100%', marginTop: '3%'}}></ScrollView> */}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '48%',
    height: 120,
    borderRadius: 6,
    backgroundColor: 'white',
    // borderWidth: 0.6,
    borderColor: '#9a9a9a',
    marginBottom: '3%',
    elevation: 4,
    // shadowColor: 'red',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: ,
    // shadowRadius: 2,
    // justifyContent: 'center',
  },
  smallButton: {
    width: '48%',
    // height: 120,
    borderRadius: 6,
    backgroundColor: 'white',
    // borderWidth: 0.6,
    borderColor: '#9a9a9a',
    marginBottom: '3%',
    elevation: 2,
    paddingVertical: '3%',
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    // justifyContent: 'center',
  },
});
