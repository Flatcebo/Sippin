import React from 'react';
import {Pressable, Text} from 'react-native';
import {globalStyles} from '../lib/GlobalStyles';

interface BottomButtonProps {
  title?: string;
  onPress?: () => void;
}

export default function BottomButton({
  title,
  onPress,
  ...rest
}: BottomButtonProps) {
  return (
    <Pressable
      //   {...rest}
      onPress={onPress}
      style={{
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#b5cf8c',
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={[globalStyles.font16]}>{title}</Text>
    </Pressable>
  );
}
