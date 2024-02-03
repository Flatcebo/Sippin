import React from 'react';
import {
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface CustomAlertProps {
  visible: boolean;
  onRequestClose: () => void;
  onPressBG: () => void;
  ListContents?: React.ReactNode;
  onPressCheckButton?: () => void;
}
export default function CustomAlert({
  visible,
  onRequestClose,
  onPressBG,
  ListContents,
  onPressCheckButton,
  ...rest
}: CustomAlertProps) {
  return (
    <>
      <Modal
        animationType="fade"
        transparent
        visible={visible}
        onRequestClose={onRequestClose}>
        {/* <Pressable
          style={{
            flex: 1,
            backgroundColor: '#33333348',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={onPressBG}> */}
        <TouchableWithoutFeedback>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#33333348',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 20,
                borderRadius: 10,
                width: 300,
              }}>
              <Text>{'message'}</Text>
              <TouchableOpacity
                onPress={onPressCheckButton}
                style={{marginTop: 20}}>
                <Text style={{color: 'blue'}}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
        {/* </Pressable> */}
      </Modal>
    </>
  );
}
