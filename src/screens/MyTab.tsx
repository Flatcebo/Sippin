import {useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';

import {moderateScale, scale, verticalScale} from '../utils/scaling';
import {MyTabProp} from '../types/RootStackProps';
import PressableListItem from '../components/PressableListItem';

import {globalStyles, SojuColor} from '../lib/GlobalStyles';
import {IconMaterialIcons} from '../lib/Icon';

const MyTab = ({navigation}: MyTabProp) => {
  const PressableListItems = [
    '친구목록',
    '친구관리',
    '대리내역',
    '앱 설정',
    '결제수단',
    '자주가는',
    '즐겨찾기',
    '좋아요한',
    '결제내역',
  ];

  const ListItems = () => (
    <>
      {PressableListItems.map((item, idx) => (
        <PressableListItem
          key={idx}
          title={item}
          titleStyle={{fontSize: 16}}
          layoutStyle={[styles.listItemLayout]}
        />
      ))}
    </>
  );
  return (
    <ScrollView style={[styles.latyout]}>
      <View style={{}}>
        <Pressable
          onPress={() => {
            navigation.push('MyProfile');
          }}
          style={({pressed}) => [
            styles.bottomWidth,
            styles.flexRow,
            pressed && styles.profilePressed,
            styles.profileButton,
          ]}>
          <View style={[globalStyles.marginHorizontal5, styles.profileView]}>
            <Image
              source={{
                uri: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMDVfMjYz%2FMDAxNjc1NTcyMzM1MjU5.z_Vs1oNW6BjDl02ogzpJIMn7ZpxbIB9wD7sDYXfK18Ag.7dW0E1zx9nMXEywMu2ZoETdBc1aS3PnvyaRBE1y7_Rsg.JPEG.myeonghwadg%2F01.jpg&type=sc960_832',
                width: 50,
                height: 50,
              }}
              style={[styles.profileImage]}
              resizeMode="cover"
            />

            <Text style={[styles.profileText]}>플랫</Text>
            <IconMaterialIcons name="keyboard-arrow-right" size={30} />
          </View>
        </Pressable>
      </View>
      <View style={[styles.container]}>
        <ListItems />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  latyout: {flex: 1, backgroundColor: 'white'},
  container: {marginHorizontal: '5%'},
  progressContainer: {
    rowGap: 10,
    marginVertical: '5%',
  },
  bottomWidth: {borderBottomWidth: 0.4, borderColor: '#cacaca'},
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
  profileImage: {borderRadius: 100, marginRight: '5%'},
  profileText: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '70%',
  },
  listItemLayout: {
    paddingVertical: '5%',
    borderBottomWidth: 0.4,
    borderColor: '#eaeaea',
  },
});

export default MyTab;

<View
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
</View>;
{
  /* <View id="ThirdView" style={{}}>
        <Pressable
          style={{padding: 8, borderWidth: 1}}
          // onPress={() => navigation.push('Calculate')}
        >
          <Text style={{color: 'black'}}>술값 계산기</Text>
        </Pressable>
      </View> */
}

//     ---------
//    /  ------/
//   /  ______
//  /   _____/
// /  /
// ---
