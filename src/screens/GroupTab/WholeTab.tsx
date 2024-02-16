import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import EmptyList from '../../components/EmptyList';
import GroupListData from '../../data/GroupListData.json';
import {moderateScale, scale} from '../../utils/scaling';
export default function WholeTab() {
  const renderItem = ({item}: any) => {
    return (
      <Pressable
        key={item.id}
        android_ripple={{color: '#cacaca'}}
        style={[styles.renderItemContainer]}>
        <View style={[styles.renderItemView]}>
          <View style={{flex: 0.98, justifyContent: 'center', rowGap: 4}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>{item.title}</Text>
            <Text
              style={{fontSize: 13, color: '#aaaaaa'}}
              numberOfLines={1}
              ellipsizeMode="tail">
              {item.hashtag}
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: '#9a9a9a',
                textAlign: 'left',
              }}>
              {item.headCount}/{item.maxHeadCount}명
            </Text>
          </View>
          <View style={{flex: 0.02}} />
          <View style={{}}>
            <Image
              source={{
                uri: item.imageUrl,
                height: scale(84),
                width: scale(80),
              }}
              style={{borderRadius: 4}}
            />
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <>
      <View style={[styles.filterContainer]}>
        <Pressable style={[styles.filterButton]}>
          <Text style={{fontSize: 13}}>최신순</Text>
        </Pressable>
        <Pressable style={[styles.filterButton]}>
          <Text style={{fontSize: 13}}>추천순</Text>
        </Pressable>
      </View>
      <View style={[styles.container]}>
        <FlatList
          data={GroupListData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={<EmptyList desc="그룹이 존재하지 않습니다." />}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    height: '7%',
    // paddingVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: '3%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eaeaea',
  },
  filterButton: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '3%',
  },
  container: {
    height: '93%',
  },
  renderItemContainer: {
    paddingHorizontal: '5%',
    backgroundColor: 'white',
  },
  renderItemView: {
    borderBottomWidth: 0.4,
    borderColor: '#cacaca',
    paddingVertical: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
