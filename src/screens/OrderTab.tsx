import React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {
  Animated,
  FlatList,
  Image,
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import BasketModal from '../components/BasketModal';
import FilterItem from '../components/FilterItem';
import {MinusButton, PlusButton, SubmitButton} from '../components/IconButtons';
import ImageCard from '../components/ImageCard';
import PressableListItem from '../components/PressableListItem';
import {globalStyles} from '../lib/GlobalStyles';
import {
  IconFeather,
  IconIonicons,
  IconMaterialCommunityIcons,
  IconMaterialIcons,
} from '../lib/Icon';
import {Menu} from '../lib/Menu';
import {MenuScreenProp, OrderTabProp} from '../types/RootStackProps';

import {moderateScale, scale, verticalScale} from '../utils/scaling';
export default function OrderTab({route, navigation}: OrderTabProp) {
  useEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false,
      headerRight: () => (
        <Pressable
          onPress={() => {
            navigation.push('OrderedList');
          }}
          style={{
            marginRight: '7%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <IconIonicons name="receipt-outline" size={24} />
        </Pressable>
      ),
    });
  }, [navigation]);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);
  const [menu, setMenu] = useState<boolean>(false);
  const [modal, setModal] = useState(false);

  const handlePress = (index: any) => {
    setSelectedButtonIndex(index === selectedButtonIndex ? -1 : index);
  };

  const renderMenuItems = (items: any[]) => {
    return items.map((menuItem: any) => (
      <Pressable
        key={menuItem.id}
        onPress={() => {
          handlePress(menuItem.id);
        }}
        style={({pressed}) => [
          {
            width: '48%',
            // borderWidth: 0.4,
            // borderBottomWidth: 0.4,
            borderColor: '#9a9a9a',
            margin: '1%',
            // borderRadius: 4,
            backgroundColor:
              menuItem.id === selectedButtonIndex ? 'red' : 'white',
            // height: 400,
            // zIndex: 100,
            // marginBottom: '1%',
            // marginHorizontal: '3%',
            // justifyContent: 'center',
            // alignItems: 'center',
          },
        ]}>
        <ImageCard
          uri={menuItem.imageUri}
          height={scale(150)}
          imageStyle={{width: '100%', borderRadius: 10}}
          layoutStyle={{
            alignItems: 'center',
            rowGap: 4,
            flex: 1,
            marginBottom: '3%',

            // borderWidth: 1,
          }}
          inline={
            <>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 16,
                  flex: 1,
                }}>
                {menuItem.name}
              </Text>
              {/* <Text
                style={{
                  color: '#5a5a5a',
                  fontSize: 12,
                  // borderWidth: 1,
                  width: '100%',
                  height: scale(50),
                  textAlign: 'center',
                }}>
                {menuItem.desc}
              </Text> */}
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  fontWeight: '500',
                  width: '100%',
                  textAlign: 'center',
                  // marginBottom: '3%',
                  // borderWidth: 1,
                }}>
                {menuItem.price}
              </Text>
            </>
          }
        />
      </Pressable>
    ));
  };

  const renderItem = useCallback(
    ({item}: any) => (
      <Pressable
        key={item.id}
        style={{
          // marginHorizontal: '3%',
          marginBottom: '3%',
          // paddingBottom: '3%',
          // borderBottomWidth: 2,
          // borderColor: '#cacaca',
          // marginHorizontal: '3%',
          backgroundColor: 'white',
        }}>
        <FilterItem
          title={item.category}
          style={[globalStyles.fontBold16]}
          borderRadius={false}
          elevation={false}
          borderWidth={false}
          // onPress={() => {}}
        />
        <View
          style={{
            width: '100%',
            flexWrap: 'wrap',
            flexDirection: 'row',
            marginBottom: '1%',
          }}>
          {item?.mainDishes && renderMenuItems(item.mainDishes)}
          {item?.sideDishes && renderMenuItems(item.sideDishes)}
          {item?.liquor && renderMenuItems(item.liquor)}
          {item?.drink && renderMenuItems(item.drink)}
          {item?.etc && renderMenuItems(item.etc)}
        </View>
      </Pressable>
    ),
    [renderMenuItems],
  );
  // console.log(menu.category);

  // const animatedValue = new Animated.Value(0);
  // Animated.timing(animatedValue, {
  //   toValue: 1,
  //   duration: 2000, // 애니메이션 지속 시간 (1초)
  //   useNativeDriver: false, // 네이티브 드라이버 사용 여부 (애니메이션 성능 향상)
  // }).start();
  // const animatedStyle = {
  //   opacity: animatedValue,
  //   transform: [
  //     {
  //       translateY: animatedValue.interpolate({
  //         inputRange: [0, 100],
  //         outputRange: [0, 100], // 시작과 끝 값 사이를 보간
  //       }),
  //     },
  //   ],
  // };

  return (
    <>
      {/* <CollapsibleHeaderV1 height={100} /> */}
      <View style={[{backgroundColor: 'white'}]}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            // marginHorizontal: '3%',
          }}
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            // marginHorizontal: '3%',
            // marginTop: '1%',
            // paddingTop: '1%',
          }}>
          {Menu.map((item: any) => (
            <FilterItem
              key={item.id}
              title={item.category}
              pressedColor
              pressableStyle={{
                marginLeft: item.id === 0 ? 16 : 4, // 첫 번째 아이템에만 왼쪽 마진
                marginRight: item.id === Menu.length - 1 ? 16 : 4, // 마지막 아이템에만 오른쪽 마진
              }}
              borderRadius
            />
          ))}
        </ScrollView>
      </View>

      <View style={{backgroundColor: 'white'}}>
        <>
          <FlatList
            data={Menu}
            renderItem={renderItem}
            keyExtractor={(item: any) => item.id}
            style={{marginHorizontal: '3%', marginBottom: '22%'}}
            ListHeaderComponent={
              <View style={{backgroundColor: 'white'}}>
                <View
                  style={[
                    globalStyles.marginHorizontal5,
                    {
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    },
                  ]}></View>
              </View>
            }
          />
        </>
      </View>
      <BasketModal
        visible={modal}
        onPressBottomButton={() => {
          setModal(false);
          navigation.navigate('CompletedOrder');
        }}
        onRequestClose={() => {
          setModal(false);
        }}
        onPressBG={() => {
          setModal(false);
        }}
        ListContents={
          <>
            <PressableListItem
              layoutStyle={{borderBottomWidth: 0.4, borderColor: '#9a9a9a'}}
              containerStyle={{
                paddingVertical: '5%',
                marginHorizontal: '5%',
              }}
              titleStyle={[globalStyles.fontBold18]}
              title={'오꼬노미야끼'}
              titleContent={
                <View
                  style={[
                    {
                      flexDirection: 'row',
                      alignItems: 'center',
                      // borderWidth: 1,
                      columnGap: 12,
                    },
                  ]}>
                  <MinusButton
                    style={{}}
                    hitSlop={6}
                    onPress={() => {
                      console.log('Minuse');
                    }}
                  />
                  <Text>1</Text>
                  <PlusButton
                    style={{}}
                    hitSlop={6}
                    onPress={() => {
                      console.log('Plus');
                    }}
                  />
                </View>
              }
            />
            <PressableListItem
              layoutStyle={{borderBottomWidth: 0.4, borderColor: '#9a9a9a'}}
              containerStyle={{
                paddingVertical: '5%',
                marginHorizontal: '5%',
                justifyContent: 'center',
                // flexDirection:'row'
                // alignItems: 'center',
              }}
              titleStyle={[globalStyles.fontBold18]}
              title={'해물라면'}
              titleContent={
                <View
                  style={[
                    {
                      flexDirection: 'row',
                      alignItems: 'center',
                      // borderWidth: 1,
                      columnGap: 12,
                    },
                  ]}>
                  <MinusButton
                    style={{}}
                    hitSlop={6}
                    onPress={() => {
                      console.log('Minuse');
                    }}
                  />
                  <Text>1</Text>
                  <PlusButton
                    style={{}}
                    hitSlop={6}
                    onPress={() => {
                      console.log('Plus');
                    }}
                  />
                </View>
              }
            />
          </>
        }
      />
      <Pressable
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          width: '100%',
          // height: 70,
          // justifyContent: 'center',
          alignItems: 'center',
          borderTopStartRadius: 26,
          borderTopEndRadius: 26,
          borderTopWidth: 0.4,
          borderLeftWidth: 0.4,
          borderRightWidth: 0.4,
          borderColor: '#cacaca',
          paddingVertical: '1%',
          // elevation: 100,
        }}
        onPress={() => {
          setModal(true);
        }}>
        <IconMaterialIcons name="arrow-drop-up" size={30} color="#3a3a3a" />
        {/* <Text style={[globalStyles.fontBold18]}>장바구니</Text> */}
      </Pressable>
    </>
  );
}

