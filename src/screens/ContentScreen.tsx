import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Linking,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ImageFlatList from '../components/ImageFlatList';
import {keyExtractor} from '../lib/keyExtractor';
import {moderateScale, scale, verticalScale} from '../utils/scaling';
import {ContentScreenProp} from '../types/RootStackProps';
import {formatNumber} from '../utils/format';
import WebView from 'react-native-webview';
import BottomButton from '../components/BottomButton';
import {
  IconAntDesign,
  IconEntypo,
  IconIonicons,
  IconMaterialCommunityIcons,
  IconMaterialIcons,
} from '../lib/Icon';
import {globalStyles} from '../lib/GlobalStyles';
import {Appbar, Searchbar} from 'react-native-paper';
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
    coordinate,
  } = route.params;
  const [aa, setAa] = useState(false);
  const HeaderComponent = ({state, navigation}: any) => {
    return (
      <>
        {state ? (
          <Appbar.Header style={{backgroundColor: 'white'}} elevated={true}>
            <Appbar.BackAction
              onPress={() => {
                navigation.goBack();
              }}
            />
          </Appbar.Header>
        ) : (
          <Appbar.Header
            style={{
              height: 40,
              backgroundColor: 'transparent',
            }}>
            <Appbar.BackAction
              color={'white'}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </Appbar.Header>
        )}
      </>
    );
  };
  // useEffect 내부에 조건문을 사용하면 안됨.
  useEffect(() => {
    const setHeaderOptions = () => {
      navigation.setOptions({
        headerTransparent: true,
        header: () => <HeaderComponent state={aa} navigation={navigation} />,
      });
    };
    setHeaderOptions();
  }, [aa]);

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
      title: title,
      coordinate: coordinate,
    });
  };
  const onPressReview = () => {
    navigation.push('Review');
  };
  const onPressMenuButton = () => {
    navigation.push('Menu', {title: title});
  };
  const onPressCallButton = () => {
    Linking.openURL(`tel:${'010-5555-8524'}`);
  };
  const onPressShareButton = () => {
    Share.share({message: 'SUCCESSED! Shared!!'});
  };
  const onScrollScreen = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    // console.log(e.nativeEvent.contentOffset.y);
    const scrollY = e.nativeEvent.contentOffset.y;
    const overImg = scale(160);
    // true에서 에러발생
    // return scrollY >= overImg ? setAa(true) : setAa(false);
  };
  interface FilterButtonProps {
    uri?: string;
    iconComponent?: any;
    iconName?: string;
    iconSize?: number;
    onPress?: () => void;
    title?: string;
  }
  const FilterButton = ({
    uri,
    iconComponent,
    iconName,
    iconSize,
    onPress,
    title,
  }: FilterButtonProps) => {
    const IconComponent = iconComponent;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.menuButton, {flex: 0.5}]}>
        {iconComponent && (
          <IconComponent
            name={iconName}
            size={iconSize}
            style={{marginRight: '1%'}}
          />
        )}
        {uri && (
          <Image
            source={{
              uri: uri,
              height: 20,
              width: 20,
            }}
            style={{marginRight: '1%'}}
          />
        )}
        <Text style={{fontSize: 13, color: 'black'}}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={[styles.layout]}>
        <View>
          <FlatList
            // 에러 발생함
            onScroll={onScrollScreen}
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
                    data={data}
                    imageHeight={scale(260)}
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
                    <Pressable style={[{marginTop: 4}]} onPress={onPressReview}>
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
                    {/* MenuButton */}
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                      }}>
                      <FilterButton
                        title="가게전화"
                        onPress={onPressCallButton}
                        iconComponent={IconMaterialCommunityIcons}
                        iconName="phone"
                        iconSize={14}
                      />
                      <FilterButton
                        title="메뉴"
                        onPress={onPressMenuButton}
                        uri="data:image/png;base64,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"
                      />
                      <FilterButton
                        title="공유"
                        onPress={onPressShareButton}
                        iconComponent={IconEntypo}
                        iconName="share"
                        iconSize={13}
                      />
                    </View>
                    {/* {desc} */}
                    <Text
                      style={{color: 'black', lineHeight: 18, fontSize: 14}}>
                      설명 설명설명설명. 설명설 명 설명설명 설명 설명 설명설명
                    </Text>
                  </View>
                  {/* ReviewImage */}
                  <View style={{paddingBottom: '3%'}}>
                    <ImageFlatList
                      data={reviewImageUri}
                      imageHeight={120}
                      imageWidth={120}
                      keyExtractor={(item: any) => item}
                      marginRight
                    />
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    paddingVertical: '5%',
                    paddingHorizontal: '5%',
                    rowGap: 10,
                  }}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>위치</Text>
                  <MapView coordinate={coordinate} />

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
          title="그룹 생성하기"
          star
          onPress={() => {
            navigation.push('GroupCreate', {imageUri: imageUri});
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
    marginVertical: '1%',
    flexDirection: 'row',
    borderColor: '#9a9a9a',
    // borderWidth: 0.4,
    // borderRadius: 4,
    // borderBottomWidth: 1,
    // borderTopWidth: 1,
  },

  headerContainer: {
    backgroundColor: 'white',
    paddingBottom: '5%',
    marginBottom: '3%',
  },
});

// 기존 웨이팅 방법은 번호,인원 수 입력후 카톡 알림
// - 수기 입력 귀찮음

// 시핀의 장점
// - 휴대폰 어플
// - 수기 작성 필요없음
// 웨이팅이 밀려있으면 대기인수 보여준다.
// 기존 방법은 테이블에 State를 보여주면서 알림 설정 후 테이블이 비었을때 알림이 오는 방법인데, 웨이팅이 없을 지방같은 곳은 괜찮지만 서울 같은경우 웨이팅이 많기 때문에
// - 예약이 돼있을경우엔 선착순 웨이팅
// - 테이블에 손님이 있을 경우엔 위와같이 웨이팅
// - 웨이팅 알림후 1분 초과시 다음 웨이팅 차례로 넘어감
