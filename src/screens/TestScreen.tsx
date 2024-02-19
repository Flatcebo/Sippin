import React, {useEffect, useRef, useState} from 'react';
import {TouchableOpacity, Platform, Text, View, ScrollView} from 'react-native';
import {Appbar} from 'react-native-paper';

export default function TestScreen({navigation}: any) {
  const [views, setViews] = useState<any>([]);

  // 새로운 뷰를 추가하는 함수
  const addView = () => {
    const newView = (
      <View key={views.length} style={{marginVertical: 10}}>
        <Text>New View</Text>
      </View>
    );
    setViews([...views, newView]); // 기존 뷰 배열에 새로운 뷰 추가
  };

  return (
    <>
      <ScrollView>
        <Appbar.Header collapsable={true}>
          <Appbar.Content title="My App" />
          <Appbar.Content title="My App" />
          <Appbar.Content title="My App" />
          <Appbar.Content title="My App" />
          <Appbar.Content title="My App" />
        </Appbar.Header>
        <View style={{height: 300, backgroundColor: 'red'}} />
        <View style={{height: 300, backgroundColor: 'blue'}} />
        <View style={{height: 300, backgroundColor: 'black'}} />
        <View style={{height: 300, backgroundColor: 'green'}} />
      </ScrollView>
    </>
  );
}