{
  /* 
       {menu ? (
          <>
            <Pressable
              style={[
                {
                  paddingVertical: '5%',
                  backgroundColor: 'white',
                  marginHorizontal: '5%',
                  borderRadius: 10,
                  elevation: 2,
                  marginTop: '3%',
                  marginBottom: 10,
                },
              ]}
              onPress={() => {
                setMenu(false);
              }}>
              <View
                style={[
                  {
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginHorizontal: '5%',
                    alignItems: 'center',
                    // paddingVertical: '2%',
                  },
                ]}>
                <Text style={[globalStyles.fontNormal18, {color: '#3a3a3a'}]}>
                  메뉴
                </Text>
                <IconMaterialIcons
                  name="arrow-drop-up"
                  size={30}
                  color="#3a3a3a"
                />
              </View>
            </Pressable>
            <FlatList
              data={Menu}
              renderItem={renderItem}
              keyExtractor={(item: any) => item.id}
              style={{marginHorizontal: '3%'}}
              ListHeaderComponent={
                <View style={{backgroundColor: 'white'}}>
                  <View
                    style={[
                      globalStyles.marginHorizontal5,
                      {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      },
                    ]}></View>
                </View>
              }
            />
          </>
        ) : (
          <Pressable
            style={[
              {
                paddingVertical: '5%',
                backgroundColor: 'white',
                marginHorizontal: '5%',
                borderRadius: 10,
                elevation: 2,
                marginTop: '3%',
                marginBottom: '3%',
                // paddingBottom: 10,
              },
            ]}
            onPress={() => {
              setMenu(true);
            }}>
            <View
              style={[
                {
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginHorizontal: '5%',
                  alignItems: 'center',
                  // paddingVertical: '2%',
                },
              ]}>
              <Text style={[globalStyles.fontNormal18, {color: '#3a3a3a'}]}>
                메뉴
              </Text>
              <IconMaterialIcons
                name="arrow-drop-down"
                size={30}
                color="#3a3a3a"
              />
            </View>
          </Pressable>
        )}
*/
}
