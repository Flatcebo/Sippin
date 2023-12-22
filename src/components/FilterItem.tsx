import React from 'react';
import {Pressable, Text} from 'react-native';
import {globalStyles} from '../lib/GlobalStyles';
interface FilterItemProps {
  title?: String;
  marginLeft?: boolean;
  marginRight?: boolean;
}
export default function FilterItem({
  title,
  marginLeft,
  marginRight,
  ...rest
}: FilterItemProps) {
  return (
    <Pressable
      {...rest}
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
          width: 100,
          height: 40,
          backgroundColor: 'white',
          borderRadius: 100,
          margin: 4,
          // paddingVertical: '30%',
          elevation: 4,
          marginLeft: marginLeft ? 12 : 4,
          marginRight: marginRight ? 12 : 4,
        },
      ]}>
      <Text style={[globalStyles.font14]}>{title}</Text>
    </Pressable>
  );
}
