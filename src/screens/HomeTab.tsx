import React, {useCallback} from 'react';
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

const HomeTab = ({navigation}: HomeTabProp) => {
  const colorScheme = useColorScheme();
  // const isDarkMode = colorScheme === 'light';
  const styles = StyleSheet.create({
    button: {
      width: '48%',
      height: 120,
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
  });

  return (
    <>
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
                    height: scale(160),
                    marginTop: 2,
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
                    globalStyles.marginVertical5,
                    ,
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
                      // shadowColor
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
              <Button
                title="Table"
                onPress={() => {
                  navigation.push('ReserveTable', {});
                }}
              />
              <Button
                title="SignIn"
                onPress={() => {
                  navigation.push('SignIn');
                }}
              />
              <Button
                title="TestHeader"
                onPress={() => {
                  navigation.push('TestHeader');
                }}
              />
              <Button
                title="TestTimePicker"
                onPress={() => {
                  navigation.push('TestTimePicker');
                }}
              />
            </View>
          </LinearGradient>
        }
      />
      {/* <ScrollView style={{height: '100%', marginTop: '3%'}}></ScrollView> */}
    </>
  );
};

export default HomeTab;
