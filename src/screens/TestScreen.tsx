import React, {useEffect, useRef, useState} from 'react';
import {TouchableOpacity, Platform, Text, View} from 'react-native';

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
    <View>
      {/* 기존에 생성된 뷰들을 렌더링 */}
      {views.map((view: any, index: any) => (
        <React.Fragment key={index}>{view}</React.Fragment>
      ))}

      {/* 추가 버튼 */}
      <TouchableOpacity onPress={addView}>
        <Text>Add View</Text>
      </TouchableOpacity>
    </View>
  );
}
