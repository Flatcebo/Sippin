import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  Text,
  ViewStyle,
} from 'react-native';
import {
  IconAntDesign,
  IconEntypo,
  IconFeather,
  IconMaterialCommunityIcons,
  IconMaterialIcons,
} from '../lib/Icon';
import {RootStackNavigationProp} from '../types/RootStackProps';

interface ReserveTableButtonProps {
  title: string;
}
export function ReserveTableButton({title}: ReserveTableButtonProps) {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <Pressable
      onPress={() => {
        navigation.push('ReserveTable', {});
      }}
      style={({pressed}) => [
        {
          // borderWidth: 0.4,

          // borderColor: '#9a9a9a',
          width: 60,
          // borderRadius: 10,
          paddingVertical: '5%',
          backgroundColor: pressed ? '#eaeaea' : 'white',
          // paddingHorizontal: '12%',
          // paddingVertical: '8%',
          // borderRadius: 100,
        },
      ]}>
      {/* <IconMaterialIcons name="table-bar" size={24} color="#333" style={{}} /> */}
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          fontWeight: '500',
        }}>
        {title}
      </Text>
    </Pressable>
  );
}

interface ReserveDateButtonProps {
  date?: string;
  title: string;
}

export function ReserveDateButton({title}: ReserveDateButtonProps) {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <Pressable
      onPress={() => {
        navigation.push('ReserveDate', {});
      }}
      style={({pressed}) => [
        {
          // borderWidth: 0.4,
          backgroundColor: pressed ? '#eaeaea' : 'white',
          borderColor: '#cacaca',
          width: 120,
          // borderRadius: 10,
          paddingVertical: '5%',
          // borderLeftWidth: 1.4,
          // paddingHorizontal: '4%',
          // marginLeft: 16,
          // borderRadius: 100,
          // zIndex: 100,
          // right: '0%',
          // position: 'absolute',
        },
      ]}>
      {/* <IconEntypo name="calendar" size={22} color="#333" style={{}} /> */}
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          fontWeight: '500',
        }}>
        {title}
      </Text>
      {/* <Text
        style={{
          color: 'black',
          fontSize: 16,
          fontWeight: '500',
        }}>
        
      </Text> */}
    </Pressable>
  );
}

interface SubmitButtonProps {
  onPress?: () => void;
}

export function SubmitButton({onPress}: SubmitButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <IconFeather name="check" size={22} />
    </Pressable>
  );
}

interface CloseButtonProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  color?: string;
}

export function CloseButton({onPress, style, color}: CloseButtonProps) {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <Pressable
      onPress={() => {
        navigation.goBack();
      }}>
      <IconMaterialCommunityIcons
        name="close"
        size={26}
        color={color}
        style={style}
      />
    </Pressable>
  );
}

interface HomeButtonProps {
  onPress?: () => void;
}

export function HomeButton({onPress}: HomeButtonProps) {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Home');
      }}
      style={{alignItems: 'center', justifyContent: 'center'}}>
      <IconMaterialCommunityIcons name="home-outline" size={26} />
    </Pressable>
  );
}

interface FoodButtonProps {
  onPress?: () => void;
}

export function FoodButton({onPress}: FoodButtonProps) {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <Pressable
      onPress={() => {
        navigation.push('Menu', {title: ''});
      }}>
      <IconMaterialCommunityIcons name="food-outline" size={24} />
    </Pressable>
  );
}

interface PlusButtonProps {
  style?:
    | StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
  onPress?: () => void;
  hitSlop?: number;
}

export function PlusButton({style, onPress, hitSlop}: PlusButtonProps) {
  return (
    <Pressable style={style} onPress={onPress} hitSlop={hitSlop}>
      <IconAntDesign
        name="plus"
        size={18}
        color="black"
        style={{fontWeight: 'bold'}}
      />
    </Pressable>
  );
}

interface MinusButtonProps {
  style?:
    | StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
  onPress?: () => void;
  hitSlop?: number;
}
export function MinusButton({style, onPress, hitSlop}: MinusButtonProps) {
  return (
    <Pressable onPress={onPress} style={style} hitSlop={hitSlop}>
      <IconAntDesign
        name="minus"
        size={18}
        color="black"
        style={{fontWeight: 'bold'}}
      />
    </Pressable>
  );
}

export function CustomerServiceButton() {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('CustomerService', {});
      }}>
      <IconAntDesign name="customerservice" size={24} />
    </Pressable>
  );
}

interface CheckButtonProps {
  onPress?: () => void;
}

export function CheckButton({onPress}: CheckButtonProps) {
  return (
    <Pressable onPress={onPress} hitSlop={10}>
      <Text>확인</Text>
    </Pressable>
  );
}

export function ShoppingBasketButton() {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <Pressable
      onPress={() => {
        navigation.push('ShoppingBasket');
      }}>
      <IconFeather name="shopping-cart" size={20} color="black" />
    </Pressable>
  );
}
