import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {
  IconAntDesign,
  IconEntypo,
  IconMaterialCommunityIcons,
} from '../lib/Icon';
export default function QuantityItem() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '1%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          //   width: '60%',
          // height: '100%',
        }}>
        <IconEntypo name="dot-single" size={18} color="#9a9a9a" />
        <Text
          style={{
            color: '#9a9a9a',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          가격 :{/* {mainDishes.price} */}19,900원
        </Text>
      </View>

      <View
        style={{
          //   justifyContent: 'flex-end',
          //   alignItems: 'flex-start',
          //   width: '80%',
          marginTop: '5%',
        }}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#f0f0f0',
            borderRadius: 6,
            justifyContent: 'space-evenly',
          }}>
          <Pressable
            //   onPress={() => handleDecrement(index)}
            style={{
              paddingVertical: '10%',
              paddingLeft: '6%',
              // borderWidth: 1,
            }}>
            <IconAntDesign
              name="minus"
              size={16}
              color="black"
              style={{fontWeight: 'bold'}}
            />
          </Pressable>
          <View style={{width: 30}}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                // borderWidth: 1,
                // width: '100%',
                textAlign: 'center',
              }}>
              {/* {quantity[index]} */}1
            </Text>
          </View>
          <Pressable
            style={{
              paddingVertical: '10%',
              paddingRight: '6%',
            }}
            onPress={() => {
              // handleIncrement(index);
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
  );
}
