import React from 'react';
import {
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

interface PressableListItemProp {
  layoutStyle?:
    | StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
  containerStyle?: StyleProp<ViewStyle>;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  titleContent?: React.ReactNode;
  content?: React.ReactNode;
  onPress?: () => void;
}

export default function PressableListItem({
  layoutStyle,
  containerStyle,
  title,
  titleStyle,
  titleContent,
  content,
  onPress,
}: PressableListItemProp) {
  return (
    <Pressable
      android_ripple={{color: '#cacaca'}}
      style={layoutStyle}
      onPress={onPress}>
      <View style={containerStyle}>
        {content}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={titleStyle}>{title}</Text>
          {titleContent}
        </View>
      </View>
    </Pressable>
  );
}
