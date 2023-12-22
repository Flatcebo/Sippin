import React, {useCallback, useMemo} from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import {InfoReserveRenderItem} from '../components/InfoReserveRenderItem';
import {globalStyles} from '../lib/GlobalStyles';
import {keyExtractor} from '../lib/keyExtractor';

export default function InfoReserveScreen() {
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
    },
    {
      id: 3,
      title: '무슨가게 어디점',
      addr: '전남 무안군 삼향읍 대죽서로15번길 34 1층',
      phoneNumber: '010-0000-0000',
      name: '황서은',
      tableNumber: '16',
      reservedAt: '2023-12-23 17:30',
      // checkOutedAt: '2023-12-24 01:16',
      state: '진행중',
    },
  ];
  const sortedData = useMemo(() => {
    const currentDate = new Date();
    return reserveData.slice().sort((a, b) => {
      const aDate = new Date(a.reservedAt);
      const bDate = new Date(b.reservedAt);

      if (aDate <= currentDate && bDate <= currentDate) {
        // 날짜가 빠른 순으로 정렬
        return aDate.getTime() - bDate.getTime();
      } else if (aDate <= currentDate) {
        return 1; // a를 앞으로 이동 (true가 위로)
      } else {
        return -1; // b를 앞으로 이동 (false가 아래로)
      }
    });
  }, [reserveData]);

  return (
    <>
      <FlatList
        data={sortedData}
        renderItem={InfoReserveRenderItem}
        keyExtractor={keyExtractor}
      />
    </>
  );
}
