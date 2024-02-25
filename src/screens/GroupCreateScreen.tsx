import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import BorderInput from '../components/BorderInput';
import {GroupCreateScreenProp} from '../types/RootStackProps';
import {Appbar, Searchbar} from 'react-native-paper';
import {CloseButton} from '../components/IconButtons';
import CountModal from '../components/CountModal';
import Toast from 'react-native-toast-message';
import PayTypeModal from '../components/PayTypeModal';
type InviteFriendsProps = {
  profileImg: string;
  userName: string;
};
type HashtagItem = {
  text: string;
};

interface ListItemProps {
  item: Array<{
    title: string;
    onPress?: () => void;
    hashtag?: HashtagItem[];
    maxHeadCount?: string;
    inviteFriends?: InviteFriendsProps[];
    payType?: string;
  }>;
}
export default function GroupCreateScreen({
  navigation,
  route,
}: GroupCreateScreenProp) {
  const {imageUri, hashtag} = route.params;

  const [img, setImg] = useState(imageUri);
  const [visibleModal, setVisibleModal] = useState(false);
  const [headCount, setHeadCount] = useState('0');
  const [count, setCount] = useState('0');

  const profileImg =
    'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMDVfMjYz%2FMDAxNjc1NTcyMzM1MjU5.z_Vs1oNW6BjDl02ogzpJIMn7ZpxbIB9wD7sDYXfK18Ag.7dW0E1zx9nMXEywMu2ZoETdBc1aS3PnvyaRBE1y7_Rsg.JPEG.myeonghwadg%2F01.jpg&type=sc960_832';

  const ListItem = ({item}: ListItemProps) => {
    return (
      <>
        {item.map((item, idx) => {
          return (
            <Pressable
              key={idx}
              onPress={item.onPress}
              android_ripple={{color: '#cacaca'}}
              style={[{width: '100%'}]}>
              <View style={[styles.listItemContainer]}>
                <Text style={[styles.listItemTitle]}>{item.title}</Text>
                {item.payType && (
                  <Text style={[styles.listItemText]}>{item.payType}</Text>
                )}
                {item.hashtag && (
                  <Text style={[styles.listItemText]}>
                    {item.hashtag.map(item => `${item.text} `)}
                  </Text>
                )}
                {item.maxHeadCount && (
                  <Text style={[styles.listItemText]}>{item.maxHeadCount}</Text>
                )}
                {item.inviteFriends && (
                  <ScrollView
                    style={{
                      //   height: 100,

                      marginTop: '3%',
                      zIndex: 300,
                    }}>
                    {item.inviteFriends.map((item, idx) => (
                      <View key={idx} style={[styles.listItemFriendView]}>
                        <Image
                          source={{
                            uri: item.profileImg,
                            height: 40,
                            width: 40,
                          }}
                          style={{borderRadius: 100, opacity: 1}}
                        />
                        <Text style={[{fontWeight: 'bold'}]}>
                          {item.userName}
                        </Text>
                      </View>
                    ))}
                  </ScrollView>
                )}
              </View>
            </Pressable>
          );
        })}
      </>
    );
  };

  const [inputTitle, setInputTitle] = useState('0');

  const [title, setTitle] = useState<string>('');

  const onChangeTitle = (text: string) => {
    setTitle(text);
    setInputTitle(String(text.length));
  };

  const onPressHashtag = () => {
    navigation.push('Hashtag');
  };

  const onPressVisibleModal = () => {
    setVisibleModal(true);
  };

  const onPressCloseModal = () => {
    setVisibleModal(false);
    setError(false);
  };

  const onChangeHeadCount = (number: string) => {
    const formattedNumber = Number(number) >= 20 ? '20' : number;
    setError(false);
    setCount(formattedNumber);
  };

  const showErrorToast = (text: string) => {
    Toast.show({
      type: 'error',
      text1: text,
      visibilityTime: 1600,
      // text2: 'goood',
    });
  };

  const [error, setError] = useState(false);

  const onPressSubmit = () => {
    const trueState = () => {
      setVisibleModal(false);
      setHeadCount(count);
    };
    const falseState = () => {
      //   showErrorToast('2명이상 입력해주세요.');
      setError(true);
    };

    return Number(count) >= 2 ? trueState() : falseState();
  };

  const onPressInviteFriends = () => {
    navigation.push('SelectFriend');
  };

  const [payTypeModal, setPayTypeModal] = useState(false);
  const onPressPayType = () => {
    setPayTypeModal(true);
  };
  const onClosePayTypeModal = () => {
    setPayTypeModal(false);
  };

  const [payType, setPayType] = useState('더치페이');
  const onPressDutch = () => {
    setPayType('더치페이');
    setPayTypeModal(false);
  };
  const onPressShoot = () => {
    setPayType('내가쏜다');
    setPayTypeModal(false);
  };
  const onPressException = () => {
    setPayType('예외결제');
    setPayTypeModal(false);
  };

  const completedCreateGroup = () => {
    navigation.reset({routes: [{name: 'MainTab'}, {name: 'GroupRoom'}]});
  };

  return (
    <>
      <Appbar.Header
        style={{
          backgroundColor: 'white',
          borderWidth: 1,
          justifyContent: 'space-between',
          paddingHorizontal: '3%',
        }}>
        <CloseButton
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text onPress={completedCreateGroup}>완료</Text>
      </Appbar.Header>
      <CountModal
        visible={visibleModal}
        value={count}
        onChangeText={onChangeHeadCount}
        onRequestClose={onPressCloseModal}
        onPressBG={onPressCloseModal}
        onPressSubmit={onPressSubmit}
        contents={
          <>
            {error && (
              <Text
                style={{
                  color: 'red',
                  position: 'absolute',
                  top: 4,
                  fontSize: 12,
                }}>
                2인 이상
              </Text>
            )}
          </>
        }
      />
      <PayTypeModal
        visible={payTypeModal}
        onRequestClose={onClosePayTypeModal}
        onPressBG={onClosePayTypeModal}
        items={[
          {title: '더치페이', onPress: onPressDutch},
          {title: '내가쏜다', onPress: onPressShoot},
          {title: '예외결제', onPress: onPressException},
        ]}
      />
      <ScrollView style={{flex: 1}}>
        <View style={[styles.headContainer]}>
          <Image
            source={{uri: img, width: 120, height: 120}}
            style={[styles.imageStyle]}
          />
          <BorderInput
            placeholder="그룹의 이름을 입력해주세요."
            inputStyle={[styles.inputStyle]}
            containerStyle={[styles.inputContainerStyle]}
            absoluteText={`${inputTitle}/20`}
            maxLength={20}
            absoluteTextStyle={[styles.absoluteText]}
            value={title}
            onChangeText={onChangeTitle}
          />
        </View>
        <View style={[styles.empty]} />
        <View style={[styles.optionListContainer]}>
          <ListItem
            item={[
              {
                title: '결제방식',
                payType: payType,
                onPress: onPressPayType,
              },
              {
                title: '해시태그',
                hashtag: hashtag,
                onPress: onPressHashtag,
              },
              {
                title: '최대 인원수',
                maxHeadCount: headCount,
                onPress: onPressVisibleModal,
              },
              {
                title: '친구초대',
                inviteFriends: [
                  {profileImg: profileImg, userName: '황서은'},
                  {profileImg: profileImg, userName: '황서은'},
                  {profileImg: profileImg, userName: '황서은'},
                ],
                onPress: onPressInviteFriends,
              },
            ]}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  headContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: '8%',
    rowGap: 8,
  },
  imageContainer: {},
  imageStyle: {borderRadius: 4},
  borderInputContainer: {
    // paddingBottom: '3%',
  },
  inputContainerStyle: {justifyContent: 'center', alignItems: 'center'},
  inputStyle: {width: '80%', paddingLeft: 4, paddingRight: 4},
  listItemContainer: {
    marginHorizontal: '5%',
    paddingVertical: '4%',
    borderBottomWidth: 0.3,
    borderColor: '#eaeaea',
    rowGap: 2,
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionListContainer: {
    paddingVertical: '0%',
    backgroundColor: 'white',
    // flex: 1,
  },
  empty: {
    height: 10,
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderColor: '#dadada',
  },
  listItemText: {
    color: '#9a9a9a',
  },
  listItemFriendView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
    paddingVertical: '1%',
    zIndex: 200,
  },
  absoluteText: {
    right: 22,
    top: 0,
    color: '#9a9a9a',
    fontSize: 12,
  },
});
