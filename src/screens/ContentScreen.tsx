import react, {useEffect} from 'react';

import {Dimensions, FlatList, Pressable, Text, View} from 'react-native';
import ImageFlatList from '../components/ImageFlatList';

import {keyExtractor} from '../lib/keyExtractor';
import {moderateScale, scale, verticalScale} from '../utils/scaling';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';

import {ContentScreenProp} from '../types/RootStackProps';
import {formatNumber} from '../utils/format';
import WebView from 'react-native-webview';
import BottomButton from '../components/BottomButton';

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

  // useEffect(() => {
  //   navigation.setOptions({
  //     title: title,
  //     headerRight: () => <HomeButton />,
  //   });
  // }, [navigation]);
  // const {params} = useRoute<ContentScreenRouteProp>();

  // const menuArray = new Array(menu).map((item: any) => ({
  //   mainDishes: menu[0].mainDishes,
  //   sideDishes: menu[1].sideDishes,
  // }));
  // console.log(menuArray.map((item: any) => item.sideDishes));

  const data = [
    {
      id,
      imageUri,
      title,
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
      <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
        {/* <CollapsibleHeaderV1
          title="Content"
          // height={50}
          backVisible
          createChat
          createChatOnPress={() => {
            navigation.push('CreateChat', {title: title});
          }}
        /> */}
        <FlatList
          data={undefined}
          renderItem={undefined}
          keyExtractor={keyExtractor}
          scrollEventThrottle={16}
          ListHeaderComponent={
            <>
              <ImageFlatList
                imageHeight={verticalScale(250)}
                imageWidth={Dimensions.get('window').width}
                data={data}
                keyExtractor={true}
              />
              <View style={{marginHorizontal: '3%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: '3%',
                  }}>
                  <View style={{width: '70%', rowGap: 2}}>
                    <Text
                      style={{
                        fontSize: 20,
                        textAlign: 'left',
                        color: 'black',
                        fontWeight: '700',
                      }}>
                      {title}
                      {/* Title */}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        textAlign: 'left',
                        color: '#5a5a5a',
                      }}>
                      {address}
                      {/* address */}
                    </Text>
                    <Text
                      style={{
                        color: '#571d1d',
                        fontSize: 14,
                        fontWeight: '600',
                      }}>
                      {category}
                      {/* category */}
                    </Text>
                  </View>
                  <View
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
                        {/* 99 */}
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
                        {/* 99 */}
                      </Text>
                    </View>
                  </View>
                </View>

                {/* ReviewImage */}
                <View
                  style={{
                    // borderWidth: 1,
                    // width: '94%',
                    flexDirection: 'row',
                    // marginBottom: '3%',
                  }}>
                  {/* <ImageFlatList
                  data={menuImageUri.map((item: any) => item)}
                  imageHeight={150}
                  imageWidth={150}
                  keyExtractor={(item: any) => item}
                /> */}
                  {/* {reviewImageUri?.map((item: any) => (
                    <View key={item.id}>
                      <Image
                        source={{
                          uri: item.imageUri,
                          width: moderateScale(150),
                          height: verticalScale(150),
                        }}
                        style={{}}
                      />
                    </View>
                  ))} */}
                </View>
                {/* MenuButton */}
                <Pressable
                  onPress={() => {
                    navigation.push('Menu', {title: title});
                  }}
                  style={({pressed}) => [
                    {
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '3%',
                      // height: '5%',
                      paddingVertical: '3%',
                      borderWidth: 0.4,
                      borderColor: '#9a9a9a',
                      backgroundColor: pressed ? '#eaeaea' : 'white',
                      borderRadius: 4,
                    },
                  ]}
                  // onPress={onPressPushMenu}
                >
                  <Text style={{fontSize: 18, color: 'black'}}>메뉴 보기</Text>
                </Pressable>
                <View
                  style={{
                    height: 180,
                    borderWidth: 2,
                    borderRadius: 4,
                    borderColor: '#eaeaea',
                  }}>
                  <WebView
                    style={{flex: 1, backgroundColor: 'white'}}
                    // javaScriptEnabled={true}
                    originWhitelist={['*']}
                    //   onMessage={handleWebViewMessage}
                    source={{
                      //   uri: 'https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=4c1xyd4it7',
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
                  {/* <Text style={{color: 'black', lineHeight: 18, fontSize: 14}}>
                    {menu?.[0]}
                  </Text> */}
                </View>
              </View>

              {/* 추천Image */}
              <View
                style={{
                  // borderWidth: 1,
                  // width: '94%',
                  marginBottom: '20%',
                  // flexDirection: 'row',
                }}>
                {/* <ImageFlatList
                  data={menuImageUri.map((item: any) => item)}
                  imageHeight={150}
                  imageWidth={150}
                  keyExtractor={(item: any) => item}
                /> */}
                <Text>추천 업체</Text>
                <View style={{flexDirection: 'row'}}>
                  {/* {reviewImageUri?.map((item: any) => (
                    <View key={item.id}>
                      <Image
                        source={{
                          uri: item.imageUri,
                          width: moderateScale(150),
                          height: verticalScale(150),
                        }}
                        style={{}}
                      />
                    </View>
                  ))} */}
                </View>
              </View>
              {/* <Button title="예약하기" /> */}
            </>
          }
        />

        <BottomButton
          title="예약하러 가기"
          onPress={() => {
            navigation.push('ReserveDate', {title: title});
          }}
        />
      </View>
    </>
  );
}

// const styles = StyleSheet.create({
//     basic
// })

// ContentScreen.options = ({route}: any) => ({
//   title: 'lll',
//   animation: 'simple_push',
// });
