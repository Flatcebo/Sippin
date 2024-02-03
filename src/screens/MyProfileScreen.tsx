import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SojuColor} from '../lib/GlobalStyles';
import {IconEntypo} from '../lib/Icon';
import * as Progress from 'react-native-progress';
import {moderateScale} from '../utils/scaling';
import {MyProfileScreenProp} from '../types/RootStackProps';
import InfoList from '../components/InfoList';
export default function MyProfileScreen({navigation}: MyProfileScreenProp) {
  const onPressProfileModifyButton = () => {
    navigation.push('MyProfileModify');
  };
  const onPressMyInfoModifyButton = () => {
    navigation.push('MyInfoModify', {});
  };
  return (
    <ScrollView style={[styles.layout]}>
      <View style={[styles.container]}>
        <Image
          source={{
            uri: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMDVfMjYz%2FMDAxNjc1NTcyMzM1MjU5.z_Vs1oNW6BjDl02ogzpJIMn7ZpxbIB9wD7sDYXfK18Ag.7dW0E1zx9nMXEywMu2ZoETdBc1aS3PnvyaRBE1y7_Rsg.JPEG.myeonghwadg%2F01.jpg&type=sc960_832',
            width: 110,
            height: 110,
          }}
          style={[styles.profileImage]}
          resizeMode="cover"
        />

        <Text style={[styles.profileText]}>플랫</Text>
        <TouchableOpacity
          style={[styles.profileModifyButton]}
          onPress={onPressProfileModifyButton}>
          <Text style={[styles.profileModifyText]}>프로필 수정</Text>
        </TouchableOpacity>
        <View style={[styles.progressContent]}>
          <Text style={{fontWeight: 'bold', textAlign: 'left'}}>신뢰도</Text>
          <Progress.Bar
            progress={0.1}
            width={moderateScale(320)}
            height={10}
            borderColor={SojuColor}
            color={SojuColor}
            style={{justifyContent: 'center'}}
            // indeterminate
          />
          <IconEntypo
            name="flow-line"
            size={24}
            style={{position: 'absolute', bottom: 4, left: 22}}
          />
        </View>
      </View>
      <View
        style={[
          {
            paddingHorizontal: '5%',
            paddingVertical: '5%',
            backgroundColor: 'white',
          },
        ]}>
        <View style={[styles.myInfoTitleView]}>
          <Text style={[styles.myInfoTitleText]}>나의 정보</Text>
          <TouchableOpacity onPress={onPressMyInfoModifyButton} hitSlop={10}>
            <Text style={[styles.myInfoModifyText]}>수정</Text>
          </TouchableOpacity>
        </View>
        <InfoList />
      </View>
      {/* <MyProfileListItem
        containerPV={true}
        paddingVertical={6}
        items={['나의 정보']}
        onPressNavigationModify={onPressMyInfoModifyButton}
        betweenItems={[
          {left: '아이디', right: 'organicsic@naver.com'},
          {left: '이메일', right: 'organicsic@naver.com'},
          {left: '비밀번호', right: '********'},
          {left: '이름', right: '황서은'},
          {left: '휴대폰번호', right: '010-5554-4798'},
          {
            left: '주소',
            right: '전남 목포시 산정동 양을로41번길 16, 000호',
          },
        ]}
      /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  layout: {flex: 1},
  container: {
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '3%',
  },

  progressContent: {
    rowGap: 10,
  },
  bottomWidth: {borderBottomWidth: 1, borderColor: '#cacaca'},
  flexRow: {
    flexDirection: 'row',
  },
  profilePressed: {
    backgroundColor: '#eaeaea',
  },
  profileButton: {
    paddingVertical: '3%',
  },

  profileView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {borderRadius: 100, marginBottom: 4},
  profileText: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '70%',
    textAlign: 'center',
  },
  profileModifyButton: {
    padding: 2,
  },
  profileModifyText: {
    color: '#5a5a5a',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  myInfoTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
  },
  myInfoTitleText: {fontWeight: 'bold', fontSize: 16},
  myInfoModifyText: {fontSize: 13, textDecorationLine: 'underline'},
  myInfoContentView: {
    borderWidth: 2,
    width: '100%',
    borderRadius: 10,
    marginVertical: 10,
    padding: '3%',
    paddingVertical: '5%',
  },
});
