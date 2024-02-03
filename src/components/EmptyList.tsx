import React from 'react';
import {Text, View} from 'react-native';
interface EmptyListProp {
  desc: string;
}
export default function EmptyList({desc}: EmptyListProp) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{paddingVertical: 30}}>{desc}</Text>
    </View>
  );
}
