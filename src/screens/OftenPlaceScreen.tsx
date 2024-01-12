import {format} from 'date-fns';
import React, {useCallback, useState} from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import CalendarModal from '../components/CalendarModal';
import ContentListItem from '../components/ContentListItem';
import {globalStyles} from '../lib/GlobalStyles';
import heartListData from '../lib/heartListData';
import {OftenPlaceScreenProp} from '../types/RootStackProps';
export default function OftenPlaceScreen({
  route,
  navigation,
}: OftenPlaceScreenProp) {
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  // const {title} = route.params;
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
      <ContentListItem
        item={item}
        onPressPushContents={onPressPushContents}
        hits
      />
    );
  }, []);
  return (
    <>
      {/* <CollapsibleHeaderV1
        title="지역별"
        backVisible
        homeButton
        headerFooterContents={ */}
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

        {/* <View
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
            </View> */}
      </>
      {/* }
        bottomContents={ */}
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
      {/* } */}
      {/* /> */}
    </>
  );
}
