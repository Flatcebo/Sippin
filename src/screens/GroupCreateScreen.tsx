import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import BorderInput from '../components/BorderInput';
import {GroupCreateScreenProp} from '../types/RootStackProps';
import {Appbar, Searchbar} from 'react-native-paper';
import {CloseButton} from '../components/IconButtons';
type InviteFriendsProps = {
  profileImg: string;
  userName: string;
};
interface ListItemProps {
  item: Array<{
    title: string;
    onPress?: () => void;
    hashtag?: string;
    maxHeadCount?: number;
    inviteFriends?: InviteFriendsProps[];
  }>;
}
export default function GroupCreateScreen({
  navigation,
  route,
}: GroupCreateScreenProp) {
  const {imageUri} = route.params;
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
                {item.hashtag && (
                  <Text style={[styles.listItemText]}>{item.hashtag}</Text>
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
  return (
    <>
      <Appbar.Header style={{backgroundColor: 'white', borderWidth: 1}}>
        <CloseButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      </Appbar.Header>
      <ScrollView style={{flex: 1}}>
        <View style={[styles.headContainer]}>
          <Image
            source={{uri: imageUri, width: 120, height: 120}}
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
          {/* </View> */}
        </View>
        <View style={[styles.empty]} />
        <View style={[styles.optionListContainer]}>
          <ListItem
            item={[
              {
                title: '해시태그',
                hashtag:
                  '#목포 #목포 #목포 #목포 #목포 #목포 #목포 #목포 #목포 #목포 #목포 #목포',
                onPress: onPressHashtag,
              },
              {title: '최대 인원수', maxHeadCount: 14},
              {
                title: '친구초대',
                inviteFriends: [
                  {profileImg: profileImg, userName: '황서은'},
                  {profileImg: profileImg, userName: '황서은'},
                  {profileImg: profileImg, userName: '황서은'},
                ],
              },
            ]}
          />
        </View>
        {/* <Text>친구초대버튼, 스크롤뷰, 초대한 친구내역, 인원제한, 해시태그, </Text> */}
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
