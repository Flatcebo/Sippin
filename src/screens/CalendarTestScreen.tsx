import React, {useEffect, useRef, useState} from 'react';
import {
  LayoutAnimation,
  Platform,
  TouchableOpacity,
  UIManager,
} from 'react-native';
import {Animated, Button, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Calendar} from 'react-native-calendars';

export default function CalendarTestScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const fadeOut1 = new Animated.Value(1);
  const fadeIn1 = new Animated.Value(0);

  const fadeOutAndRemove = () => {
    setIsVisible(any => !any);
  };

  //   useEffect(() => {
  //     if (!isVisible) {
  //       // 일정 시간이 지난 후 isVisible이 false인 경우
  //       // 해당 엘리먼트를 완전히 제거할 수 있도록 로직을 추가할 수 있습니다.
  //       const timeoutId = setTimeout(() => {
  //         setIsVisible(true);
  //         // 여기에 엘리먼트를 완전히 제거하는 로직을 추가
  //         // 예를 들어, state를 초기화하거나 해당 엘리먼트를 렌더링하지 않도록 상태를 변경할 수 있습니다.
  //         // setIsVisible(true); // 또는 다른 로직을 추가
  //       }, 3000);

  //       // cleanup 함수
  //       return () => clearTimeout(timeoutId);
  //     }
  //   }, [isVisible]);

  useEffect(() => {
    const firstViewFadeIn = Animated.timing(fadeIn1, {
      toValue: 1,
      useNativeDriver: true,
      duration: 300,
    });

    const firstViewFadeOut = Animated.timing(fadeOut1, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(fadeIn1, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });

    // Animated.parallel([]);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {/* {isVisible ? ( */}
      <Animated.View
        style={{
          height: '100%',
          width: '100%',
          opacity: fadeOut1,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animatable.Text
          animation="pulse"
          //   easing="ease-out"
          iterationCount="infinite"
          duration={800}
          style={{fontSize: 20}}>
          예약 날짜를 선택해주세요.
        </Animatable.Text>
      </Animated.View>
      <Animated.View style={{flex: 1, opacity: fadeIn1}}>
        <Text style={{fontSize: 20}}>Fade2</Text>
        <Calendar />
      </Animated.View>
      {/* ) : (
        <View>
          <Text style={{fontSize: 20}}>Fade2</Text>
        </View>
      )} */}

      {/* <TouchableOpacity onPress={fadeOutAndRemove}>
        <Text style={{fontSize: 18, color: 'blue', marginTop: 20}}>
          Fade Out and Remove
        </Text>
      </TouchableOpacity> */}
    </View>
  );
}

// const startAnimation = () => {
//     Animated.timing(flexValue, {
//       toValue: 2,
//       duration: 3000,
//       useNativeDriver: false,
//     }).start();
//   };

//   if (
//     Platform.OS === 'android' &&
//     UIManager.setLayoutAnimationEnabledExperimental
//   ) {
//     UIManager.setLayoutAnimationEnabledExperimental(true);
//   }

//   const [expanded, setExpanded] = useState(false);

//   const toggleExpand = () => {
//     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//     setExpanded(!expanded);
//   };
