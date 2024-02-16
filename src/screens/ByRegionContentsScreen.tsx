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

import FilterItem from '../components/FilterItem';
import heartListData from '../lib/heartListData';
import CalendarModal from '../components/CalendarModal';
import {ByRegionContentsScreenProp} from '../types/RootStackProps';
import {format} from 'date-fns';
import ContentListItem from '../components/ContentListItem';
import {DateData} from 'react-native-calendars';
import EmptyList from '../components/EmptyList';
import DropDownModal from '../components/DropDownModal';
const ByRegionContentsScreen = ({
  route,
  navigation,
}: ByRegionContentsScreenProp) => {
  const {title} = route.params;

  const [visibleCalendar, setVisibleCalendar] = useState(false);

  const [visibleLiquor, setVisibleLiquor] = useState(false);

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

  const [category, setCategory] = useState('');

  const [filterAddr, setFilterAddr] = useState(heartListData);

  useEffect(() => {
    const filteredData = () => {
      const filterAddr = heartListData.filter(item =>
        item.address.includes(title),
      );
      const filterCategory = filterAddr.filter(item =>
        item.category.includes(category),
      );
      setFilterAddr(filterCategory);
    };
    return filteredData();
  }, [title, category]);

  const onPressSortItem = (category: string) => {
    setCategory(category);
    setVisibleLiquor(false);
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

  const onCloseCalendar = () => {
    setVisibleCalendar(false);
  };

  const onCloseLiquor = () => {
    setVisibleLiquor(false);
  };

  return (
    <>
      <View style={{height: '100%'}}>
        <CalendarModal
          visible={visibleCalendar}
          onRequestClose={onCloseCalendar}
          onPressBG={onCloseCalendar}
          monthFormat="M월"
          markedDates={markedSelectedDates}
          onDayPress={onDayPressCalendar}
          onPress={() => {}}
        />
        <DropDownModal
          visible={visibleLiquor}
          onPressBG={onCloseLiquor}
          onRequestClose={onCloseLiquor}
          items={[
            {title: '한식', onPress: () => onPressSortItem('한식')},
            {title: '요리주점', onPress: () => onPressSortItem('요리주점')},
            {title: '포장마차', onPress: () => onPressSortItem('포장마차')},
            {title: '맥주,호프', onPress: () => onPressSortItem('맥주')},
            {title: '펍', onPress: () => onPressSortItem('펍')},
            {title: '이자카야', onPress: () => onPressSortItem('이자카야')},
            {title: '바', onPress: () => onPressSortItem('바')},
            {title: '룸소주방', onPress: () => onPressSortItem('룸소주방')},
            // {title: '와인바'},
            // {title: '재즈바'},
          ]}
        />
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#ffffff',
            alignItems: 'center',
            borderBottomWidth: 0.4,
            borderColor: '#eaeaea',
            height: '6%',
          }}>
          <FilterItem
            title={title}
            iconLocation
            borderRightWidth
            pressableStyle={{borderWidth: 0}}
            style={{}}
            onPress={() => {
              navigation.push('Category');
            }}
          />
          <FilterItem
            title={category || '전체'}
            iconLiquor
            borderRightWidth
            pressableStyle={{borderWidth: 0}}
            style={{}}
            onPress={() => {
              setVisibleLiquor(true);
            }}
          />
          <FilterItem
            title={`${selectedDate}`}
            iconCalendar
            pressableStyle={{}}
            style={{}}
            onPress={() => {
              setVisibleCalendar(true);
            }}
          />
        </View>
        <View style={{height: '94%'}}>
          <FlatList
            data={filterAddr}
            renderItem={renderItem}
            ListEmptyComponent={<EmptyList desc="등록된 업체가 없습니다." />}
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
