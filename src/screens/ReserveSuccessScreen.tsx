import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ContainerItem from '../components/ContainerItem';
import {globalStyles} from '../lib/GlobalStyles';

export default function ReserveSuccessScreen() {
  return (
    <ScrollView style={{paddingTop: '3%'}}>
      <ContainerItem
        title="경성밥상 남악점"
        topContents={
          <Text style={[globalStyles.fontBold18, {color: '#571d1ddb'}]}>
            오후 6시 30분부터
          </Text>
        }
        items={[
          '테이블 번호 : T-1',
          '예약일시 : 2024년 1월 2일 16:49',
          '예약번호 : a4554E459rq21524',
        ]}
      />
      <ContainerItem
        title="메뉴정보"
        items={['• 해물라면', '• 오코노미야끼']}
        bottomContents={
          <Text style={[globalStyles.fontBold16, {marginTop: 6}]}>
            총 26,900원
          </Text>
        }
      />
      <ContainerItem
        title="예약자 정보"
        items={['예약자 : 황서은', '전화번호 : 010-5554-6667']}
      />
      <ContainerItem
        title="결제 예상 금액"
        // items={['주문금액 : 26,900원', '할인금액 : 3000원']}
        // items={['주문금액', '26,900원']}
        containerStyle={{marginBottom: 0}}
        betweenItem={[
          {left: '주문금액', right: '26,900원'},
          {left: '할인금액', right: '- 3,000원'},
        ]}
        bottomContents={
          <View
            style={[
              //   styles.marginContents,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 8,
              },
            ]}>
            <Text style={[globalStyles.fontBold16]}>총 금액</Text>
            <Text style={[globalStyles.fontBold16]}>23,900원</Text>
          </View>
        }
      />
      <View style={[styles.container]}>
        <View
          style={[
            styles.marginContents,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: '5%',
            },
          ]}>
          <Text style={[globalStyles.fontBold16, {textAlign: 'right'}]}>
            결제수단
          </Text>
          <Text
            style={[
              globalStyles.font16,
              {textAlign: 'right', color: '#9a9a9a'},
            ]}>
            계좌이체
          </Text>
        </View>
      </View>
      <View style={{height: 30}}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: '3%',
    borderBottomWidth: 0.4,
    borderColor: '#dadada',
  },
  marginContents: {
    marginHorizontal: '5%',
    paddingVertical: '5%',
  },
});
