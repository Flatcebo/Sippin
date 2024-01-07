import React from 'react';
import {GestureResponderEvent, Pressable, Text, View} from 'react-native';
import {globalStyles} from '../lib/GlobalStyles';
import {IconFeather, IconMaterialCommunityIcons} from '../lib/Icon';

interface PressableBottomWidthItemProps {
  onPressContent?: ((event: GestureResponderEvent) => void) | null | undefined;
  onPressClose?: ((event: GestureResponderEvent) => void) | null | undefined;
  title?: string;
}

export default function PressableBottomWidthItem({
  onPressContent,
  onPressClose,
  title,
}: PressableBottomWidthItemProps) {
  return (
    <>
      <Pressable
        onPress={onPressContent}
        style={({pressed}) => [
          {
            borderBottomWidth: 1,
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
            // justifyContent: '',
          }}>
          <IconFeather
            name="clock"
            size={20}
            color="#9a9a9a"
            style={[{marginLeft: '3%'}]}
          />
          <Text
            style={[globalStyles.fontNormal16, globalStyles.marginHorizontal3]}>
            {title}
          </Text>
        </View>
        <Pressable onPress={onPressClose}>
          <IconMaterialCommunityIcons name="close" size={20} color="black" />
        </Pressable>
      </Pressable>
    </>
  );
}
