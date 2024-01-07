import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {IconAntDesign} from '../lib/Icon';
import {Menu} from '../lib/Menu';
export default function QuantityCounter({index}: any) {
  const [totalAmount, setTotalAmount] = useState(0);
  const [quantity, setQuantity] = useState(
    Menu.flatMap((item: any) => {
      return (
        item?.mainDishes?.map((mainDishes: any) => mainDishes.quantity || []) ||
        []
      );
    }),
  );
  const handleIncrement = (index: number) => {
    setQuantity((prevItems: any) =>
      prevItems.map((item: any, i: any) => (i === index ? item + 1 : item)),
    );
  };

  const handleDecrement = (index: number) => {
    setQuantity(prevItems =>
      prevItems.map((item, i) => (i === index && item > 1 ? item - 1 : item)),
    );
  };
  return (
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
  );
}
