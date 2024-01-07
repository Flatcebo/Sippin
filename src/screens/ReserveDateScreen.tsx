import React, {useEffect, useState} from 'react';
import {
  Animated,
  Button,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import BottomButton from '../components/BottomButton';
// import {CollapsibleHeaderV1} from '../components/CollapsibleHeader';
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
export default function ReserveDateScreen() {
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

  const handlePress = () => {
    setIsChecked(!isChecked);
  };

  const [greeting, setGreeting] = useState(''); // State to store greeting text
  const [inputValue, setInputValue] = useState('');
  const [showTextInput, setShowTextInput] = useState(false);

  const fadeInAnimation = new Animated.Value(0);

  useEffect(() => {
    // Initial animation to fade in the greeting text
    Animated.timing(fadeInAnimation, {
      toValue: 1,
      duration: 1000, // 1000 milliseconds
      useNativeDriver: true,
    }).start();

    // After 3 seconds, show the TextInput
    const timeoutId = setTimeout(() => {
      setShowTextInput(true);
      Animated.timing(fadeInAnimation, {
        toValue: 1,
        duration: 3000, // 1000 milliseconds
        useNativeDriver: true,
      }).start();
    }, 2000);

    return () => clearTimeout(timeoutId); // Clear the timeout on component unmount
  }, []);

  const handleTextInputChange = (text: string) => {
    setInputValue(text);

    // Check if the input value is '0000'
    if (text === '0000') {
      // If it matches, update the greeting text
      setGreeting('반갑습니다!');
    }
  };

  return (
    <>
      <ScrollView style={{height: '100%', backgroundColor: 'white'}}>
        <View
          style={{height: 100, justifyContent: 'center', alignItems: 'center'}}>
          {/* Animated greeting text */}
          <Animated.Text style={{opacity: fadeInAnimation}}>
            {greeting ? greeting : '예약일을 선택해주세요.'}
          </Animated.Text>

          {/* TextInput */}
          {/* {showTextInput && (
            <AnimatedTextInput
              placeholder="Enter your value"
              value={inputValue}
              onChangeText={handleTextInputChange}
              style={{
                borderColor: 'gray',
                borderWidth: 1,
                marginTop: 10,
                padding: 8,
                // opacity: fadeInAnimation,
                backgroundColor: fadeInAnimation,
              }}
            />
          )} */}
        </View>
        {/* <CollapsibleHeaderV1 title="예약하기" submitHeader backVisible /> */}
        <>
          {showTextInput && (
            <Animated.View style={{backgroundColor: fadeInAnimation}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  // columnGap: 2,
                  backgroundColor: '#eaeaea',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 22,
                    fontWeight: '500',
                    // borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#9a9a9a',
                    padding: '3%',
                  }}>
                  12-19
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 22,
                    fontWeight: '500',
                    // borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#9a9a9a',
                    padding: '3%',
                  }}>
                  17:30
                </Text>
              </View>
              <Calendar
                monthFormat={'MM월'}
                // current={'2023-12-20'}
                minDate={minDate.toString()}
                maxDate={maxDate.toString()}
                // theme={{verticalLine: [1221]}}
                // theme={{
                //   todayTextColor: 'black',
                //   textDayFontSize: 10,
                //   textDayFontWeight: '500',
                //   textMonthFontSize: 10,
                //   textMonthFontWeight: 'bold',
                //   textSectionTitleColor: 'rgba(138, 138, 138, 1)',
                // }}
                style={{
                  //   paddingBottom: 30,
                  borderWidth: 1,
                  borderColor: '#cacaca',
                  borderRadius: 10,
                }}

                // renderDay={minDate.toString()}
              />
              <View
                style={{
                  // backgroundColor: 'red',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  rowGap: 6,
                  // columnGap: 10,
                  //   borderTopWidth: 0.4,
                  //   borderColor: '#9a9a9a',
                  paddingTop: 8,
                  marginHorizontal: '5%',
                }}>
                {reserveTimeData.map((item: any) => (
                  //   <View key={item.id}>

                  <Pressable
                    key={item.id}
                    onPress={handlePress}
                    // android_ripple={{color: '#ddd'}}
                    style={({pressed}) => [
                      {
                        width: '20%',
                        backgroundColor: pressed ? '#9a9a9a' : '#e0e0e0',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: '3%',
                        borderRadius: 100,

                        marginHorizontal: '2.5%',

                        //   marginBottom: '3%',
                      },
                    ]}>
                    <Text style={{color: 'black', textAlign: 'center'}}>
                      {item.time}
                    </Text>
                  </Pressable>
                  //   </View>
                ))}
                {/* <DatePicker
              mode="time"
              //   date={new Date()}
              //   onOpenModal={() => {
              //     setCalendar(false);
              //   }}
            /> */}
              </View>
            </Animated.View>
          )}
        </>
      </ScrollView>
      {/* <BottomButton title="선택완료" /> */}
    </>
  );
}
