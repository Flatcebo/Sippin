import React from 'react';
import {Image, ScrollView, StyleSheet, Text} from 'react-native';
import {Modal, Pressable, View} from 'react-native';
import {BackPressColor} from '../lib/GlobalStyles';
type ProfileItemProps = {
  profileUri: string;
  name: string;
};
interface CustomModalProps {
  visible?: boolean;
  onRequestClose?: () => void;
  contents?: React.ReactNode;
  // layoutStyle?: StyleProp<ViewStyle>;
  title?: string;
  onPressBG?: () => void;
  onPressSubmit?: () => void;
  profileItem?: Array<ProfileItemProps>;
  onPressReserve?: () => void;
}
export default function CustomDrawer({
  visible,
  onRequestClose,
  onPressBG,
  profileItem,
  onPressReserve,
}: CustomModalProps) {
  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      transparent
      animationType="none">
      <Pressable style={[styles.backPressStyle]} onPress={onPressBG}>
        <View style={{flex: 0.3}} />
        <Pressable style={[styles.container]}>
          <Pressable
            android_ripple={{color: '#cacaca'}}
            style={{}}
            onPress={onPressReserve}>
            <Text style={[styles.reserveText]}>예약하기</Text>
          </Pressable>
          <Pressable android_ripple={{color: '#cacaca'}} style={{}}>
            <Text style={[styles.reserveText]}>일정보기</Text>
          </Pressable>
          <View style={{paddingVertical: '5%', rowGap: 6}}>
            <View style={{paddingHorizontal: '5%'}}>
              <Text style={{fontWeight: 'bold'}}>참여인원</Text>
            </View>
            <ScrollView style={{}}>
              {profileItem?.map((item, idx) => (
                <Pressable
                  key={idx}
                  android_ripple={{color: '#cacaca'}}
                  style={[styles.profileItemImg]}>
                  <Image
                    source={{uri: item.profileUri, width: 40, height: 40}}
                    style={{borderRadius: 100}}
                  />
                  <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
          <View style={[styles.absoluteBottomView]}>
            <Text>나가기</Text>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backPressStyle: {
    flex: 1,
    backgroundColor: BackPressColor,
    flexDirection: 'row',
  },
  container: {
    flex: 0.7,
    backgroundColor: 'white',
    elevation: 2,
  },
  reserveText: {
    paddingVertical: '5%',
    borderBottomWidth: 0.4,
    borderColor: '#eaeaea',
    marginHorizontal: '5%',
    color: 'black',
    fontWeight: 'bold',
  },
  absoluteBottomView: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#cacaca',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 0.2,
    // borderColor: '#9a9a9a',
  },
  profileItemImg: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
    paddingHorizontal: '5%',
    paddingVertical: '2%',
  },
});
