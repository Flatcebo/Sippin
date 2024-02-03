import React, {useEffect} from 'react';
import {
  Animated,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {ContextProp} from 'react-native-calendars/src/types';
import {DatePickerProps} from 'react-native-date-picker';
import {ProgressBar} from 'react-native-paper';
import {SojuColor} from '../lib/GlobalStyles';
import * as Progress from 'react-native-progress';

interface TableModalProps {
  visible?: boolean;
  onRequestClose?: () => void;
  onPressBG?: () => void;
  ListContents?: React.ReactNode;
  modalContents?: React.ReactNode;
  onPressCheck?: () => void;
}
export default function TableModal({
  visible,
  onRequestClose,
  onPressBG,
  ListContents,
  modalContents,
  onPressCheck,
  ...rest
}: TableModalProps & DatePickerProps & ContextProp) {
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
          style={{
            justifyContent: 'center',
            display: visible ? 'flex' : 'none',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            elevation: 10,
          }}>
          <View
            style={{
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              elevation: 10,
              backgroundColor: 'white',

              //   marginBottom: 30,
            }}>
            <View style={{height: 10}}></View>
            {modalContents}
            <View
              style={{
                marginHorizontal: '5%',
                marginVertical: '5%',
                paddingBottom: '5%',
                height: 80,
                // borderWidth: 1,
              }}>
              <Text style={{height: 40, fontWeight: 'bold', fontSize: 16}}>
                T - 1
              </Text>
              <ProgressBar
                progress={0.1}
                style={{
                  height: 6,
                  borderRadius: 100,
                }}
                color={SojuColor}
                // visible
              />
              {/* <Progress.Bar progress={0.5} style={{width: '80%'}} /> */}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '100%',
                marginBottom: 10,
              }}>
              <TouchableOpacity
                onPress={onPressBG}
                style={{
                  width: '40%',
                  backgroundColor: '#eaeaea',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 8,
                }}>
                <Text
                  style={{
                    paddingVertical: '10%',
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  닫기
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onPressCheck}
                style={{
                  width: '40%',
                  backgroundColor: SojuColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 8,
                }}>
                <Text
                  style={{
                    paddingVertical: '10%',
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: 'white',
                  }}>
                  확인
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <BottomButton title="확인" /> */}
        </Animatable.View>
        {/* </View> */}
      </Modal>
    </>
  );
}
