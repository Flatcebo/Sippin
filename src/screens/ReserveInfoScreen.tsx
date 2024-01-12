import React, {useCallback, useMemo} from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import {InfoReserveRenderItem} from '../components/InfoReserveRenderItem';
import {globalStyles} from '../lib/GlobalStyles';
import {keyExtractor} from '../lib/keyExtractor';
import {format} from 'date-fns';

export default function ReserveInfoScreen({navigation}: any) {
  const reserveData = [
    {
      id: 0,
      title: 'Past1',
      addr: '전남 무안군 삼향읍 대죽서로15번길 34 1층',
      phoneNumber: '010-0000-0000',
      name: '황서은',
      tableNumber: '16',
      reservedAt: '2023-12-21 18:30',
      checkOutedAt: '2023-12-22 03:16',
      state: '결제완료',
      onPress: () => {
        navigation.push('ReserveSuccess');
      },
    },
    {
      id: 1,
      title: 'Past2',
      addr: '전남 무안군 삼향읍 대죽서로15번길 34 1층',
      phoneNumber: '010-0000-0000',
      name: '황서은',
      tableNumber: '16',
      reservedAt: '2023-12-21 18:30',
      checkOutedAt: '2023-12-22 01:16',
      state: '결제완료',
      onPress: () => {
        navigation.push('ReserveSuccess');
      },
    },
    {
      id: 2,
      title: '도모이시 남악점',
      addr: '전남 무안군 삼향읍 대죽서로15번길 34 1층',
      phoneNumber: '010-0000-0000',
      name: '황서은',
      tableNumber: '16',
      reservedAt: '2023-12-23 18:30',
      checkOutedAt: '2023-12-24 01:26',
      state: '진행중',
      onPress: () => {
        navigation.push('ReserveSuccess');
      },
    },
    {
      id: 3,
      title: '무슨가게 어디점',
      addr: '전남 무안군 삼향읍 대죽서로15번길 34 1층',
      phoneNumber: '010-0000-0000',
      name: '황서은',
      tableNumber: '16',
      reservedAt: '2023-12-26 17:30',
      // checkOutedAt: '2023-12-24 01:16',
      state: '진행중',
      onPress: () => {
        navigation.push('ReserveSuccess');
      },
    },
    {
      id: 4,
      title: '무슨가게 어디점',
      addr: '전남 무안군 삼향읍 대죽서로15번길 34 1층',
      phoneNumber: '010-0000-0000',
      name: '황서은',
      tableNumber: '16',
      reservedAt: '2023-12-24 18:30',
      // checkOutedAt: '2023-12-24 01:16',
      state: '진행중',
      onPress: () => {
        navigation.push('ReserveSuccess');
      },
    },
  ];
  const sortedData = useMemo(() => {
    const currentDate = new Date();
    return reserveData.slice().sort((a, b) => {
      const aDate = new Date(a.reservedAt);
      const bDate = new Date(b.reservedAt);

      if (bDate > currentDate && aDate > currentDate) {
        // 이후 예약부터 정렬
        return bDate.getTime() - aDate.getTime();
      } else if (bDate > currentDate) {
        // 현재 날짜 이후의 예약을 먼저 정렬
        return -1;
      } else {
        // 이전 예약 정렬
        return bDate.getTime() - aDate.getTime();
      }
    });
  }, [reserveData]);
  return (
    <>
      <FlatList
        data={sortedData}
        // contentContainerStyle={{height: '100%'}}
        renderItem={InfoReserveRenderItem}
        ListHeaderComponent={
          <View style={{height: '1.5%'}}>
            <Text>hihi</Text>
          </View>
        }
        keyExtractor={(item: any) => item.id}
        style={{height: '100%'}}
      />
    </>
  );
}
