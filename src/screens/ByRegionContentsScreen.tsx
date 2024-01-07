import React, {useCallback, useEffect, useState} from 'react';
import {
  Animated,
  FlatList,
  Image,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {CollapsibleHeaderV1} from '../components/CollapsibleHeader';

import FilterItem from '../components/FilterItem';
import {globalStyles} from '../lib/GlobalStyles';
import heartListData from '../lib/heartListData';
import {IconMaterialCommunityIcons, IconOcticons} from '../lib/Icon';

import {scale} from '../utils/scaling';
import {formatNumber} from '../utils/format';
import CalendarModal from '../components/CalendarModal';
import {ByRegionContentsScreenProp} from '../types/RootStackProps';
const ByRegionContentsScreen = ({
  route,
  navigation,
}: ByRegionContentsScreenProp) => {
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const {title} = route.params;
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerShadowVisible: false,
  //     headerTitle: 'hihi',
  //     title: 'hihihi',
  //   });
  //   navigation.setParams({title: 'hihi'});
  // }, [navigation]);

  const renderItem = useCallback(({item}: any) => {
    const onPressPushContents = () => {
      navigation.push('Content', {
        id: item.id,
        title: item.title,
        address: item.address,
        heart: item.heart,
        chat: item.chat,
        imageUri: item.imageUri,
        category: item.category,
        desc: item.desc,
        reviewImageUri: item.reviewImageUri,
        menu: item.menu,
      });
    };

    return (
      <>
        <Pressable
          style={({pressed}) => [
            {
              // width: '100%',
              // height: Platform.OS === 'android' ? scale(300) : scale(300),
              backgroundColor: pressed ? '#eaeaea' : 'white',
              // marginTop: '3%',
              marginBottom: '3%',
              marginHorizontal: '3%',
              borderWidth: 0.4,
              borderColor: '#9a9a9a',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            },
          ]}
          onPress={onPressPushContents}
          key={item.id}>
          <View style={{}}>
            <Image
              source={{uri: item.imageUri}}
              height={scale(180)}
              resizeMode="cover"
              style={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
            />
            <View
              style={[
                {
                  marginHorizontal: '3%',
                  flexDirection: 'row',
                },
              ]}>
              <View
                style={{
                  flex: 1,
                  //   borderWidth: 1,
                  width: '10%',
                  rowGap: 2,
                  marginVertical: '3%',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    // alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    {item.title}
                  </Text>
                  <Text style={[globalStyles.font14]}>{item.category}</Text>
                </View>
                <Text style={[globalStyles.font14, {height: 60}]}>
                  {item.address}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                  }}>
                  <Text style={[globalStyles.font14]}>
                    <IconOcticons name="heart" size={16} color="red" />
                    {formatNumber(item.heart)}
                  </Text>
                  <Text style={[globalStyles.font14]}>
                    <IconMaterialCommunityIcons
                      name="chat-outline"
                      size={17}
                      color="black"
                    />
                    {formatNumber(item.chat)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Pressable>
      </>
    );
  }, []);
  return (
    <>
      <CollapsibleHeaderV1
        title="지역별"
        backVisible
        homeButton
        headerFooterContents={
          <>
            <CalendarModal
              visible={visibleCalendar}
              onRequestClose={() => {
                setVisibleCalendar(false);
              }}
              onPressBG={() => {
                setVisibleCalendar(false);
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <FilterItem
                title={title}
                marginLeft
                pressableStyle={{width: '40%'}}
                style={{fontSize: 14, fontWeight: 'normal'}}
                onPress={() => {
                  navigation.push('Category');
                }}
              />
              <FilterItem
                title="12월 30일"
                marginRight
                pressableStyle={{width: '40%'}}
                style={{fontSize: 14, fontWeight: 'normal'}}
                onPress={() => {
                  setVisibleCalendar(true);
                }}
              />
            </View>
          </>
        }
        bottomContents={
          <>
            <View style={{height: '92%', marginTop: '3%'}}>
              <FlatList
                data={heartListData}
                renderItem={renderItem}
                // onScroll={handleScrolls}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                // style={{marginHorizontal: '3%'}}
              />
            </View>
          </>
        }
      />
    </>
  );
};

export default ByRegionContentsScreen;
