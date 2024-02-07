import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  Text,
  TextStyle,
  View,
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
  IconLocation?: boolean;
  IconCalendar?: boolean;
  borderRightWidth?: boolean;
}
export default function FilterItem({
  title,
  marginLeft,
  marginRight,
  pressableStyle,
  style,
  borderRadius,
  elevation = false,
  borderWidth = false,
  recentSearch,
  onPress,
  pressedColor,
  content,
  height50,
  onLayout,
  IconLocation,
  IconCalendar,
  borderRightWidth,
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
          height: height50 ? 45 : 30,
          backgroundColor: pressedColor
            ? pressed
              ? '#eaeaea'
              : 'white'
            : 'white',
          borderRadius: borderRadius ? 100 : 8,
          borderWidth: borderWidth ? 1.6 : 0,
          borderColor: '#cacaca',
          elevation: elevation ? 6 : 0,
          marginLeft: marginLeft ? 12 : 0,
          marginRight: marginRight ? 12 : 0,
          // marginHorizontal: 4,
          marginBottom: '2%',
          flexDirection: 'row',
          // borderWidth: 1,
        },
        pressableStyle,
      ]}>
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
        <View
          style={{
            flexDirection: 'row',
            borderRightWidth: borderRightWidth ? 1 : 0,
            paddingHorizontal: 16,
            borderColor: '#cacaca',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {content}
          {IconLocation && <IconIonicons name="location-outline" size={18} />}
          {IconCalendar && (
            <IconMaterialCommunityIcons
              name="calendar-month-outline"
              size={18}
            />
          )}

          <Text
            style={[
              globalStyles.font14,
              {
                paddingHorizontal: 0,
                fontSize: 13,
                fontWeight: '700',
                marginLeft: 4,
              },
              style,
            ]}>
            {title}
          </Text>
        </View>
      )}
    </Pressable>
  );
}
