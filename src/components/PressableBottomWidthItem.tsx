import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {globalStyles} from '../lib/GlobalStyles';
import {IconFeather, IconMaterialCommunityIcons} from '../lib/Icon';

interface PressableBottomWidthItemProps {
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  onPressClose?: ((event: GestureResponderEvent) => void) | null | undefined;
  title?: string;
  iconClock?: boolean;
  iconClose?: boolean;
  contents?: React.ReactNode;
  titleStyle?: StyleProp<TextStyle>;
  marginHorizontal?: boolean;
  bottomWidth?: number;
}

export default function PressableBottomWidthItem({
  onPress,
  onPressClose,
  title,
  iconClock,
  iconClose,
  contents,
  titleStyle,
  marginHorizontal,
  bottomWidth,
}: PressableBottomWidthItemProps) {
  return (
    <>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          {
            borderBottomWidth: bottomWidth ? bottomWidth : 1,
            borderColor: pressed ? '#aaaaaa' : '#cacaca',
            paddingVertical: '4%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: pressed ? '#dadada' : 'white',
          },
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: marginHorizontal ? '5%' : '0%',
            flex: 1,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {iconClock && (
              <IconFeather
                name="clock"
                size={20}
                color="#9a9a9a"
                style={[{marginRight: 6}]}
              />
            )}

            <Text
              style={[
                globalStyles.fontNormal16,
                // globalStyles.marginHorizontal3,
                titleStyle,
              ]}>
              {title}
            </Text>
          </View>
          <View>
            {contents}

            {iconClose && (
              <Pressable onPress={onPressClose}>
                <IconMaterialCommunityIcons
                  name="close"
                  size={20}
                  color="black"
                />
              </Pressable>
            )}
          </View>
        </View>
      </Pressable>
    </>
  );
}
