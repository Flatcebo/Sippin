import React from 'react';
import {
  Animated,
  ImageBackground,
  Modal,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {scale} from '../utils/scaling';
interface CountModalProps {
  visible?: boolean;
  onRequestClose?: () => void;
  contents?: React.ReactNode;
  layoutStyle?: StyleProp<ViewStyle>;
  title?: string;
  onPressBG?: () => void;
  onPressSubmit?: () => void;
  value: string;
  onChangeText: (number: string) => void;
}
export default function CountModal({
  visible,
  onRequestClose,
  contents,
  layoutStyle,
  title,
  onPressBG,
  onPressSubmit,
  value,
  onChangeText,
}: CountModalProps) {
  // Animated.spring({})
  return (
    <>
      <Modal
        animationType="slide"
        transparent
        visible={visible}
        onRequestClose={onRequestClose}>
        <Pressable style={[styles.backgroundPress]} onPress={onPressBG}>
          <Animatable.View style={[styles.container, layoutStyle]}>
            <View
              style={{
                width: '30%',
                backgroundColor: 'white',
                borderRadius: 8,
                elevation: 4,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TextInput
                  value={value}
                  onChangeText={onChangeText}
                  keyboardType="number-pad"
                  style={{width: '100%', fontSize: 20, height: scale(80)}}
                  textAlign="center"
                  maxLength={2}
                />
                {contents}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: scale(40),
                }}>
                <TouchableOpacity style={{flex: 0.5}} onPress={onPressBG}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      fontSize: 13,
                    }}>
                    취소
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 0.5}} onPress={onPressSubmit}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      fontSize: 13,
                    }}>
                    확인
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Animatable.View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundPress: {flex: 1, backgroundColor: '#00000029'},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 300,
    // display: visible ? 'flex' : 'none',
    // flex: 1,
    // elevation: 10,
    // backgroundColor: 'white',
    // paddingVertical: 10,
  },
});
