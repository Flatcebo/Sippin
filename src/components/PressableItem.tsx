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

export type PressableItemProps = {
  item: {id: number; title: string; desc: string};
  button?: boolean;
  desc?: string;
  shadowColor?: boolean;
  title?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  titleStyle?: StyleProp<TextStyle>;
};

export default function PressableItem({
  item,
  button,
  desc,
  shadowColor,
  title,
  onPress,
  titleStyle,
}: PressableItemProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        button ? styles.button : styles.smallButton,
        {shadowColor: shadowColor ? 'blue' : undefined},
      ]}>
      <View
        style={[globalStyles.marginHorizontal7, globalStyles.marginVertical7]}>
        <Text
          style={[
            title ? globalStyles.fontBold18 : globalStyles.fontBold16,
            {textAlign: 'left'},
            titleStyle,
          ]}>
          {item.title}
        </Text>
        {desc && (
          <Text style={[globalStyles.textGray, globalStyles.marginHorizontal3]}>
            {item.desc}
          </Text>
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
    height: 120,
    borderRadius: 6,
    backgroundColor: 'white',
    // borderWidth: 0.6,
    borderColor: '#9a9a9a',
    marginBottom: '3%',
    elevation: 4,
    // shadowColor: 'red',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: ,
    // shadowRadius: 2,
    // justifyContent: 'center',
  },
  smallButton: {
    width: '48%',
    // height: 120,
    borderRadius: 6,
    backgroundColor: 'white',
    // borderWidth: 0.6,
    borderColor: '#9a9a9a',
    marginBottom: '3%',
    elevation: 2,
    paddingVertical: '3%',
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    // justifyContent: 'center',
  },
});
