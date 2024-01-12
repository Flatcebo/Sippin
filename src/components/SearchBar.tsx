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
import BackVisible from './BackVisible';

type SearchBarProps = {
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  pressableInput?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  backVisible?: boolean;
};

export default function SearchBar({
  onPress,
  pressableInput,
  backVisible,
  ...textInput
}: SearchBarProps) {
  const navigation = useNavigation();
  // const [backVisible,setBackVisible] = useState(false)
  return (
    <SafeAreaView style={{backgroundColor: DefaultTheme.colors.background}}>
      <View style={{flexDirection: 'row'}}>
        {backVisible ? (
          <BackVisible />
        ) : (
          <View
            style={{
              width: '13%',
              backgroundColor: 'white',
            }}
          />
        )}
        {/* <View
          style={{
            width: '15%',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black'}}>mm</Text>
        </View> */}
        <View
          style={{
            // width: '70%',
            backgroundColor: 'white',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: 60,
            // borderWidth: 1,
            flexDirection: 'row',
          }}>
          <TextInput
            style={{
              backgroundColor: 'white',
              width: '81%',
              height: 40,
              borderRadius: 100,
              paddingVertical: Platform.OS === 'android' ? '2%' : '2.5%',
              paddingHorizontal: '12%',
              fontSize: 16,
              borderWidth: 1.2,
              borderColor: '#dadada',
              // elevation: 2,
              marginLeft: '2%',
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
      </View>
    </SafeAreaView>
  );
}
