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
interface PayTypeModalProps {
  visible?: boolean;
  onRequestClose?: () => void;
  contents?: React.ReactNode;
  layoutStyle?: StyleProp<ViewStyle>;
  onPressBG?: () => void;
  pressableStyle?: StyleProp<ViewStyle>;
  items?: Array<{title?: string; onPress?: () => void}>;
}
export default function PayTypeModal({
  visible,
  onRequestClose,
  contents,
  layoutStyle,
  onPressBG,
  pressableStyle,
  items,
}: PayTypeModalProps) {
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
                {contents}
                {items?.map((item, idx) => (
                  <TouchableOpacity
                    key={idx}
                    onPress={item.onPress}
                    style={[styles.dropDownButton, pressableStyle]}>
                    <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
                  </TouchableOpacity>
                ))}
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
  dropDownButton: {
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '15%',
  },
});
