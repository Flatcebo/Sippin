import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  ImageBackground,
  Keyboard,
  Pressable,
  ScrollResponderEvent,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAvoidingView, Platform, Text, View} from 'react-native';
import BorderInput from '../components/BorderInput';
import BottomButton from '../components/BottomButton';
import ImageCard from '../components/ImageCard';
export default function TestScreen() {
  const [keyboardStatus, setKeyboardStatus] = useState('');
  useEffect(() => {
    // 컴포넌트가 마운트될 때 이벤트 리스너 추가
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        // 키보드가 나타날 때 수행할 작업
        setKeyboardStatus('Keyboard Shown');
        console.log('Keyboard is shown');
        Alert.alert('hjihi');
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        // 키보드가 사라질 때 수행할 작업
        setKeyboardStatus('Keyboard Hidden');
        console.log('Keyboard is hidden');
      },
    );

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const data = [
    {
      name: '1st',
    },
    {
      name: '2nd',
    },
    {
      name: '3rd',
    },
  ];
  const [itemHeights, setItemHeights] = useState<any>({});

  const renderItem = ({item, idx}: any) => {
    return (
      <View
        onLayout={event => {
          const {height} = event.nativeEvent.layout;
          setItemHeights((prevHeights: any) => ({
            ...prevHeights,
            [idx]: height,
          }));
        }}
        style={{height: 400, backgroundColor: 'green', borderBottomWidth: 3}}
        key={idx}>
        <Text style={{color: 'red'}}>{item.name}</Text>
      </View>
    );
  };
  const getItemLayout = (_: any, index: any) => ({
    length: itemHeights[index] || 100, // Set a default height if not yet measured
    offset: index * (itemHeights[index] || 100),
    index,
  });
  console.log(itemHeights);
  return (
    <>
      <View style={{}}>
        <Button title="1st" />
        <Button title="2nd" />
        <Button title="3rd" />
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, idx) => idx.toString()}
        getItemLayout={getItemLayout}
      />
    </>
  );
}
