import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useCallback} from 'react';
import {
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {FlatList, Image, Text, View} from 'react-native';
import {IconEntypo, IconMaterialIcons} from '../lib/Icon';
import {NavigationProp} from '../types/RootStackProps';
import {maskStringRegex} from '../utils/format';
import EmptyList from './EmptyList';
import ReviewSortModal from './ReviewSortModal';
interface ReviewItem {
  id: number;
  desc: string;
  score: string;
  name: string;
  createdAt: string;
  userImageUri: string;
}

interface ReviewListItemProps {
  //   data: ReviewItem[];
  sortBar?: boolean;
  shopMode?: boolean;
  onPressName?: () => void;
}
export default function ReviewListItem({
  sortBar,
  shopMode,
  onPressName,
}: ReviewListItemProps) {
  const navigation = useNavigation<NavigationProp>();
  const [reviewData, setReviewData] = useState([
    {
      id: 0,
      name: '황서은',
      shopName: '포차천국 산정점',
      desc: '정말 깨끗하고 너무 좋아요.라면도 맛있고 라면도 맛있네요.',
      score: '5.0',
      createdAt: '2023-01-12',
      userImageUri:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMDVfMjYz%2FMDAxNjc1NTcyMzM1MjU5.z_Vs1oNW6BjDl02ogzpJIMn7ZpxbIB9wD7sDYXfK18Ag.7dW0E1zx9nMXEywMu2ZoETdBc1aS3PnvyaRBE1y7_Rsg.JPEG.myeonghwadg%2F01.jpg&type=sc960_832',
    },
    {
      id: 1,
      name: '황서은',
      shopName: '포차천국 산정점',
      desc: '정말 깨끗하고 너무 좋아요.라면도 맛있고 라면도 맛있네요.',
      score: '4.7',
      createdAt: '2023-02-13',
      userImageUri:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMDVfMjYz%2FMDAxNjc1NTcyMzM1MjU5.z_Vs1oNW6BjDl02ogzpJIMn7ZpxbIB9wD7sDYXfK18Ag.7dW0E1zx9nMXEywMu2ZoETdBc1aS3PnvyaRBE1y7_Rsg.JPEG.myeonghwadg%2F01.jpg&type=sc960_832',
    },
  ]);
  const reviewImageData = [
    {
      id: 0,
      reviewImageUri:
        'https://postfiles.pstatic.net/20160925_74/lovexoxo0217_1474733696748Awv7y_JPEG/image_3450045751474733680585.jpg?type=w966',
    },
    {
      id: 1,
      reviewImageUri:
        'https://postfiles.pstatic.net/20160925_74/lovexoxo0217_1474733696748Awv7y_JPEG/image_3450045751474733680585.jpg?type=w966',
    },
    {
      id: 2,
      reviewImageUri:
        'https://postfiles.pstatic.net/20160925_74/lovexoxo0217_1474733696748Awv7y_JPEG/image_3450045751474733680585.jpg?type=w966',
    },
    {
      id: 3,
      reviewImageUri:
        'https://postfiles.pstatic.net/20160925_74/lovexoxo0217_1474733696748Awv7y_JPEG/image_3450045751474733680585.jpg?type=w966',
    },
  ];
  const ReviewImageItem = useCallback(
    ({item, idx}: any) => (
      <Image
        key={idx}
        source={{uri: item.reviewImageUri, height: 90, width: 90}}
        style={{marginRight: 1, borderRadius: 4}}
      />
    ),
    [],
  );
  const renderReviewItem = useCallback(({item, idx}: any) => {
    const maskedName = maskStringRegex(item.name, 1);
    return (
      <View key={idx} style={[styles.reviewItemLayout]}>
        <View style={[styles.reviewItemHeaderContainer]}>
          {shopMode ? null : (
            <Image
              source={{uri: item.userImageUri, width: 50, height: 50}}
              style={{borderRadius: 100}}
            />
          )}

          <View style={[styles.reviewItemNameView]}>
            <Pressable
              onPress={onPressName}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // width: '30%',
                zIndex: 100,
              }}>
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                {shopMode ? item.shopName : maskedName}
              </Text>
              <IconMaterialIcons
                name="keyboard-arrow-right"
                size={20}
                color={'black'}
              />
            </Pressable>
            <Text>{item.score}</Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              textAlignVertical: 'top',
            }}>
            {item.createdAt}
          </Text>
        </View>
        <View style={{paddingHorizontal: '5%', marginBottom: '3%'}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={reviewImageData}
            renderItem={ReviewImageItem}
            contentContainerStyle={{paddingVertical: '3%'}}
            keyExtractor={(item, idx) => idx.toString()}
          />
        </View>
        <View style={[styles.reviewItemDescView]}>
          <Text>{item.desc}</Text>
        </View>
      </View>
    );
  }, []);
  const [sort, setSort] = useState(false);

  interface SortListProp {
    onPress?: () => void;
    title: string;
    icon?: boolean;
    pressableStyle?: StyleProp<ViewStyle>;
  }
  const SortList: React.FC<SortListProp> = ({
    onPress,
    title,
    icon,
    pressableStyle,
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.sortButton, pressableStyle]}>
        <Text style={{fontWeight: 'bold'}}>{title}</Text>
        {icon && <IconEntypo name="chevron-down" size={18} />}
      </TouchableOpacity>
    );
  };

  const [sortLable, setSortLabel] = useState('최근 게시순');
  const sortOptions = [
    {sortOption: 'recent', label: '최근 게시순'},
    {sortOption: 'scoreAsc', label: '별점 높은순'},
    {sortOption: 'scoreDesc', label: '별점 낮은순'},
    // 다른 정렬 옵션 추가
  ];

  const handleSort = (sortOption: string, label: string) => {
    const recent = [...reviewData].sort(
      (a, b) =>
        Number(b.createdAt.replaceAll('-', '')) -
        Number(a.createdAt.replaceAll('-', '')),
    );
    const scoreAsc = [...reviewData].sort(
      (a, b) => Number(b.score) - Number(a.score),
    );
    const scoreDesc = [...reviewData].sort(
      (a, b) => Number(a.score) - Number(b.score),
    );
    let sortedData = recent;
    switch (sortOption) {
      case 'recent':
        sortedData = recent;
        break;
      case 'scoreAsc':
        sortedData = scoreAsc;
        break;
      case 'scoreDesc':
        sortedData = scoreDesc;
        break;
      default:
        sortedData = recent;
        break;
    }

    // console.log(`Sorting by: ${sortOption}`);
    // console.log(sortedData);
    setSort(false);
    setSortLabel(label);
    setReviewData(sortedData);
  };
  const onPressVisibleSortModal = () => {
    setSort(true);
  };
  const onPressDisableSortModal = () => {
    setSort(false);
  };
  //   useEffect(() => {

  //   }, [reviewData]);

  //   console.log(reviewData);
  return (
    <>
      {sortBar && (
        <View style={[styles.sortView]}>
          <SortList icon title={sortLable} onPress={onPressVisibleSortModal} />

          {sort && (
            <ReviewSortModal
              visible={sort}
              onPressBG={onPressDisableSortModal}
              onRequestClose={onPressDisableSortModal}
              contents={
                <>
                  {sortOptions.map((item, idx) => {
                    return (
                      <View key={idx}>
                        <SortList
                          title={item.label}
                          onPress={() => {
                            handleSort(item.sortOption, item.label);
                          }}
                          pressableStyle={{paddingVertical: '5%'}}
                        />
                      </View>
                    );
                  })}
                </>
              }
            />
          )}
        </View>
      )}
      <FlatList
        data={reviewData}
        showsVerticalScrollIndicator={false}
        renderItem={renderReviewItem}
        keyExtractor={(item, idx) => idx.toString()}
        ListEmptyComponent={EmptyList({desc: '작성된 리뷰가 없습니다.'})}
      />
    </>
  );
}

const styles = StyleSheet.create({
  reviewItemLayout: {
    backgroundColor: 'white',
    paddingTop: 10,
  },
  reviewItemHeaderContainer: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    paddingVertical: 10,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  reviewItemNameView: {
    width: '65%',
    paddingHorizontal: '2%',
    paddingVertical: '1%',
  },
  reviewItemDescView: {
    borderBottomWidth: 0.4,
    borderColor: '#9a9a9a',
    paddingBottom: 50,
    marginHorizontal: '5%',
  },
  sortView: {
    backgroundColor: 'white',
    // paddingHorizontal: '5%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
  },
  sortButton: {
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
});
