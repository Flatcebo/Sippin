import React from 'react';
import {Modal, Pressable, StyleProp, ViewProps} from 'react-native';
import * as Animatable from 'react-native-animatable';

interface ReviewSortModalProps {
  visible?: boolean;
  onRequestClose?: () => void;
  onPressBG?: () => void;
  contents?: React.ReactNode;
  layoutStyle?: StyleProp<ViewProps>;
}
export default function ReviewSortModal({
  visible,
  onRequestClose,
  onPressBG,
  contents,
  layoutStyle,
}: ReviewSortModalProps) {
  return (
    <>
      <Modal
        animationType="slide"
        transparent
        visible={visible}
        onRequestClose={onRequestClose}>
        {/* <View style={{flex: 1}}> */}
        <Pressable
          style={{flex: 1, backgroundColor: '#00000029'}}
          onPress={onPressBG}
        />
        <Animatable.View
          style={[
            {
              justifyContent: 'center',
              display: visible ? 'flex' : 'none',
              //   borderTopLeftRadius: 16,
              //   borderTopRightRadius: 16,
              elevation: 10,
              backgroundColor: 'white',
              paddingVertical: 10,
            },
            layoutStyle,
          ]}>
          {contents}
        </Animatable.View>
      </Modal>
    </>
  );
}
