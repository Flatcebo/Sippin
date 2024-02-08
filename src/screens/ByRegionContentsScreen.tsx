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
import {ImageBackground} from 'react-native';
const ByRegionContentsScreen = ({
  route,
  navigation,
}: ByRegionContentsScreenProp) => {
  const {title} = route.params;
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'M월 d일'),
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
    setSelectedDate(format(new Date(day.dateString), 'M월 d일'));
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
        coordinate: item.coordinate,
      });
    };

    return (
      <>
        <ContentListItem
          item={item}
          onPressPushContents={onPressPushContents}
        />
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
            alignItems: 'center',
            borderBottomWidth: 0.4,
            borderColor: '#eaeaea',
          }}>
          <FilterItem
            title={title}
            IconLocation
            borderRightWidth
            pressableStyle={{borderWidth: 0}}
            style={{}}
            onPress={() => {
              navigation.push('Category');
            }}
          />

          <FilterItem
            title={`${selectedDate}`}
            IconCalendar
            pressableStyle={{}}
            style={{}}
            onPress={() => {
              setVisibleCalendar(true);
            }}
          />
        </View>
        <View style={{height: '100%'}}>
          <FlatList
            data={heartListData}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
          />
        </View>
      </View>
    </>
  );
};

export default ByRegionContentsScreen;
