import {
  GestureResponderEvent,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import IconOcticons from 'react-native-vector-icons/Octicons';
import IconFeather from 'react-native-vector-icons/Feather';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {DefaultTheme} from 'react-native-paper';
import FilterBar from './FilterBar';

type SearchBarProps = {
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  pressableInput?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
};

export default function SearchBar({
  onPress,
  pressableInput,
  ...textInput
}: SearchBarProps) {
  const navigation = useNavigation();
  // const [backVisible,setBackVisible] = useState(false)
  return (
    <SafeAreaView style={{backgroundColor: DefaultTheme.colors.background}}>
      <View
        style={{
          width: '100%',
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          height: 70,
          // borderWidth: 1,
          flexDirection: 'row',
        }}>
        <TextInput
          style={{
            backgroundColor: 'white',
            width: '80%',
            // height: 50,
            borderRadius: 100,
            paddingVertical: Platform.OS === 'android' ? '3.5%' : '4%',
            paddingHorizontal: '5%',
            fontSize: 16,
            // borderWidth: 1,
            borderColor: '#9a9a9a',
            elevation: 2,
            marginLeft: '4.5%',
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
            // position: 'absolute',
            right: '55%',
            //   bottom: '2%',
            color: 'black',
          }}
        />
        {pressableInput && (
          <Pressable
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: 'transparent',
              left: 10,
              right: 27,
            }}
            onPress={onPress}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
