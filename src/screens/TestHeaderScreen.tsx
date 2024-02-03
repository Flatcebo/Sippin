import {format} from 'date-fns';
import React, {useEffect, useRef, useState} from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native';
import {Animated, Button, Text, View} from 'react-native';

export default function TestHeaderScreen() {
  const [header, setHeader] = useState(false);
  const HEADER_HEIGHT = 60;
  const SCROLL_THRESHOLD = 1; // 조건에 따라 조절

  let [prevScrollY, setPrevScrollY] = useState(0);
  // const [scrollY] = useState(new Animated.Value(0));

  // const handleScrolls = Animated.event(
  //   [{nativeEvent: {contentOffset: {y: scrollY}}}],
  //   {useNativeDriver: false},
  // );

  // const headerHeight = scrollY.interpolate({
  //   inputRange: [0, 50],
  //   outputRange: [50, 0],
  //   extrapolate: 'clamp',
  // });

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;

    // 이전 Y 값과 현재 Y 값의 차이 계산
    const scrollDiff = offsetY - prevScrollY;

    // 현재 Y 값 저장
    setPrevScrollY(offsetY);

    // 여기에서 scrollDiff를 사용하여 원하는 이벤트를 처리
    if (scrollDiff > SCROLL_THRESHOLD) {
      // Y 값이 SCROLL_THRESHOLD 이상 증가한 경우
      // console.log('Scrolling Down');
      setHeader(false);
      // 추가로 처리할 로직을 작성
    } else if (scrollDiff < -SCROLL_THRESHOLD) {
      // Y 값이 SCROLL_THRESHOLD 이상 감소한 경우
      // console.log('Scrolling Up');
      setHeader(true);
      // 추가로 처리할 로직을 작성
    }
  };

  return (
    <>
      {header && (
        <View
          style={{
            height: HEADER_HEIGHT,
            position: 'absolute',
            top: 0,
            zIndex: 100,
            backgroundColor: 'white',
          }}>
          <Text>Header</Text>
        </View>
      )}

      <ScrollView
        onScroll={handleScroll}
        style={{height: '100%', width: '100%'}}>
        <View>
          <View style={{height: 400, backgroundColor: 'black'}}>
            <Text>hihi</Text>
          </View>
          <View style={{height: 400, backgroundColor: 'red'}}>
            <Text>hihi</Text>
          </View>
          <View style={{height: 400, backgroundColor: 'blue'}}>
            <Text>hihi</Text>
          </View>
          <View style={{height: 400, backgroundColor: 'green'}}>
            <Text>hihi</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
