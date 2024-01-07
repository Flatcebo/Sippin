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
}

export default function PressableListItem({
  layoutStyle,
  containerStyle,
  title,
  titleStyle,
  titleContent,
  content,
}: PressableListItemProp) {
  return (
    <Pressable style={layoutStyle}>
      <View style={containerStyle}>
        {content}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={titleStyle}>{title}</Text>
          {titleContent}
        </View>
      </View>
    </Pressable>
  );
}
