import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {IconEntypo, IconMaterialCommunityIcons} from '../lib/Icon';
import BottomButton from './BottomButton';
import {CloseButton} from './IconButtons';

interface GroupModalProps {
  visible?: boolean;
  onRequestClose?: () => void;
  contents?: React.ReactNode;
  layoutStyle?: StyleProp<ViewStyle>;
  title?: string;
  imageUrl?: string;
  hashtag?: string;
  onPressCloseIcon?: () => void;
  onPressShareButton?: () => void;
}

export default function GroupModal({
  visible,
  onRequestClose,
  contents,
  layoutStyle,
  title,
  imageUrl,
  hashtag,
  onPressCloseIcon,
  onPressShareButton,
}: GroupModalProps) {
  return (
    <>
      <Modal
        animationType="slide"
        transparent
        visible={visible}
        onRequestClose={onRequestClose}>
        <Animatable.View style={[styles.container, layoutStyle]}>
          <ImageBackground
            style={{flex: 1}}
            source={{uri: imageUrl}}
            resizeMethod="resize"
            resizeMode="cover">
            {contents}
            <View
              style={{
                flex: 0.6,
              }}>
              <View style={[styles.headerView]}>
                <IconMaterialCommunityIcons
                  name="close"
                  size={26}
                  color={'white'}
                  onPress={onPressCloseIcon}
                />
                <IconEntypo
                  name="share"
                  size={22}
                  color="white"
                  style={{}}
                  onPress={onPressShareButton}
                />
              </View>
            </View>
            <View style={[styles.textView]}>
              <Text style={[styles.titleText]}>{title}</Text>
              <Text style={{color: 'white'}} numberOfLines={4}>
                {hashtag}
              </Text>
            </View>
          </ImageBackground>
          <Pressable style={[styles.bottomButton]}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
              그룹 참여하기
            </Text>
          </Pressable>
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
    flex: 1,
    elevation: 10,
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  bottomButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '8%',
    backgroundColor: '#0091ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    width: '70%',
    paddingVertical: '5%',
  },
  textView: {
    flex: 0.4,
    paddingHorizontal: '5%',
    bottom: 0,
  },
  headerView: {
    alignItems: 'center',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
  },
});
