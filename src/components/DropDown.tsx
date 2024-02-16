import React from 'react';
import {StyleSheet} from 'react-native';
import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {IconEntypo} from '../lib/Icon';

interface SortItemButtonProps {
  onPress?: () => void;
  title: string;
  icon?: boolean;
  pressableStyle?: StyleProp<ViewStyle>;
}

export default function SortItemButton({
  onPress,
  title,
  icon,
  pressableStyle,
}: SortItemButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.dropDownButton, pressableStyle]}>
      <Text style={{fontWeight: 'bold'}}>{title}</Text>
      {icon && <IconEntypo name="chevron-down" size={18} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  dropDownButton: {
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
});
