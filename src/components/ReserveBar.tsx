import react, {useState} from 'react';
import {GestureResponderEvent, Pressable, Text, View} from 'react-native';

import DatePicker from 'react-native-datepicker';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../types/RootStackProps';
import {IconMaterialIcons} from '../lib/Icon';
import {ReserveDateButton, ReserveTableButton} from './IconButtons';

type ReserveBarProps = {
  title: string | undefined;
};

export default function ReserveBar({title}: ReserveBarProps) {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View
      style={{
        marginHorizontal: '5%',
        backgroundColor: 'white',
        paddingBottom: '2%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          //   paddingVertical: '3%',
          // justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            fontWeight: 'bold',
            width: '60%',
            // paddingBottom: '2%',
            // borderWidth: 1,
          }}>
          {title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            // borderWidth: 1,
            width: '40%',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <ReserveTableButton />
          <ReserveDateButton />
        </View>
      </View>
      {/* <View style={{height: '40%'}}> */}

      {/* </View> */}
    </View>
  );
}
