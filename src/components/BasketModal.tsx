import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Modal, Pressable, ScrollView, View} from 'react-native';
import {IconMaterialIcons} from '../lib/Icon';
import {NavigationProp} from '../types/RootStackProps';
import BottomButton from './BottomButton';
import PressableListItem from './PressableListItem';

interface BasketModalProps {
  visible?: boolean;
  onRequestClose?: () => void;
  onPressBG?: () => void;
  title?: string;
  ListContents?: React.ReactNode;
  onPressBottomButton?: () => void;
}
export default function BasketModal({
  visible,
  onRequestClose,
  onPressBG,
  title,
  ListContents,
  onPressBottomButton,
}: BasketModalProps) {
  const navigation = useNavigation<NavigationProp>();
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={{flex: 1}}>
        <Pressable style={{flex: 1}} onPress={onPressBG} />
        <View
          style={{
            height: '90%',
            backgroundColor: 'white',
            borderTopStartRadius: 26,
            borderTopEndRadius: 26,
            borderTopWidth: 0.4,
            borderLeftWidth: 0.4,
            borderRightWidth: 0.4,
            borderColor: '#9a9a9a',
          }}>
          <View>
            <Pressable
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: '1%',
              }}
              onPress={onPressBG}>
              <IconMaterialIcons
                name="arrow-drop-down"
                size={30}
                color="#3a3a3a"
              />
            </Pressable>
          </View>
          <ScrollView>{ListContents}</ScrollView>
        </View>
        <BottomButton title="주문하기" onPress={onPressBottomButton} />
      </View>
    </Modal>
  );
}
