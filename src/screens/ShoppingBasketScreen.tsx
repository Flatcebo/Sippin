import React, {useState} from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';

import {
  IconAntDesign,
  IconEntypo,
  IconMaterialCommunityIcons,
  IconMaterialIcons,
} from '../lib/Icon';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../types/RootStackProps';
import {Menu} from '../lib/Menu';

export default function ShoppingBasketScreen() {
  // 가게 정보, 담은 메뉴, 수량, 메뉴이름, 가격, 금액 및 주문버튼,
  const navigation = useNavigation<RootStackNavigationProp>();
  const [totalAmount, setTotalAmount] = useState(0);
  const [quantity, setQuantity] = useState(
    Menu.flatMap((item: any) => {
      return (
        item?.mainDishes?.map((mainDishes: any) => mainDishes.quantity || []) ||
        []
      );
    }),
  );

  //   const handleIncrement = (id: number) => {
  //     setQuantity(prevItems =>
  //       prevItems.map((item: any, index: any) =>
  //         index === id ? item + 1 : item,
  //       );

  //       setTotalAmount((prevTotal) => {
  //         const price = Menu[index]?.mainDishes[index]?.price || 0;
  //         return prevTotal + price;
  //       });

  //     );
  //   };

  //   const handleDecrement = (id: number) => {
  //     setQuantity(prevItems =>
  //       prevItems.map((item: any, index: number) =>
  //         index === id && item > 1 ? item - 1 : item,
  //       ),
  //     );
  //   };
  const handleIncrement = (index: number) => {
    setQuantity(prevItems =>
      prevItems.map((item, i) => (i === index ? item + 1 : item)),
    );

    // setTotalAmount((prevTotal: any) => {
    //   const menu = Menu[index];
    //   const mainDish = menu?.mainDishes?.[index];

    //   if (menu && mainDish) {
    //     return prevTotal + mainDish.price;
    //   }

    //   return prevTotal;
    // });
  };

  const handleDecrement = (index: number) => {
    setQuantity(prevItems =>
      prevItems.map((item, i) => (i === index && item > 1 ? item - 1 : item)),
    );

    // setTotalAmount((prevTotal: any) => {
    //   const menu = Menu[index];
    //   const mainDish: any = menu?.mainDishes?.[index];

    //   if (menu && mainDish) {
    //     return Math.max(prevTotal - mainDish.price, 0);
    //   }

    //   return prevTotal;
    // });
  };

  //   console.log(date);

  return (
    <>
      <View style={{backgroundColor: 'white'}}>
        {/* <CollapsibleHeaderV1
          title="장바구니"
          reserveBar
          reserveBarTitle="params"
          backVisible
        /> */}
      </View>
      <ScrollView style={{height: '100%', backgroundColor: 'white'}}>
        <Text
          style={{
            color: 'black',
            paddingHorizontal: '5%',
            fontWeight: '500',
            fontSize: 15,
          }}>
          Table.number
        </Text>
        {/* <View style={{backgroundColor: 'white'}}> */}
        {/* <Calendar
            style={{}}
            monthFormat={'MM월'}
            // current={'2023-12-20'}

            minDate={minDate.toString()}
            maxDate={maxDate.toString()}
          /> */}
        {Menu.map((item: any) => (
          <View key={item.id}>
            {/* <Text style={{color: 'black'}}>{item.sideDishes}</Text> */}
            {item?.mainDishes?.map((mainDishes: any, index: any) => (
              <View
                key={mainDishes.id}
                style={{
                  borderTopWidth: 0.2,
                  borderColor: '#9a9a9a',
                  flexDirection: 'row',
                  paddingHorizontal: '5%',
                  paddingTop: '5%',
                  paddingBottom: '3%',
                }}>
                <Image
                  source={{
                    uri: mainDishes.imageUri,
                    height: 100,
                    width: 100,
                  }}
                  style={{borderRadius: 10}}
                />
                <View style={{width: '70%'}}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '600',
                      fontSize: 16,
                      paddingLeft: '5%',
                    }}>
                    {mainDishes.name}
                  </Text>

                  {/* <Text style={{color: 'black'}}>{mainDishes.quantity}</Text> */}
                  <View style={{flexDirection: 'row', height: 85}}>
                    <View
                      style={{
                        flexDirection: 'row',

                        width: '60%',
                        // height: '100%',
                      }}>
                      <IconEntypo name="dot-single" size={18} color="#9a9a9a" />
                      <Text
                        style={{
                          color: '#9a9a9a',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        가격 : {mainDishes.price}
                      </Text>
                    </View>

                    <View
                      style={{
                        justifyContent: 'flex-end',
                        alignItems: 'flex-start',
                        //   width: '80%',
                      }}>
                      <View style={{width: '70%', height: '80%'}}>
                        {/* <Text style={{color: 'black', textAlign: 'right'}}>
                            X
                        </Text> */}

                        <IconMaterialCommunityIcons
                          name="close"
                          size={20}
                          color={'black'}
                          style={{textAlign: 'right'}}
                        />
                      </View>
                      <View
                        style={{
                          // paddingHorizontal: '10%',

                          alignItems: 'center',
                          flexDirection: 'row',
                          backgroundColor: '#f0f0f0',
                          borderRadius: 100,

                          //   justifyContent: 'space-evenly',
                          //   alignItems: 'center',
                          //   borderRadius: 100,
                        }}>
                        <Pressable
                          onPress={() => handleDecrement(index)}
                          style={{
                            paddingVertical: '4%',
                            paddingHorizontal: '6%',
                            // borderWidth: 1,
                          }}>
                          <IconAntDesign
                            name="minus"
                            size={16}
                            color="black"
                            style={{fontWeight: 'bold'}}
                          />
                        </Pressable>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 16,
                            //   borderWidth: 1,
                            width: '20%',
                            textAlign: 'center',
                          }}>
                          {quantity[index]}
                        </Text>
                        <Pressable
                          style={{
                            paddingVertical: '10%',
                            paddingHorizontal: '6%',
                          }}
                          onPress={() => {
                            handleIncrement(index);
                          }}>
                          <IconAntDesign
                            name="plus"
                            size={16}
                            color="black"
                            style={{fontWeight: 'bold'}}
                          />
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            ))}

            {/* side */}

            {item?.sideDishes?.map((sideDishes: any, index: number) => (
              <View
                key={index}
                style={{
                  borderTopWidth: 0.2,
                  borderColor: '#9a9a9a',
                  flexDirection: 'row',
                  paddingHorizontal: '5%',
                  paddingTop: '5%',
                  paddingBottom: '3%',
                }}>
                <Image
                  source={{
                    uri: sideDishes.imageUri,
                    height: 100,
                    width: 100,
                  }}
                  style={{borderRadius: 10}}
                />
                <View style={{width: '70%'}}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '600',
                      fontSize: 16,
                      paddingLeft: '5%',
                    }}>
                    {sideDishes.name}
                  </Text>

                  {/* <Text style={{color: 'black'}}>{sideDishes.quantity}</Text> */}
                  <View style={{flexDirection: 'row', height: 85}}>
                    <View
                      style={{
                        flexDirection: 'row',

                        width: '60%',
                        // height: '100%',
                      }}>
                      <IconEntypo name="dot-single" size={18} color="#9a9a9a" />
                      <Text
                        style={{
                          color: '#9a9a9a',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        가격 : {sideDishes.price}
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'flex-end',
                        alignItems: 'flex-start',
                        // width: '80%',
                      }}>
                      <View
                        style={{
                          // paddingHorizontal: '10%',

                          alignItems: 'center',
                          flexDirection: 'row',
                          backgroundColor: '#f0f0f0',
                          borderRadius: 100,

                          //   justifyContent: 'space-evenly',
                          //   alignItems: 'center',
                          //   borderRadius: 100,
                        }}>
                        <Pressable
                          onPress={() => {
                            handleDecrement(index);
                          }}
                          style={{
                            padding: '10%',
                            // borderWidth: 1,
                          }}>
                          <IconAntDesign
                            name="minus"
                            size={16}
                            color="black"
                            style={{fontWeight: 'bold'}}
                          />
                        </Pressable>
                        <Text style={{color: 'black', fontSize: 16}}>
                          {quantity[index]}
                        </Text>
                        <Pressable
                          style={{padding: '10%'}}
                          onPress={() => {
                            handleIncrement(index);
                          }}>
                          <IconAntDesign
                            name="plus"
                            size={16}
                            color="black"
                            style={{fontWeight: 'bold'}}
                          />
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}
        {/* </View> */}
      </ScrollView>
      <Pressable
        // onPress={() => {
        //   navigation.push('Payment');
        // }}
        style={{
          //   position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '9%',
          backgroundColor: '#d5f780',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'black', fontWeight: '500', fontSize: 16}}>
          총 {totalAmount} 원 / 주문하기
        </Text>
      </Pressable>
    </>
  );
}
