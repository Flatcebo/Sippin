import {format} from 'date-fns';
import React, {useState} from 'react';
import {Button, Pressable, ScrollView, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import BottomButton from '../components/BottomButton';
import PressableBottomWidthItem from '../components/PressableBottomWidthItem';
import {globalStyles} from '../lib/GlobalStyles';
import {ReserveDateScreenProp} from '../types/RootStackProps';
// import {CollapsibleHeaderV1} from '../components/CollapsibleHeader';
export default function ReserveDateScreen({navigation}: ReserveDateScreenProp) {
  const reserveTimeData = [
    {
      id: 0,
      time: '16:30',
    },
    {
      id: 1,
      time: '17:00',
    },
    {
      id: 2,
      time: '17:30',
    },
    {
      id: 3,
      time: '18:00',
    },
    {
      id: 4,
      time: '18:30',
    },
    {
      id: 5,
      time: '19:00',
    },
    {
      id: 6,
      time: '19:30',
    },
    {
      id: 7,
      time: '20:00',
    },
  ];
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const [isChecked, setIsChecked] = useState(false);

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

  const [bottomContents, setBottomContents] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      {/* <CollapsibleHeaderV1 title="예약하기" submitHeader backVisible /> */}
      <ScrollView style={{height: '100%', backgroundColor: 'white'}}>
        <View>
          <Calendar
            monthFormat="M월"
            minDate={minDate.toString()}
            maxDate={maxDate.toString()}
            markedDates={markedSelectedDates}
            onDayPress={day => setSelectedDate(day.dateString)}
            onPress={() => {}}
            style={{borderBottomWidth: 1, borderColor: '#cacaca'}}
          />

          {reserveTimeData.map((item: any) => (
            <PressableBottomWidthItem
              key={item.id}
              title="16:30"
              contents={
                <Text
                  style={[globalStyles.fontBold16, {paddingVertical: '1%'}]}>
                  T : 4
                </Text>
              }
              iconClock
              marginHorizontal
              bottomWidth={0.1}
              onPress={() => {
                navigation.push('ReserveTable', {});
              }}
            />
          ))}
        </View>
      </ScrollView>
      {/* <BottomButton
        title="선택완료"
        onPress={() => {
          navigation.push('ReserveTable', {});
        }}
      /> */}
    </>
  );
}

{
  /* <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            // columnGap: 2,
            backgroundColor: 'white',
            // marginBottom: '3%',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 22,
              fontWeight: '500',
              // borderWidth: 1,
              // borderRadius: 10,
              borderColor: '#cacaca',
              padding: '3%',
              borderBottomWidth: 1.4,
            }}>
            12-19
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 22,
              fontWeight: '500',
              // borderWidth: 1,
              // borderRadius: 10,
              borderColor: '#cacaca',
              padding: '3%',
              borderBottomWidth: 1.4,
            }}>
            17:30
          </Text>
        </View> */
}
