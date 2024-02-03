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
  return (
    <>
      <Modal
        animationType="slide"
        transparent
        visible={visible}
        onRequestClose={onRequestClose}>
        <Pressable style={{flex: 1}} onPress={onPressBG} />
        <Animatable.View
          style={{
            justifyContent: 'center',
            display: visible ? 'flex' : 'none',
          }}>
          <Calendar
            monthFormat="MM월"
            style={{
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              elevation: 6,
            }}
            {...rest}
          />
          {/* <BottomButton title="확인" /> */}
        </Animatable.View>
        {/* </View> */}
      </Modal>
    </>
  );
}
