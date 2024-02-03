import React from 'react';
import {Keyboard, Pressable, StyleSheet} from 'react-native';
import {TextInputProps} from 'react-native';
import {
  Platform,
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

interface BorderInputProps {
  iconComponent?: any;
  iconName?: string;
  iconSize?: number;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  placeholder?: string;
  iconColor?: string;
  absoluteText?: string;
  secureTextEntry?: boolean;
  press?: boolean;
  onPressPress?: () => void;
  // textContentType?: any;
}

export default function BorderInput({
  iconComponent,
  iconName,
  iconSize,
  iconColor,
  containerStyle,
  inputStyle,
  placeholder,
  absoluteText,
  secureTextEntry,
  press,
  onPressPress,
  // textContentType,
  ...props
}: BorderInputProps & TextInputProps) {
  const IconComponent = iconComponent;

  return (
    <View style={[styles.container, containerStyle]}>
      {iconComponent && (
        <IconComponent
          name={iconName}
          size={iconSize}
          color={iconColor}
          style={[styles.iconStyle]}
        />
      )}
      {absoluteText && (
        <Text style={[styles.absoluteText]}>{absoluteText}</Text>
      )}
      {press && <Pressable onPress={onPressPress} style={[styles.press]} />}

      <TextInput
        style={[styles.inputStyle, inputStyle]}
        placeholderTextColor={'#9a9a9a'}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '80%',
  },
  iconStyle: {
    width: 40,
    position: 'absolute',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  absoluteText: {
    width: 40,
    position: 'absolute',
    height: '100%',
    textAlign: 'center',
    top: 0,
  },
  inputStyle: {
    // borderRadius: 4,
    borderBottomWidth: 1.4,
    borderColor: '#333',
    paddingLeft: 35,
    color: '#333',
    fontSize: 16,

    // backgroundColor: '#9a9a9a1c',
  },
  press: {
    // backgroundColor: 'red',
    position: 'absolute',
    zIndex: 100,
    bottom: 2,
    left: 0,
    // width: '70%',
    height: 40,
    width: '75%',
  },
});
