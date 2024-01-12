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
import {
  IconFeather,
  IconIonicons,
  IconMaterialCommunityIcons,
  IconOcticons,
  IconSimpleLine,
} from '../lib/Icon';

import {scale} from '../utils/scaling';
import {formatNumber} from '../utils/format';
import CalendarModal from '../components/CalendarModal';
import {ByRegionContentsScreenProp} from '../types/RootStackProps';
import {format} from 'date-fns';
import ContentListItem from '../components/ContentListItem';
const ByRegionContentsScreen = ({
  route,
  navigation,
}: ByRegionContentsScreenProp) => {
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const {title} = route.params;
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );
  const [markedDates, setMarkedDates] = useState<any>({});
  const markedSelectedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };
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
      <ContentListItem item={item} onPressPushContents={onPressPushContents} />
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
              monthFormat="M월"
              markedDates={markedSelectedDates}
              onDayPress={day => {
                setSelectedDate(day.dateString);
                setVisibleCalendar(false);
              }}
              onPress={() => {}}
            />

            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#ffffff',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                // borderBottomWidth: 0.4,
                // borderColor: '#9a9a9a',
              }}>
              <FilterItem
                title={title}
                marginLeft
                pressableStyle={{width: '40%'}}
                style={{fontSize: 14, fontWeight: 'normal', marginLeft: 4}}
                onPress={() => {
                  navigation.push('Category');
                }}
                content={<IconIonicons name="location-outline" size={22} />}
              />

              <FilterItem
                title="12월 30일"
                marginRight
                pressableStyle={{width: '40%'}}
                style={{fontSize: 14, fontWeight: 'normal', marginLeft: 4}}
                onPress={() => {
                  setVisibleCalendar(true);
                }}
                content={
                  <IconMaterialCommunityIcons
                    name="calendar-month-outline"
                    size={22}
                    // color="#333"
                  />
                }
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
