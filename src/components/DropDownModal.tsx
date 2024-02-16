import React from 'react';
import {
  Modal,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewProps,
  ViewStyle,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

interface DropDownModalProps {
  visible?: boolean;
  onRequestClose?: () => void;
  onPressBG?: () => void;
  contents?: React.ReactNode;
  layoutStyle?: StyleProp<ViewStyle>;
  pressableStyle?: StyleProp<ViewStyle>;
  items?: Array<{title?: string; onPress?: () => void}>;
}

export default function DropDownModal({
  visible,
  onRequestClose,
  onPressBG,
  contents,
  layoutStyle,
  items,
  pressableStyle,
}: DropDownModalProps) {
  return (
    <>
      <Modal
        animationType="slide"
        transparent
        visible={visible}
        onRequestClose={onRequestClose}>
        <Pressable style={[styles.backgroundPress]} onPress={onPressBG} />
        <Animatable.View style={[styles.container, layoutStyle]}>
          {contents}
          {items?.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={item.onPress}
              style={[styles.dropDownButton, pressableStyle]}>
              <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </Animatable.View>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  dropDownButton: {
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  backgroundPress: {flex: 1, backgroundColor: '#00000029'},
  container: {
    justifyContent: 'center',
    // display: visible ? 'flex' : 'none',
    elevation: 10,
    backgroundColor: 'white',
    paddingVertical: 10,
  },
});
