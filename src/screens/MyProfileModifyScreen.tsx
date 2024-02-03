import React, {useState} from 'react';
import {
  Alert,
  Button,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Image, Text, View} from 'react-native';
import {IconFeather, IconMaterialCommunityIcons} from '../lib/Icon';
import {launchImageLibrary} from 'react-native-image-picker';
import {Platform} from 'react-native';
import BorderInput from '../components/BorderInput';
export default function MyProfileModifyScreen() {
  const defaultImage =
    'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMDVfMjYz%2FMDAxNjc1NTcyMzM1MjU5.z_Vs1oNW6BjDl02ogzpJIMn7ZpxbIB9wD7sDYXfK18Ag.7dW0E1zx9nMXEywMu2ZoETdBc1aS3PnvyaRBE1y7_Rsg.JPEG.myeonghwadg%2F01.jpg&type=sc960_832';
  const [response, setResponse] = useState<any>(null);
  const [modifyName, setModifyName] = useState(false);
  const [userName, setUserName] = useState('플랫');

  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: Platform.OS === 'android',
        // assetRepresentationMode: 'compatible',
        presentationStyle: 'formSheet',
      },
      (res: any) => {
        if (res.didCancel) {
          // 취소했을 경우
          return;
        }
        setResponse(res);
      },
    );
  };

  const onPressModifyButton = () => {
    setModifyName(true);
  };

  const onPressCheckNameButton = () => {
    setModifyName(false);
  };
  const onChangeTextName = (t: string) => {
    setUserName(t);
  };
  return (
    <View style={[styles.container]}>
      <View style={[styles.profileImageView]}>
        <Image
          source={{
            uri: response?.assets[0]?.uri || defaultImage,
            width: 110,
            height: 110,
          }}
          style={[styles.profileImage]}
          resizeMode="cover"
        />
        <IconFeather
          name="camera"
          size={20}
          color={'#eaeaea'}
          style={[styles.iconCamera]}
          onPress={onSelectImage}
        />
      </View>
      <View>
        {modifyName ? (
          <View style={[styles.nameView]}>
            <BorderInput
              containerStyle={[styles.containerStyle]}
              inputStyle={[styles.inputStyle]}
              value={userName}
              onChangeText={onChangeTextName}
              maxLength={10}
              textContentType="password"
              autoFocus
            />
            <TouchableOpacity
              style={[styles.checkNameButton]}
              onPress={onPressCheckNameButton}>
              <Text style={{fontSize: 13}}>확인</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              // borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={[styles.profileText]}>{userName}</Text>
            <Pressable style={{padding: 2}} hitSlop={10}>
              <IconMaterialCommunityIcons
                name="pencil-outline"
                size={18}
                onPress={onPressModifyButton}
              />
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {borderRadius: 100, marginBottom: 4},
  profileText: {
    fontSize: 18,
    fontWeight: 'bold',
    // width: 74,
    textAlign: 'center',
    paddingLeft: 20,
  },
  iconCamera: {
    position: 'absolute',
    backgroundColor: '#33333322',
    borderRadius: 100,
    width: 110,
    height: 110,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  profileImageView: {alignItems: 'center', justifyContent: 'center'},
  inputStyle: {
    backgroundColor: 'white',
    paddingVertical: 2,
    paddingLeft: 6,
    textAlign: 'center',
  },
  containerStyle: {width: 80, height: 30},
  nameView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkNameButton: {
    position: 'absolute',
    right: -50,
    // borderWidth: 1.4,
    borderRadius: 4,
    padding: 7,
    paddingHorizontal: 12,
    backgroundColor: '#dadada',
  },
});
