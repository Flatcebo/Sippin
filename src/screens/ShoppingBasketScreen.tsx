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
import {globalStyles} from '../lib/GlobalStyles';
import PressableListItem from '../components/PressableListItem';
import {MinusButton, PlusButton} from '../components/IconButtons';
import {StyleSheet} from 'react-native';
import BottomButton from '../components/BottomButton';

export default function ShoppingBasketScreen() {
  // 가게 정보, 담은 메뉴, 수량, 메뉴이름, 가격, 금액 및 주문버튼,
  const navigation = useNavigation<RootStackNavigationProp>();
  const [totalAmount, setTotalAmount] = useState(0);
  const [quantity, setQuantity] = useState(
    Menu.flatMap((item: any) => {
      return item?.mainDishes?.map((mainDishes: any) => quantity || []) || [];
    }),
  );
  const handleIncrement = (index: number) => {
    setQuantity(prevItems =>
      prevItems.map((item, i) => (i === index ? item + 1 : item)),
    );
  };

  const handleDecrement = (index: number) => {
    setQuantity(prevItems =>
      prevItems.map((item, i) => (i === index && item > 1 ? item - 1 : item)),
    );
  };

  const styles = StyleSheet.create({
    layout: {height: '100%', backgroundColor: 'white'},
    container: {
      paddingVertical: '5%',
      marginHorizontal: '5%',
    },
    contentlayout: {borderBottomWidth: 0.4, borderColor: '#9a9a9a'},
    contentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 12,
    },
  });
  return (
    <>
      <View style={{backgroundColor: 'white'}}></View>
      <ScrollView style={[styles.layout]}>
        <PressableListItem
          layoutStyle={[styles.contentlayout]}
          containerStyle={[styles.container]}
          titleStyle={[globalStyles.fontBold16]}
          title={'오꼬노미야끼'}
          titleContent={
            <View style={[styles.contentContainer]}>
              <MinusButton
                style={{}}
                hitSlop={6}
                onPress={() => {
                  handleDecrement(1);
                }}
              />
              <Text>{quantity}</Text>
              <PlusButton
                style={{}}
                hitSlop={6}
                onPress={() => {
                  handleIncrement(1);
                }}
              />
            </View>
          }
        />
      </ScrollView>
      <BottomButton
        title="예약 완료하기"
        onPress={() => {
          navigation.reset({
            routes: [{name: 'MainTab'}, {name: 'ReserveSuccess'}],
          });
        }}
      />
      {/* <Pressable
        // onPress={() => {
        //   navigation.push('Payment');
        // }}
        style={{
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
      </Pressable> */}
    </>
  );
}
