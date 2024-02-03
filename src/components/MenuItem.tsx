import React from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {scale} from '../utils/scaling';
import ImageCard from './ImageCard';

type MenuItemType = {
  id: number | boolean | any;
  name: string;
  imageUri: string;
  price: string;
};

interface MenuItemProps {
  menuItem: MenuItemType;
  onPress: (id: string) => void;
  selected: number;
  onPressContent: () => void;
}

export default function MenuItem({
  menuItem,
  onPress,
  selected,
  onPressContent,
}: MenuItemProps) {
  const styles = StyleSheet.create({
    layout: {
      marginBottom: 1,
    },
    container: {
      paddingHorizontal: '5%',
      flexDirection: 'row',
      alignItems: 'center',
      height: 100,
    },

    imageStyle: {
      width: '30%',
      borderRadius: 0,
    },
    layoutStyle: {
      backgroundColor: menuItem.id === selected ? 'red' : 'white',
      flexDirection: 'row',

      borderColor: '#9a9a9a',
    },
    inlineContainer: {
      width: '70%',
      paddingHorizontal: 6,
      paddingVertical: 6,
      justifyContent: 'space-between',
    },
    inlineName: {color: 'black', fontWeight: 'bold', fontSize: 15},
    inlinePrice: {
      color: 'black',
      fontSize: 14,
      fontWeight: '500',
      textAlign: 'right',
    },
  });
  return (
    <TouchableOpacity style={[styles.layout]} onPress={onPressContent}>
      <ImageBackground
        source={{
          uri: menuItem.imageUri,
          height: 0,
          width: 0,
        }}
        blurRadius={20}
        resizeMode="cover">
        <View style={[styles.container]}>
          <View style={{flex: 0.28}}>
            <ImageCard
              uri={menuItem.imageUri}
              height={80}
              width={80}
              imageStyle={{borderRadius: 6}}
            />
          </View>
          <View style={{flex: 0.72}}>
            <Text style={{color: 'white'}}>{menuItem.name}</Text>
            <Text style={{color: 'white'}}></Text>
            <Text style={{color: 'white'}}></Text>

            <Text style={{color: 'white', textAlign: 'right'}}>
              {menuItem.price}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
