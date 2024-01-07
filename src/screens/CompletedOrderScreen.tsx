import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '../lib/GlobalStyles';
import {CompletedOrderScreenProp} from '../types/RootStackProps';
export default function CompletedOrderScreen({
  navigation,
}: CompletedOrderScreenProp) {
  return (
    <View
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        },
      ]}>
      <Text style={{fontSize: 24}}>주문이 완료되었습니다!</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.pop();
        }}
        style={{
          padding: '4%',
          paddingHorizontal: '8%',
          backgroundColor: '#6ad1b9b3',
          borderRadius: 10,
          marginTop: '5%',
        }}>
        <Text style={[globalStyles.fontBold16]}>확인</Text>
      </TouchableOpacity>
    </View>
  );
}
