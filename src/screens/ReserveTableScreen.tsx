import {format, parse} from 'date-fns';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DateData} from 'react-native-calendars';
import DatePicker from 'react-native-date-picker';
import BottomButton from '../components/BottomButton';
import CalendarModal from '../components/CalendarModal';
import FilterItem from '../components/FilterItem';
import TableModal from '../components/TableModal';
import {globalStyles, SojuColor} from '../lib/GlobalStyles';
import {
  IconFeather,
  IconIonicons,
  IconMaterialCommunityIcons,
} from '../lib/Icon';
import {ReserveTableScreenProp} from '../types/RootStackProps';

export default function ReserveTableScreen({
  navigation,
}: ReserveTableScreenProp) {
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const [visibleTimePicker, setVisibleTimePicker] = useState(false);
  const [visibleTableModal, setVisibleTableModal] = useState(false);
  const [markedDates, setMarkedDates] = useState<any>({});

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'M월 dd일'),
  );
  const [selectedTime, setSelectedTime] = useState(
    format(new Date(), 'HH시 mm분'),
  );

  const dateObject = parse(selectedTime, 'HH시 mm분', new Date());

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
  const onConfirmDatePicker = (dates: Date) => {
    setSelectedTime(format(dates, 'HH시 mm분'));
    setVisibleTimePicker(false);
  };
  const onPressVisibleDatePicker = () => {
    setVisibleTimePicker(true);
  };
  const onPressVisibleCalendar = () => {
    setVisibleCalendar(true);
  };
  const invisibleCalendarModal = () => {
    setVisibleCalendar(false);
  };
  const invisibleTableModal = () => {
    setVisibleTableModal(false);
  };
  const onCancelDatePicker = () => {
    setVisibleTimePicker(false);
  };

  const onPressVisibleTable = () => {
    setVisibleTableModal(true);
    // setTextColor(true);
  };

  const onPressTableModalCheckButton = () => {
    setVisibleTableModal(false);
    navigation.push('ReserveOrderList', {title: 'T-1'});
  };

  // const onPressInTextColor = () => {
  //   setTextColor(true);
  // };
  // const onPressOutTextColor = () => {
  //   setTextColor(false);
  // };

  const DateContents = () => (
    <View style={[styles.dateContentsContainer]}>
      <FilterItem
        title={`${selectedDate}`}
        pressableStyle={[styles.filterItemPressable]}
        style={[styles.filterItemText]}
        onPress={onPressVisibleCalendar}
        content={
          <IconMaterialCommunityIcons name="calendar-month-outline" size={22} />
        }
        height50
        pressedColor
      />

      <FilterItem
        title={`${selectedTime}`}
        pressableStyle={[styles.filterItemPressable]}
        style={[styles.filterItemText]}
        onPress={onPressVisibleDatePicker}
        content={<IconFeather name="clock" size={22} />}
        height50
        pressedColor
      />
    </View>
  );

  // const [textColor, setTextColor] = useState(false);

  const wait = (timeout: any) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(800).then(() => setRefreshing(false));
    Alert.alert('refresh');
  }, []);

  return (
    <>
      <>
        {/* Modals */}
        <View style={{width: '100%'}}>
          <CalendarModal
            visible={visibleCalendar}
            onRequestClose={invisibleCalendarModal}
            onPressBG={invisibleCalendarModal}
            onPress={() => {}}
            monthFormat="M월"
            markedDates={markedSelectedDates}
            onDayPress={onDayPressCalendar}
          />
          <TableModal
            visible={visibleTableModal}
            onRequestClose={invisibleTableModal}
            onPressBG={invisibleTableModal}
            open={visibleTimePicker}
            date={dateObject}
            onConfirm={onConfirmDatePicker}
            onCancel={onCancelDatePicker}
            onPressCheck={onPressTableModalCheckButton}
            modalContents={<DateContents />}
          />
          <DatePicker
            modal
            mode="time"
            open={visibleTimePicker}
            date={dateObject}
            onConfirm={onConfirmDatePicker}
            onCancel={onCancelDatePicker}
          />
        </View>
        {/*  */}
        <DateContents />
      </>

      {/* </View> */}
      <ScrollView
        style={[styles.layout]}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={[styles.container]}>
          <View style={[{marginBottom: '3%'}]}>
            <Text style={[globalStyles.fontBold16, {marginBottom: '3%'}]}>
              1F
            </Text>
            <View style={[styles.tableLayout]}>
              {/* TABLE */}
              <TouchableOpacity
                onPress={onPressVisibleTable}
                activeOpacity={0.3}
                style={[
                  styles.tableView,
                  {
                    backgroundColor:
                      //  visibleTableModal
                      // ? '#35a0143f'
                      // :
                      SojuColor,
                  },
                ]}>
                <Text
                  style={[
                    globalStyles.fontBold14,
                    {
                      color:
                        //  visibleTableModal ? '#9a9a9a' :
                        'black',
                    },
                  ]}>
                  T - 1
                </Text>
                <Text
                  style={{
                    color:
                      //  visibleTableModal ? '#9a9a9a' :
                      'black',
                  }}>
                  4인
                </Text>
              </TouchableOpacity>
              {/*  */}
              <Pressable
                style={({pressed}) => [
                  styles.tableView,
                  {
                    top: 120,
                    backgroundColor: pressed ? '#dadada75' : '#eaeaea',
                  },
                ]}>
                <Text style={[globalStyles.fontBold14, {color: '#9a9a9a'}]}>
                  T - 2
                </Text>
                <Text style={{color: '#9a9a9a'}}>6인</Text>
              </Pressable>
            </View>
          </View>

          <View style={[{marginBottom: '3%'}]}>
            <Text style={[globalStyles.fontBold16, {marginBottom: '3%'}]}>
              2F
            </Text>
            {/*  */}
            <View style={[styles.tableLayout]}></View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: 'white',
  },
  container: {
    marginHorizontal: '5%',
    marginTop: '3%',
  },
  titleView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  titleText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    borderRadius: 10,
    borderColor: '#9a9a9a',
    // padding: '3%',
  },
  tableView: {
    position: 'absolute',
    width: 100,
    height: 60,
    // borderWidth: 1,
    top: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '10%',
    backgroundColor: '#dadada',
  },
  tableLayout: {
    // width: 100,
    height: 400,
    borderWidth: 2,
    borderColor: '#cacaca',
    borderRadius: 4,
  },
  filterItemPressable: {
    width: '50%',
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 0,
    marginBottom: '0%',
  },
  filterItemText: {fontSize: 16, fontWeight: 'bold', marginLeft: 4},
  dateContentsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
{
  /* <View style={[styles.titleView]}>
            <Text style={[styles.titleText, {color: '#9a9a9a'}]}>
              선택한 테이블 : &nbsp;
            </Text>
            <Text style={[styles.titleText, {}]}>T-2</Text>
          </View> */
}
