import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as Progress from 'react-native-progress';
import {SojuColor} from '../lib/GlobalStyles';
import {moderateScale} from '../utils/scaling';
import {keyExtractor} from '../lib/keyExtractor';
import {IconEntypo} from '../lib/Icon';
import ReviewListItem from '../components/ReviewListItem';
import {ReviewScreenProp} from '../types/RootStackProps';
import ReviewSortModal from '../components/DropDownModal';

export default function ReviewScreen({navigation}: ReviewScreenProp) {
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        // backgroundColor: color,
      },
    });
  });
  const progressData = [
    {
      id: 0,
      score: '5.0',
      totalReview: 584,
    },
    {
      id: 1,
      score: '4.0',
      totalReview: 160,
    },
    {
      id: 2,
      score: '3.0',
      totalReview: 10,
    },
    {
      id: 3,
      score: '2.0',
      totalReview: 0,
    },
    {
      id: 4,
      score: '1.0',
      totalReview: 3,
    },
  ];

  const totalReview = progressData.reduce(
    (acc, item) => acc + Number(item.totalReview),
    0,
  );

  const totalScore = progressData.reduce(
    (acc, item) => acc + Number(item.score) * item.totalReview,
    0,
  );

  const averageScore = (totalScore / totalReview).toFixed(1);

  const ProgressItem = () => {
    // const
    return (
      <>
        {progressData.map(item => {
          const progressValue = item.totalReview / totalReview;

          return (
            <View
              key={item.id}
              style={{
                flexDirection: 'row',
                columnGap: 6,
                alignItems: 'center',
              }}>
              <Text>{item.score}</Text>
              <Progress.Bar
                progress={progressValue}
                width={moderateScale(130)}
                height={6}
                borderColor={SojuColor}
                color={SojuColor}
                style={{height: 6}}
                // indeterminate
              />
              <Text style={{width: 40}}>{item.totalReview}</Text>
            </View>
          );
        })}
      </>
    );
  };
  const addCommasToNumber = (number: number) => {
    // 숫자를 문자열로 변환 후 정규식을 사용하여 쉼표 추가
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  const formatTotalReview = addCommasToNumber(totalReview);

  return (
    <FlatList
      data={undefined}
      renderItem={undefined}
      keyExtractor={keyExtractor}
      ListHeaderComponent={
        <View style={[styles.layout]}>
          <View style={[styles.container]}>
            <View style={[styles.leftView]}>
              <Text style={{fontSize: 40, fontWeight: 'bold', color: 'black'}}>
                {averageScore}
              </Text>
              <Text style={{fontSize: 12}}>({formatTotalReview})</Text>
            </View>
            <View style={[styles.progressView]}>
              <ProgressItem />
            </View>
          </View>

          <ReviewListItem
            sortBar
            onPressName={() => {
              navigation.push('UserReview');
            }}
          />
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  layout: {flex: 1},
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderBottomWidth: 0.4,
    borderColor: '#9a9a9a',
    paddingVertical: 30,
    backgroundColor: 'white',
  },
  leftView: {flex: 0.3, justifyContent: 'center', alignItems: 'center'},
  progressView: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

('총점수, 별 갯수별 현황표 / 갯수, Sort기능, 최상단으로 가기 버튼, ');
