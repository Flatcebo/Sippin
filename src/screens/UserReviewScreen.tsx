import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import ReviewListItem from '../components/ReviewListItem';
import {UserReviewScreenProp} from '../types/RootStackProps';
export default function UserReviewScreen({navigation}: UserReviewScreenProp) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${'ㅇㅇㅇ'}님의 리뷰`,
    });
  }, []);

  return (
    <>
      <View
        style={[
          {
            height: 50,
            justifyContent: 'center',
            backgroundColor: 'white',
            paddingHorizontal: '5%',
            borderBottomWidth: 1,
            borderColor: '#eaeaea',
          },
        ]}>
        <Text style={{fontWeight: 'bold'}}>총 {'10'}개</Text>
      </View>
      <ReviewListItem
        shopMode
        onPressName={() => {
          navigation.push('Content', {
            id: 0,
            title: '',
            address: '',
            category: '',
            heart: 10,
            desc: '',
            imageUri: '',
            reviewImageUri: '',
            chat: 1,
            menu: [],
          });
        }}
      />
    </>
  );
}
