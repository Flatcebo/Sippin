import {useCallback, useMemo, useRef} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import homeBannerListData from '../lib/homeBannerListData';
import {keyExtractor} from '../lib/keyExtractor';
// import {ComponentItemProps} from '../types/ComponentItemProps';
import {verticalScale} from '../utils/scaling';

export default function ImageFlatList(props: any) {
  const flatListRef = useRef<FlatList>(null);
  const snapToOffsets = useMemo(
    () =>
      homeBannerListData.map((_, idx) => idx * Dimensions.get('window').width),
    [homeBannerListData],
  );

  const renderItem = useCallback(({item}: any) => {
    // const totalPageNumber = item.reduce(
    //   (acc: any, pageItem: any) => acc + pageItem.id,
    //   0,
    // );
    // console.log(totalPageNumber);
    // console.log(new Array(item.id).reduce((acc, item) => acc.length));
    return (
      <View key={item.id} style={styles.renderItemLayoutView}>
        <Image
          source={{
            uri: item.imageUri,
            width: props.imageWidth,
            height: props.imageHeight,
          }}
          resizeMode="cover"
        />
        <View style={[styles.pageNumberView]}>
          <Text style={{color: 'white', fontSize: 11}}>
            {item.id} / {item.length || '10'}
          </Text>
        </View>

        <View style={styles.renderItemTextView}>
          {/* <Text style={styles.renderItemTitleText}>{item.title}</Text> */}
          <Text style={styles.renderItemDescText}>{item.description}</Text>
        </View>
      </View>
    );
  }, []);
  return (
    <FlatList
      ref={flatListRef}
      data={props.data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      // ListHeaderComponent={renderHeader}
      horizontal
      showsHorizontalScrollIndicator={false}
      removeClippedSubviews
      initialNumToRender={10}
      snapToOffsets={snapToOffsets}
      decelerationRate={0} // 스크롤 중지 감속 비율 설정
      // style={{width: '100%', height: '100%'}}
    />
  );
}

const styles = StyleSheet.create({
  renderItemLayoutView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  renderItemTextView: {
    position: 'absolute',
    bottom: '20%',
  },
  renderItemTitleText: {
    fontSize: 26,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: '3%',
  },
  renderItemDescText: {
    textAlign: 'center',
    fontWeight: '400',
    width: verticalScale(250),
    color: 'white',
  },
  pageNumberView: {
    position: 'absolute',
    width: 50,
    zIndex: 100,
    right: -0,
    top: -0,
    backgroundColor: '#00000050',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 4,
    paddingVertical: 2,
  },
});
