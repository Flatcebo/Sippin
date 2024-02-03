import React, {useEffect} from 'react';
import {Animated, Modal, Pressable, Text, View} from 'react-native';
import {Calendar, CalendarProps} from 'react-native-calendars';
import * as Animatable from 'react-native-animatable';
import {ContextProp} from 'react-native-calendars/src/types';
import BottomButton from './BottomButton';
import Postcode from '@actbase/react-daum-postcode';
import {OnCompleteParams} from '@actbase/react-daum-postcode/lib/types';
interface PostModalProps {
  visible?: boolean;
  onRequestClose?: () => void;
  onPressBG?: () => void;
  ListContents?: React.ReactNode;
  onSelectedPost: (data: OnCompleteParams) => void;
  onErrorPost: (error: unknown) => void;
}
export default function PostModal({
  visible,
  onRequestClose,
  onPressBG,
  ListContents,
  onSelectedPost,
  onErrorPost,
}: PostModalProps) {
  return (
    <>
      <Modal
        animationType="slide"
        transparent
        visible={visible}
        onRequestClose={onRequestClose}>
        <Pressable
          style={{flex: 1, backgroundColor: '#10101053'}}
          onPress={onPressBG}
        />
        <Animatable.View
          style={{
            justifyContent: 'center',
            display: visible ? 'flex' : 'none',
          }}>
          <Postcode
            style={{width: '100%', height: '100%'}}
            jsOptions={{animation: true}}
            onSelected={onSelectedPost}
            onError={onErrorPost}
          />
        </Animatable.View>
        {/* </View> */}
      </Modal>
    </>
  );
}
