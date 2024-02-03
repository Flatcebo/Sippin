import React from 'react';
import {
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface PressableButtonProps {
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  title?: string;
  onPress?: () => void;
}
export default function PressableButton({
  containerStyle,
  titleStyle,
  title,
  onPress,
}: PressableButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          paddingVertical: 12,
          width: '80%',
          // backgroundColor: 'black',
          //   borderWidth: 0.4,
          borderRadius: 4,
          marginTop: 4,
          marginBottom: 4,
        },
        containerStyle,
      ]}>
      <Text
        style={[
          {textAlign: 'center', fontSize: 16, color: 'black'},
          titleStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
