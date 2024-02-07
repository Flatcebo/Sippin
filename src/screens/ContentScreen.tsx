import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ImageFlatList from '../components/ImageFlatList';
import {keyExtractor} from '../lib/keyExtractor';
import {moderateScale, scale, verticalScale} from '../utils/scaling';
import {ContentScreenProp} from '../types/RootStackProps';
import {formatNumber} from '../utils/format';
import WebView from 'react-native-webview';
import BottomButton from '../components/BottomButton';
import {IconIonicons, IconMaterialIcons} from '../lib/Icon';
import {globalStyles} from '../lib/GlobalStyles';

import MapView from '../components/MapView';

export default function ContentScreen({route, navigation}: ContentScreenProp) {
  const {
    id,
    title,
    address,
    category,
    chat,
    heart,
    desc,
    imageUri,
    reviewImageUri,
    menu,
  } = route.params;

  const data = [
    {
      id,
      imageUri,
      title,
    },
  ];
  const thumbData = [
    {
      id: 1,
      imageUri:
        'https://postfiles.pstatic.net/20160925_74/lovexoxo0217_1474733696748Awv7y_JPEG/image_3450045751474733680585.jpg?type=w966',
    },
    {
      id: 2,
      imageUri:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MjZfMjIg%2FMDAxNjUwOTAzODk1MjYx.ggwTDO4BMyqISMlnQ41DCZbfm7mq-XQ8QqF-H0qDX9og.2SksLagj_lSlhyGL5DTIK2Ofl4J1pzIc5JtXoCxhH5wg.JPEG.point8612%2FKakaoTalk_20220425_211141951_05.jpg&type=sc960_832',
    },
    {
      id: 3,
      imageUri:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEyMTNfMTg0%2FMDAxNTQ0NzAxMDUyNjQ2.o1MZoCMxlYIc5KRc7XmXyl22PajuL7mBX8439FqXiBwg.XmnGGXWb-vsCCR2xbLWSYxeKsDE2b66h4OHe7EK-n3og.JPEG.ekfhddl0707%2FDSC_0089.JPG&type=sc960_832',
    },
  ];

  const onPressAddress = () => {
    navigation.push('MapView', {
      address: address,
      title: title,
    });
  };
  const onPressReview = () => {
    navigation.push('Review');
  };
  const onPressMenuButton = () => {
    navigation.push('Menu', {title: title});
  };
  // console.log(StatusBar.currentHeight);

  return (
    <>
      <View style={[styles.layout]}>
        <View>
          <FlatList
            data={undefined}
            renderItem={undefined}
            keyExtractor={keyExtractor}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: scale(80)}}
            ListHeaderComponent={
              <>
                <View style={[styles.headerContainer]}>
                  <ImageFlatList
                    data={thumbData}
                    imageHeight={scale(240)}
                    imageWidth={Dimensions.get('window').width}
                    keyExtractor={true}
                  />
                  <View style={[styles.infoContainer]}>
                    <View style={{rowGap: 6}}>
                      <Text style={[styles.categoryText]}>{category}</Text>
                      <Text style={[styles.titleText]}>{title}</Text>

                      <Pressable
                        style={[styles.addressView]}
                        onPress={onPressAddress}>
                        <IconIonicons
                          name="location"
                          size={18}
                          color={'#0063e4'}
                        />
                        <Text style={[styles.addressText]}>{address}</Text>
                        <IconMaterialIcons
                          name="keyboard-arrow-right"
                          size={20}
                          color={'#0063e4'}
                        />
                      </Pressable>
                    </View>
                    <Pressable
                      style={[{marginVertical: 4}]}
                      onPress={onPressReview}>
                      <View
                        style={[{flexDirection: 'row', alignItems: 'center'}]}>
                        <IconMaterialIcons
                          name="star"
                          size={18}
                          color="#feed03"
                        />
                        <Text style={[globalStyles.fontBold12]}>5.0</Text>
                        <Text style={[{fontSize: 12}]}>
                          ({formatNumber(heart)})
                        </Text>
                        <IconMaterialIcons
                          name="keyboard-arrow-right"
                          size={20}
                        />
                      </View>
                    </Pressable>
                    <Text
                      style={{color: 'black', lineHeight: 18, fontSize: 14}}>
                      {/* {desc} */}
                      설명 설명설명설명. 설명설 명 설명설명 설명 설명 설명설명
                    </Text>
                  </View>
                  {/* ReviewImage */}
                  <View style={{paddingBottom: '3%'}}>
                    <ImageFlatList
                      data={thumbData}
                      imageHeight={120}
                      imageWidth={120}
                      keyExtractor={(item: any) => item}
                      marginRight
                    />
                  </View>

                  {/* MenuButton */}
                  <Pressable
                    onPress={onPressMenuButton}
                    style={({pressed}) => [
                      styles.menuButton,
                      {
                        backgroundColor: pressed ? '#eaeaea' : 'white',
                      },
                    ]}>
                    <Text style={{fontSize: 16, color: 'black'}}>
                      메뉴 보기
                    </Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    // height: '50%',
                    // marginBottom: '20%',
                    backgroundColor: 'white',
                    paddingVertical: '5%',
                    paddingHorizontal: '5%',
                    rowGap: 10,
                  }}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>위치</Text>
                  <MapView address={address} />

                  {/* <View
                  style={{
                    marginBottom: '3%',
                    backgroundColor: 'white',
                    paddingVertical: '5%',
                  }}></View> */}
                </View>
                {/* 추천Image */}
                <View style={{}}>
                  <Text style={{fontWeight: 'bold', padding: '3%'}}>
                    추천 업체
                  </Text>
                  <ImageFlatList
                    data={data}
                    imageHeight={150}
                    imageWidth={150}
                    keyExtractor={(item: any) => item}
                  />
                </View>
              </>
            }
          />
        </View>

        <BottomButton
          title="예약하러 가기"
          star
          onPress={() => {
            navigation.push('SelectFriend');
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  layout: {width: '100%', height: '100%'},
  infoContainer: {
    paddingVertical: '3%',
    paddingHorizontal: '5%',
    // rowGap: 6,
    backgroundColor: 'white',
    // alignItems: 'center',
  },
  categoryText: {
    color: '#571d1d',
    fontSize: 12,
    fontWeight: '600',
  },
  titleText: {
    fontSize: 19,
    textAlign: 'left',
    color: 'black',
    fontWeight: '700',
  },
  addressView: {
    alignItems: 'center',
    flexDirection: 'row',
    // borderWidth: 1,
    // justifyContent: 'center',
  },
  addressText: {
    fontSize: 13,
    textAlign: 'left',
    color: '#0063e4',
    alignItems: 'center',
    textAlignVertical: 'center',
    verticalAlign: 'middle',
    fontWeight: 'bold',
  },
  reviewContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  menuButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '3%',
    borderWidth: 0.4,
    borderColor: '#9a9a9a',
    borderRadius: 4,
  },

  headerContainer: {
    backgroundColor: 'white',
    paddingBottom: '5%',
    marginBottom: '3%',
  },
});
