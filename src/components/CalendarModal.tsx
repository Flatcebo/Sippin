import React, {useEffect} from 'react';
import {Animated, Modal, Pressable, Text, View} from 'react-native';
import {Calendar, CalendarProps} from 'react-native-calendars';
import * as Animatable from 'react-native-animatable';
import {ContextProp} from 'react-native-calendars/src/types';
import BottomButton from './BottomButton';
interface CalendarModalProps {
  visible?: boolean;
  onRequestClose?: () => void;
  onPressBG?: () => void;
  ListContents?: React.ReactNode;
}
export default function CalendarModal({
  visible,
  onRequestClose,
  onPressBG,
  ListContents,
  ...rest
}: CalendarModalProps & CalendarProps & ContextProp) {
  //   const opacity = new Animated.Value(0);

  //   useEffect(() => {
  //     Animated.timing(opacity, {
  //       toValue: visible ? 1 : 0,
  //       duration: 300, // 애니메이션 지속 시간
  //       useNativeDriver: true, // 네이티브 드라이버 사용
  //     }).start();
  //   }, [visible]);
  return (
    <>
      <Modal
        animationType="slide"
        transparent
        visible={visible}
        onRequestClose={onRequestClose}>
        {/* <View style={{flex: 1}}> */}
        <Pressable style={{flex: 1}} onPress={onPressBG} />
        <Animatable.View
          //   animation={visible ? 'fadeInUp' : 'fadeOutDown'}
          //   duration={5000}
          style={{
            // flex: 1,
            justifyContent: 'center',
            display: visible ? 'flex' : 'none',
            //   alignItems: 'center',
            //   opacity,
          }}>
          <Calendar
            monthFormat="MM월"
            style={{
              //   borderWidth: 4,
              //   borderBottomWidth: 0,
              //   borderColor: '#dadada',
              borderRadius: 16,
              elevation: 6,
            }}
            {...rest}
          />
          {/* <BottomButton title="확인" /> */}
        </Animatable.View>
        {/* </View> */}
      </Modal>
      {/* <Pressable>
        <Text>CalendarON</Text>
      </Pressable> */}
    </>
  );
}
