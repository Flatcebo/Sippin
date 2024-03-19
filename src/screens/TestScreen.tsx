import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {
  TouchableOpacity,
  Platform,
  Text,
  View,
  ScrollView,
  Button,
  Image,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Pressable,
} from 'react-native';
import {firebase} from '@react-native-firebase/database';
import chatData from '../data/ChatData.json';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import HamburgerButton from '../components/IconButtons';
import CustomDrawer from '../components/CustomDrawer';
// import {KeyboardAvoidingView} from 'react-native-keyboard-controller';

export default function TestScreen({navigation}: any) {
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  useLayoutEffect(() => {
    return flatListRef.current?.scrollToEnd({animated: true});
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerRight: () => (
        <HamburgerButton
          onPress={() => {
            setVisibleDrawer(true);
          }}
        />
      ),
    });
  }, []);

  const bottomToScroll = () => {
    flatListRef.current?.scrollToEnd({animated: true});
  };

  const [profile, setProfile] =
    useState<{profileUri: string; name: string}[]>();
  const [others, setOthers] = useState(false);
  const [my, setMy] = useState(false);

  useEffect(() => {
    setProfile([
      {
        profileUri:
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMTNfMjMz%2FMDAxNjk5ODg2NjAzNjEz.iYprsoLPiuYOA6iLqs2JgawGBAZJSrQeoIvSy1bHJb4g.30Z71yxXU6dSIJ7fUyzfOMDoQyJJG2gI8gFpmKzq_cwg.JPEG.7wayjeju%2FIMG_8463.jpg&type=sc960_832',
        name: '황서은',
      },
    ]);
  }, []);

  const renderItem = useCallback(({item}: any) => {
    return (
      <View key={item.id} style={[styles.renderItemLayout]}>
        <View style={[styles.renderItemContainer]}>
          <View style={{}}>
            <Image
              source={{uri: item.profileIMG, height: 40, width: 40}}
              style={{borderRadius: 100}}
            />
          </View>
          <View style={[styles.renderItemContentView]}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              {item.name}
            </Text>
            <Text style={[styles.renderItemContentText]}>{item.content}</Text>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <Text style={{color: 'black', fontSize: 10}}>오후 5:52</Text>
          </View>
        </View>
      </View>
    );
  }, []);

  const onPressSendButton = () => {
    console.log('send');
  };
  const onChangeText = (text: string) => {
    console.log(text);
  };
  const closedDrawer = () => {
    setVisibleDrawer(false);
  };

  return (
    <KeyboardAvoidingView
      enabled={true}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1, backgroundColor: 'red'}}
      keyboardVerticalOffset={500}>
      {visibleDrawer && (
        <CustomDrawer
          onPressBG={closedDrawer}
          onRequestClose={closedDrawer}
          profileItem={profile}
          onPressReserve={() => {
            navigation.push('ReserveTable');
          }}
        />
      )}
      <Pressable onPress={bottomToScroll}>
        <Text>최근 대화로 이동</Text>
      </Pressable>

      <FlatList
        // inverted={true}
        ref={flatListRef}
        data={chatData}
        renderItem={renderItem}
        keyExtractor={(item, idx) => idx.toString()}
        style={{backgroundColor: 'white', height: '100%'}}
        contentContainerStyle={[styles.contentContainerStyle]}
        ListFooterComponent={<View style={{height: 60}} />}
        // initialScrollIndex={chatData.length - 1}
      />
      {/* <KeyboardSpacer /> */}
      <View style={[styles.absoluteBottomTextInput]}>
        <TextInput
          value=""
          onChangeText={onChangeText}
          style={[styles.textInputStyle]}
        />
        <Text style={[styles.sendButton]} onPress={onPressSendButton}>
          send
        </Text>
      </View>
      {/* <Button title="create" onPress={inputChat} />
      <Button title="read" onPress={readChat} />
      <Button title="update" onPress={updateChat} />
    <Button title="delete" onPress={deleteChat} /> */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: '3%',
    backgroundColor: 'white',
    // paddingBottom: 60,
  },
  absoluteBottomTextInput: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    maxHeight: 70,
    justifyContent: 'center',
  },
  textInputStyle: {
    backgroundColor: '#cacaca',
    // borderWidth: 1,
  },
  sendButton: {
    borderWidth: 1,
    position: 'absolute',
    right: 0,
    width: '16%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  renderItemLayout: {flexDirection: 'row', marginTop: '3%', flex: 1},
  renderItemContainer: {flexDirection: 'row', maxWidth: '86%', columnGap: 6},
  renderItemContentView: {maxWidth: '77%', rowGap: 6},
  renderItemContentText: {
    color: 'black',
    backgroundColor: '#d4d3d379',
    // width: 100,
    borderRadius: 8,
    padding: 10,
    lineHeight: 18,
  },
});
