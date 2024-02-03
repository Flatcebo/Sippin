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
};

export default function SearchBar({
  onPress,
  pressableInput,
  backVisible,
  ...textInput
}: SearchBarProps) {
  const navigation = useNavigation();
  // const [backVisible,setBackVisible] = useState(false)

  // const {width, height} = Dimensions.get('window');
  // const baseHeight = 600; // 원하는 기준 높이를 설정합니다.
  // const baseWidth = 300; // 원하는 기준 폭을 설정합니다.

  // const responsiveHeight = (h: number) => height * h;
  // const responsiveWidth = (w: number) => (w / ) * width;
  // console.log(ToastAndroid.show('hi', 1000));
  // const statusBarHeight =
  //   Platform.OS === 'android' ? StatusBar.currentHeight : 10;
  // console.log(statusBarHeight);
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        height: scale(100),
        justifyContent: Platform.OS === 'android' ? 'flex-end' : 'center',
        // marginBottom: 20,
      }}>
      <View style={{flexDirection: 'row', height: scale(60)}}>
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
        {/* {Platform.OS === 'android' && <View style={{height: 30}} />} */}
        <View
          style={{
            backgroundColor: 'white',
            justifyContent: 'flex-start',
            alignItems: 'center',
            // height: 70,
            flexDirection: 'row',
            // borderWidth: 1,
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
              width: '81%',
              marginLeft: '2%',
            }}>
            <TextInput
              style={{
                backgroundColor: 'white',
                width: '99%',
                height: 45,
                borderRadius: 100,
                paddingVertical: Platform.OS === 'android' ? '2%' : '2.5%',
                paddingHorizontal: '12%',
                fontSize: 16,
                color: 'black',
              }}
              placeholderTextColor={'#9a9a9a'}
              textAlign="left"
              {...textInput}
            />
          </LinearGradient>
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
