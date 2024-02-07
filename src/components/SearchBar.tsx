import {
  GestureResponderEvent,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  SafeAreaView,
} from 'react-native';

import IconOcticons from 'react-native-vector-icons/Octicons';
import IconFeather from 'react-native-vector-icons/Feather';
import {StatusBar} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {DefaultTheme} from 'react-native-paper';
import BackVisible from './BackVisible';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, scale, verticalScale} from '../utils/scaling';
// import {SafeAreaView} from 'react-native-safe-area-context';

type SearchBarProps = {
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  pressableInput?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  backVisible?: boolean;
  center?: boolean;
};

export default function SearchBar({
  onPress,
  pressableInput,
  backVisible,
  center,
  ...textInput
}: SearchBarProps) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        alignItems: 'center',
        // flexDirection: 'row',
      }}>
      <LinearGradient
        colors={['#02e8b6', '#00aaf9', '#005ff9', '#ff00d4']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          height: 47,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 100,
          width: '96%',
          // marginLeft: '2%',
          flexDirection: 'row',
        }}>
        <TextInput
          style={{
            backgroundColor: 'white',
            width: '99%',
            height: 45,
            borderRadius: 100,
            paddingVertical: Platform.OS === 'android' ? '2%' : '2.5%',
            paddingHorizontal: '15%',
            fontSize: 16,
            color: 'black',
          }}
          placeholderTextColor={'#9a9a9a'}
          textAlign="left"
          {...textInput}
        />
        <IconOcticons
          name="search"
          size={20}
          style={{
            position: 'absolute',
            right: '5%',
            color: 'black',
          }}
        />
      </LinearGradient>
      {pressableInput && (
        <Pressable
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'transparent',
            left: 44,
            right: 20,
          }}
          onPress={onPress}
        />
      )}
    </View>

    // </SafeAreaView>
  );
}
