import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {globalStyles} from '../lib/GlobalStyles';
import {
  IconAntDesign,
  IconFeather,
  IconIonicons,
  IconMaterialCommunityIcons,
  IconMaterialIcons,
} from '../lib/Icon';
interface FilterItemProps {
  title?: String;
  marginLeft?: boolean;
  marginRight?: boolean;
  style?: StyleProp<TextStyle>;
  pressableStyle?: StyleProp<TextStyle>;
  borderRadius?: boolean;
  elevation?: boolean;
  borderWidth?: boolean;
  recentSearch?: boolean;
  onPress?: () => void;
  pressedColor?: boolean;
  content?: React.ReactNode;
  height50?: boolean;
  onLayout?: (e: any) => void;
}
export default function FilterItem({
  title,
  marginLeft,
  marginRight,
  pressableStyle,
  style,
  borderRadius,
  elevation = true,
  borderWidth = false,
  recentSearch,
  onPress,
  pressedColor,
  content,
  height50,
  onLayout,
  ...rest
}: FilterItemProps) {
  return (
    <Pressable
      onLayout={onLayout}
      onPress={onPress}
      {...rest}
      style={({pressed}) => [
        {
          justifyContent: 'center',
          alignItems: 'center',
          // width: 100,
          height: height50 ? 45 : 35,
          backgroundColor: pressedColor
            ? pressed
              ? '#eaeaea'
              : 'white'
            : 'white',
          borderRadius: borderRadius ? 100 : 8,
          borderWidth: borderWidth ? 1.6 : 0,
          borderColor: '#cacaca',
          elevation: elevation ? 0 : 0,
          marginLeft: marginLeft ? 12 : 4,
          marginRight: marginRight ? 12 : 4,
          marginHorizontal: 4,
          marginBottom: '2%',
          flexDirection: 'row',
        },
        pressableStyle,
      ]}>
      {content}
      {recentSearch ? (
        <>
          <Text
            style={[
              globalStyles.font14,
              {paddingLeft: 16, paddingRight: 4},
              style,
            ]}>
            {title}
          </Text>
          <Pressable style={{paddingRight: 8}} onPress={() => {}}>
            <IconMaterialCommunityIcons name="close" size={16} color="black" />
          </Pressable>
        </>
      ) : (
        <>
          <Text style={[globalStyles.font14, {paddingHorizontal: 0}, style]}>
            {title}
          </Text>
        </>
      )}
    </Pressable>
  );
}
