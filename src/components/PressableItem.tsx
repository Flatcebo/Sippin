import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ColorValue,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
} from 'react-native';
import {globalStyles} from '../lib/GlobalStyles';
import {scale, verticalScale} from '../utils/scaling';

export type PressableItemProps = {
  item: {id: number; title: string; desc: string};
  button?: boolean;
  desc?: string;
  shadowColor?: boolean;
  title?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  titleStyle?: StyleProp<TextStyle>;
  viewIcon?: boolean;
};

export default function PressableItem({
  item,
  button,
  desc,
  shadowColor,
  title,
  onPress,
  titleStyle,
  viewIcon,
}: PressableItemProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        button ? styles.button : styles.smallButton,
        {
          shadowColor: shadowColor ? 'blue' : undefined,
        },
      ]}>
      <View style={[globalStyles.marginHorizontal7, {rowGap: 2}]}>
        <Text
          style={[
            title ? globalStyles.fontBold18 : globalStyles.fontBold16,
            {textAlign: 'left'},
            titleStyle,
          ]}>
          {item.title}
        </Text>
        {desc && (
          <Text
            style={[globalStyles.textGray, globalStyles.marginHorizontal3, {}]}>
            {item.desc}
          </Text>
        )}
        {viewIcon && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                backgroundColor: '#eaeaea',
                height: 40,
                width: 40,
                right: 0,
              }}
            />
          </View>
        )}
      </View>
    </Pressable>
  );
}

// PressableItem.defaultProps = {
//   button: false,
// };
const styles = StyleSheet.create({
  button: {
    width: '48%',
    // height: scale(120),
    borderRadius: 10,
    backgroundColor: 'white',
    // borderWidth: 2.6,
    borderColor: '#9a9a9a',
    marginBottom: '3%',
    elevation: 2,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    paddingVertical: '5%',
  },
  smallButton: {
    width: '48%',
    // height: 120,
    borderRadius: 10,
    backgroundColor: 'white',
    // borderWidth: 0.6,
    borderColor: '#9a9a9a',
    marginBottom: '3%',
    elevation: 2,
    paddingVertical: '5%',
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});
