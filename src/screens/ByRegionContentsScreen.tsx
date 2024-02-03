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
import {DateData} from 'react-native-calendars';
const ByRegionContentsScreen = ({
  route,
  navigation,
}: ByRegionContentsScreenProp) => {
  const {title} = route.params;
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'M월 dd일'),
  );
  const [markedDates, setMarkedDates] = useState<any>({});
  const markedSelectedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };
  const onDayPressCalendar = (day: DateData) => {
    setSelectedDate(format(new Date(day.dateString), 'M월 dd일'));
    setVisibleCalendar(false);
  };

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
        <ContentListItem
          item={item}
          onPressPushContents={onPressPushContents}
        />
        {/* <View style={{height: 10}} /> */}
      </>
    );
  }, []);
  return (
    <>
      <View style={{height: '100%'}}>
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
          onDayPress={onDayPressCalendar}
          onPress={() => {}}
        />
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#ffffff',
            justifyContent: 'space-evenly',
            alignItems: 'center',
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
            title={`${selectedDate}`}
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
              />
            }
          />
        </View>
        <View style={{height: '100%'}}>
          <FlatList
            data={heartListData}
            renderItem={renderItem}
            // onScroll={handleScrolls}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            // style={{height: '100%', paddingBottom: 10}}
            contentContainerStyle={{paddingBottom: 50}}
          />
          {/* <View style={{height: '3%'}} /> */}
        </View>
      </View>
    </>
  );
};

export default ByRegionContentsScreen;
