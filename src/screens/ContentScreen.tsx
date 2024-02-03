import react, {useEffect} from 'react';

import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ImageFlatList from '../components/ImageFlatList';

import {keyExtractor} from '../lib/keyExtractor';
import {moderateScale, scale, verticalScale} from '../utils/scaling';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';

import {ContentScreenProp} from '../types/RootStackProps';
import {formatNumber} from '../utils/format';
import WebView from 'react-native-webview';
import BottomButton from '../components/BottomButton';
import {IconIonicons, IconMaterialIcons} from '../lib/Icon';
import {globalStyles} from '../lib/GlobalStyles';

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

  // const onPressPushMenu = (item: any) => {
  //   navigation.push('Menu', {
  //     id,
  //     menu,
  //   });
  // };

  return (
    <>
      <View style={[styles.layout]}>
        <View>
          <FlatList
            data={undefined}
            renderItem={undefined}
            keyExtractor={keyExtractor}
            scrollEventThrottle={16}
            ListHeaderComponent={
              <>
                <ImageFlatList
                  data={thumbData}
                  imageHeight={verticalScale(240)}
                  imageWidth={Dimensions.get('window').width}
                  keyExtractor={true}
                />
                <View style={[styles.infoContainer]}>
                  <Text style={[styles.categoryText]}>{category}</Text>
                  <Text style={[styles.titleText]}>{title}</Text>
                  <Pressable
                    style={[styles.addressView]}
                    onPress={() => {
                      navigation.push('MapView');
                    }}>
                    <IconIonicons name="location" size={18} color={'#9a9a9a'} />
                    <Text style={[styles.addressText]}>{address}</Text>
                    <IconMaterialIcons
                      name="keyboard-arrow-right"
                      size={20}
                      color={'#9a9a9a'}
                    />
                  </Pressable>

                  <Pressable
                    style={[{rowGap: 4}]}
                    onPress={() => {
                      navigation.push('Review');
                    }}>
                    <View
                      style={[{flexDirection: 'row', alignItems: 'center'}]}>
                      <IconMaterialIcons
                        name="star"
                        size={22}
                        color="#feed03"
                      />
                      <Text style={[globalStyles.fontBold14]}>5.0</Text>
                      <Text style={[{fontSize: 13}]}>
                        ({formatNumber(heart)})
                      </Text>
                      <IconMaterialIcons
                        name="keyboard-arrow-right"
                        size={20}
                      />
                    </View>
                  </Pressable>
                </View>
                {/* ReviewImage */}
                <View style={{paddingBottom: 10}}>
                  <ImageFlatList
                    data={thumbData}
                    imageHeight={140}
                    imageWidth={140}
                    keyExtractor={(item: any) => item}
                  />
                </View>

                {/* MenuButton */}
                <Pressable
                  onPress={() => {
                    navigation.push('Menu', {title: title});
                  }}
                  style={({pressed}) => [
                    styles.menuButton,
                    {
                      backgroundColor: pressed ? '#eaeaea' : 'white',
                    },
                  ]}
                  // onPress={onPressPushMenu}
                >
                  <Text style={{fontSize: 16, color: 'black'}}>메뉴 보기</Text>
                </Pressable>
                <View style={[styles.webViewContainer]}>
                  <WebView
                    style={{flex: 1, backgroundColor: 'white'}}
                    originWhitelist={['*']}
                    source={{
                      uri: 'https://host-portf.web.app/Map',
                      headers: {
                        'Access-Control-Allow-Origin': '*',
                      },
                    }}
                  />
                </View>
                <View style={{marginBottom: '3%'}}>
                  <Text style={{color: 'black', lineHeight: 18, fontSize: 14}}>
                    {/* {desc} */}
                    desc
                  </Text>
                </View>

                {/* 추천Image */}
                <View
                  style={{
                    marginBottom: '20%',
                  }}>
                  <ImageFlatList
                    data={data}
                    imageHeight={150}
                    imageWidth={150}
                    keyExtractor={(item: any) => item}
                  />
                  <Text>추천 업체</Text>
                  <View style={{flexDirection: 'row'}}></View>
                </View>
              </>
            }
          />
        </View>

        <BottomButton
          title="예약하러 가기"
          onPress={() => {
            navigation.push('SelectFriend');
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  layout: {width: '100%', height: '100%', backgroundColor: 'white'},
  infoContainer: {
    marginVertical: '2%',
    paddingHorizontal: '5%',
    rowGap: 2,
    // alignItems: 'center',
  },
  categoryText: {
    color: '#571d1d',
    fontSize: 13,
    fontWeight: '600',
  },
  titleText: {
    fontSize: 18,
    textAlign: 'left',
    color: 'black',
    fontWeight: '700',
  },
  addressView: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  addressText: {
    fontSize: 13,
    textAlign: 'left',
    color: '#5a5a5a',
  },
  reviewContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  menuButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '3%',
    // height: '5%',
    paddingVertical: '3%',
    borderWidth: 0.4,
    borderColor: '#9a9a9a',
    borderRadius: 4,
  },
  webViewContainer: {
    height: 140,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#eaeaea',
  },
});

{
  /* <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-end',
                        width: '30%',
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <IconOcticons name="heart" size={16} color="red" />
                        <Text style={{color: 'black'}}>
                          {formatNumber(heart)}
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <IconMaterialCommunityIcons
                          name="chat-outline"
                          size={17}
                          color="black"
                        />
                        <Text style={{color: 'black'}}>
                          {formatNumber(chat)}
                        </Text>
                      </View>
                    </View> */
}
