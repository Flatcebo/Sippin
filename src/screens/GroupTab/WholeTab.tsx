import React, {useCallback, useEffect, useState} from 'react';
import {Alert, RefreshControl, Share} from 'react-native';
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
import GroupModal from '../../components/GroupModal';
import GroupListData from '../../data/GroupListData.json';
import {moderateScale, scale} from '../../utils/scaling';
// 추천순은 본인 검색기록을 토대로?
type formattedDataProps = {
  id: number;
  title: string;
  imageUrl: string;
  headCount: number;
  hashtag: string;
  createdAt: string;
};

export default function WholeTab() {
  // const getFormattedData = (): formattedDataProps[] => {
  //   return GroupListData;
  // };

  const [formattedData, setFormattedData] = useState(GroupListData);
  const [visibleModal, setVisibleModal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [groupItems, setGroupItems] = useState<{
    title: string;
    imageUrl: string;
    hashtag: string;
  }>({title: '', imageUrl: '', hashtag: ''});

  const onCloseModal = () => {
    setVisibleModal(false);
  };

  useEffect(() => {
    const recent = [...formattedData].sort(
      (a, b) =>
        Number(b.createdAt.replaceAll('-', '')) -
        Number(a.createdAt.replaceAll('-', '')),
    );
    setFormattedData(recent);
  }, []);

  const renderItem = ({item}: any) => {
    const onPressVisibleModal = () => {
      setGroupItems({
        title: item.title,
        imageUrl: item.imageUrl,
        hashtag: item.hashtag,
      });
      setVisibleModal(true);
    };
    return (
      <Pressable
        onPress={onPressVisibleModal}
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

  const onPressShareButton = () => {
    // 그룹 URL 필요함
    Share.share({message: 'GroupShared'});
  };

  const wait = (timeout: any) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(800).then(() => setRefreshing(false));
    Alert.alert('refresh');
  }, []);
  const onPressRecentButton = () => {
    const recent = [...formattedData].sort(
      (a, b) =>
        Number(b.createdAt.replaceAll('-', '')) -
        Number(a.createdAt.replaceAll('-', '')),
    );
    setFormattedData(recent);
  };

  const onPressRecommendedButton = () => {
    setFormattedData(GroupListData);
  };

  return (
    <>
      <GroupModal
        title={groupItems.title}
        hashtag={groupItems.hashtag}
        imageUrl={groupItems.imageUrl}
        visible={visibleModal}
        onRequestClose={onCloseModal}
        onPressCloseIcon={onCloseModal}
        onPressShareButton={onPressShareButton}
      />
      <View style={[styles.filterContainer]}>
        <Pressable style={[styles.filterButton]} onPress={onPressRecentButton}>
          <Text style={{fontSize: 13}}>최신순</Text>
        </Pressable>
        <Pressable
          style={[styles.filterButton]}
          onPress={onPressRecommendedButton}>
          <Text style={{fontSize: 13}}>추천순</Text>
        </Pressable>
      </View>
      <View style={[styles.container]}>
        <FlatList
          data={formattedData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyList desc="그룹이 존재하지 않습니다." />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
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
