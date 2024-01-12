import {useState} from 'react';
import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale, scale, verticalScale} from '../utils/scaling';
import {truncateMessage} from '../utils/truncate';
import IconFeather from 'react-native-vector-icons/Feather';
import {MyTabProp} from '../types/RootStackProps';
import PressableBottomWidthItem from '../components/PressableBottomWidthItem';
import PressableListItem from '../components/PressableListItem';
import PressableItem from '../components/PressableItem';
// import {InfoButton} from '../../components/InfoButton';
// import MySettingButton from '../../components/MySettingButton';

const MyTab = ({navigation}: MyTabProp) => {
  const [more, setMore] = useState<boolean>(false);

  return (
    <ScrollView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <View style={{marginHorizontal: '5%'}}>
        <View
          id="FirstView"
          style={{
            height: scale(120),

            backgroundColor: 'white',
            flexDirection: 'row',
            // justifyContent: 'space-between',
            alignItems: 'center',
            columnGap: 10,
          }}>
          <Image
            source={{
              uri: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMDVfMjYz%2FMDAxNjc1NTcyMzM1MjU5.z_Vs1oNW6BjDl02ogzpJIMn7ZpxbIB9wD7sDYXfK18Ag.7dW0E1zx9nMXEywMu2ZoETdBc1aS3PnvyaRBE1y7_Rsg.JPEG.myeonghwadg%2F01.jpg&type=sc960_832',
              width: moderateScale(70),
              height: scale(70),
            }}
            style={{borderRadius: 100}}
            resizeMode="cover"
          />
          <View style={{width: '50%', height: '50%', rowGap: 3}}>
            <Text
              style={{
                textAlign: 'left',
                fontSize: 16,
                color: 'black',
                fontWeight: '500',
              }}>
              Name
            </Text>
            {/* DESCRIPTION */}
            {/* {more ? (
              <Pressable
                onPress={() => setMore(false)}
                style={{
                  height: verticalScale(53),
                  width: '100%',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    textAlign: 'left',
                    color: 'black',
                  }}>
                  descriptionsㅁㅁfdsafdㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㄴㄹㅇㄴㅁㄹasfdasfsafdasfdsafdasfdsadf
                  sdafdasfdasfdsafsadfdsafdsasdfdsafdsafa,
                </Text>
                <IconFeather
                  name="chevron-up"
                  size={24}
                  color="black"
                  style={{textAlign: 'right'}}
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => setMore(true)}
                style={{
                  height: scale(20),
                  width: '90%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    textAlign: 'left',
                    color: 'black',
                  }}>
                  descriptionsdafdsafdㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㄴㄹㅇㄴㅁㄹasfdasfsafdasfdsafdasfdsadf
                  sdafdasfdasfdsafsadfdsafdsasdfdsafdsafa,
                </Text>
                <IconFeather name="chevron-down" size={24} color="black" />
              </Pressable>
            )} */}
          </View>
          <Pressable
            style={{padding: 10, backgroundColor: '#eaeaea', borderRadius: 4}}>
            <Text style={{color: 'black', fontSize: 12}}>프로필 보기</Text>
          </Pressable>
        </View>
        <View
          id="SecondView"
          style={{
            // height: scale(100),

            backgroundColor: 'white',
            flexDirection: 'row',
            borderWidth: 1,
          }}>
          {/* <InfoButton title="title" dataNumber="111" />
          <InfoButton title="title" dataNumber="111" />
          <InfoButton title="title" dataNumber="111" />
          <InfoButton title="title" dataNumber="111" /> */}
        </View>
        {/* <View id="ThirdView" style={{}}>
          <Pressable
            style={{padding: 8, borderWidth: 1}}
            // onPress={() => navigation.push('Calculate')}
          >
            <Text style={{color: 'black'}}>술값 계산기</Text>
          </Pressable>
        </View> */}
        <View
          id="FourthView"
          style={{
            // height: scale(250),

            backgroundColor: 'white',
          }}>
          {/* <PressableBottomWidthItem title="친구관리" marginHorizontal /> */}
          <PressableListItem
            title="친구목록"
            titleStyle={{fontSize: 16}}
            layoutStyle={{
              paddingVertical: '5%',
              borderBottomWidth: 0.4,
              borderColor: '#eaeaea',
            }}
            containerStyle={{}}
          />
          <PressableListItem
            title="대리내역 / 친구관리 / 앱 설정"
            titleStyle={{fontSize: 16}}
            layoutStyle={{
              paddingVertical: '5%',
              borderBottomWidth: 0.4,
              borderColor: '#eaeaea',
            }}
            containerStyle={{}}
          />

          {/* <MySettingButton title="나의 설정" />
          <MySettingButton title="나의 설정" /> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default MyTab;
