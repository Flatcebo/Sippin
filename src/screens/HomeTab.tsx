import React, {useCallback, useEffect} from 'react';
import {
  Button,
  FlatList,
  Image,
  Platform,
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
import {useColorScheme} from 'react-native';
import {homeData} from '../lib/homeData';
import {scale} from '../utils/scaling';
import BottomButton from '../components/BottomButton';
import {Appbar} from 'react-native-paper';
import SearchBar from '../components/SearchBar';

const HomeTab = ({navigation}: HomeTabProp) => {
  // useEffect(() => {
  //   navigation.setOptions({
  //     header: () => (
  //       <Appbar.Header
  //         style={{
  //           backgroundColor: 'white',
  //           justifyContent: 'center',
  //           // animate:
  //         }}>
  //         {/* <Appbar.BackAction
  //           size={22}
  //           onPress={() => {
  //             navigation.pop();
  //           }}
  //         /> */}
  //         <SearchBar
  //           pressableInput={true}
  //           onPress={() => {
  //             navigation.push('Search');
  //           }}
  //         />
  //       </Appbar.Header>
  //     ),
  //   });
  // }, []);
  const colorScheme = useColorScheme();
  // const isDarkMode = colorScheme === 'light';
  const styles = StyleSheet.create({
    button: {
      width: '48%',
      // height: 120,
      borderRadius: 6,
      backgroundColor: 'white',
      marginBottom: '3%',
    },
    smallButton: {
      width: '48%',
      borderRadius: 6,
      backgroundColor: 'white',
      borderColor: '#9a9a9a',
      marginBottom: '3%',

      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOpacity: 0.5,
          shadowRadius: 5,
          shadowOffset: {height: -1, width: 0},
        },
        android: {elevation: 2},
      }),
      // borderWidth: 2,
      paddingVertical: '3%',
    },
    layout: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '3%',
      marginHorizontal: '5%',

      // borderWidth: 1,
    },
    naviButton: {
      paddingVertical: '3%',
    },
  });
  const naviData = [
    {
      id: 0,
      navigate: 'ReserveTable',
      params: {},
      title: 'ReserveTable',
    },
    {
      id: 1,
      navigate: 'SignIn',
      title: 'SignIn',
    },
    {
      id: 2,
      navigate: 'TestHeader',
      title: 'TestHeader',
    },
    // {
    //   id: 3,
    //   navigate: 'TestTimePicker',
    //   title: 'TestTimePicker',
    // },
    {
      id: 3,
      title: 'Hashtag',
      navigate: 'Hashtag',
    },
    // {
    //   id: 4,
    //   navigate: 'MapMain',
    //   title: 'MapMain',
    // },
    {
      id: 5,
      title: 'Test',
      navigate: 'Test',
    },
    // {
    //   id: 6,
    //   title: 'SearchAddr',
    //   navigate: 'SearchAddr',
    // },
  ];

  const TestButton = () => {
    return (
      <>
        {naviData.map((item: any) => (
          <Button
            key={item.id}
            // style={[styles.naviButton]}
            title={item.title}
            onPress={() => {
              navigation.push(item.navigate, item.params && item.params);
            }}
          />
        ))}
      </>
    );
  };

  return (
    <>
      <Appbar.Header
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          // animate:
        }}>
        <SearchBar
          placeholder="무엇을 검색해볼까요?"
          center
          pressableInput={true}
          onPress={() => {
            navigation.push('Search');
          }}
        />
      </Appbar.Header>
      <FlatList
        data={undefined}
        renderItem={undefined}
        keyExtractor={undefined}
        ListHeaderComponentStyle={{
          // height: '100%',
          backgroundColor: 'white',
        }}
        ListHeaderComponent={
          <LinearGradient
            colors={[
              'white',
              DefaultTheme.colors.background,
              DefaultTheme.colors.background,
            ]}
            style={{flex: 1}}>
            {/* <View style={{height: scale(30)}} /> */}
            <View style={[styles.layout]}>
              <Pressable
                onPress={() => {
                  navigation.push('ReserveInfo');
                }}
                style={[
                  styles.button,

                  {
                    width: '100%',
                    // height: scale(160),
                    // marginTop: 2,
                    elevation: 4,
                    borderRadius: 10,
                    shadowOffset: {height: 1, width: 0},
                    shadowOpacity: 0.1,
                    shadowRadius: 6,
                  },
                ]}>
                <View
                  style={[
                    globalStyles.marginHorizontal5,
                    ,
                    {borderWidth: 0, paddingVertical: '5%'},
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
                      style={[
                        globalStyles.fontBold18,
                        // globalStyles.textGray,
                        {textAlign: 'left'},
                      ]}>
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
                      {textAlign: 'left', height: 40},
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
                      viewIcon
                      title
                      onPress={() => {
                        navigation.push(item.navigate);
                      }}
                    />
                  );
                }
              })}
            </View>
            {/* 광고 */}
            <View
              style={{
                marginHorizontal: 0,
                width: '100%',
                height: 120,
                elevation: 4,
              }}>
              <Image
                source={{
                  uri: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA4MTNfMTYy%2FMDAxNTM0MTMwNTcxMzgy.pS3YPveNk1CcjenYxxwX1f3ghv8vBwyES9iitIOI4Zgg.b0SKOcHnWGsQzvuiiCizLCSUlW87Ud5Q7f33TQVeqVcg.JPEG.lee1221000%2F%25C8%25A8%25C6%25E4%25C0%25CC%25C1%25F6-%25B9%25E8%25B3%25CA%25C1%25A6%25C0%25DB5.jpg&type=l340_165',
                  height: 120,
                }}
                resizeMode="stretch"
                style={{}}
              />
            </View>
            <View style={[styles.layout]}>
              {homeData.map((item: any) => {
                if (item.id >= 2) {
                  return (
                    <PressableItem
                      key={item.id}
                      item={item}
                      onPress={() => {
                        navigation.push(item.navigate);
                      }}
                    />
                  );
                }
              })}
            </View>
          </LinearGradient>
        }
      />
      <ScrollView style={{backgroundColor: '#333', height: 100}}>
        <TestButton />
      </ScrollView>
    </>
  );
};

export default HomeTab;
