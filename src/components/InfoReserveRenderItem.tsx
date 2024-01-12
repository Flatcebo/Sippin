import {useCallback} from 'react';
import {Pressable, View} from 'react-native';
import {Text} from 'react-native-paper';
import {globalStyles} from '../lib/GlobalStyles';
import {format} from 'date-fns';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/RootStackProps';

export const InfoReserveRenderItem = ({item}: any) => {
  // const navigation = useNavigation<any>();
  const currentDate = new Date();
  const targetDate = new Date(item.reservedAt);
  const formattedReservedAtHH = format(new Date(item.reservedAt), 'HH:mm');
  const formattedReservedAtYY = format(new Date(item.reservedAt), 'yyyy-MM-dd');
  const formattedCheckOutedAt = item.checkOutedAt
    ? format(new Date(item.checkOutedAt), 'HH:mm')
    : '';

  // 현재 시간보다 예약시간이 이후라면
  return (
    <Pressable
      key={item.id}
      onPress={item.onPress}
      style={{
        backgroundColor: 'white',
        marginHorizontal: '5%',
        // marginBottom: '1.5%',
        marginBottom: '3%',
        elevation: 4,
        borderRadius: 10,
        // height: '100%',
      }}>
      {item.checkOutedAt ? (
        // 예약시간이 현재 시간 이후인 경우
        <>
          <View
            style={[
              {
                paddingVertical: '3%',
              },
            ]}>
            <View
              style={[
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: '5%',
                  elevation: 4,
                },
              ]}>
              <Text
                style={[
                  globalStyles.fontBold14,
                  {fontSize: 12, color: '#3a3a3a'},
                ]}>
                {formattedReservedAtYY}
              </Text>
              <Text
                style={[
                  globalStyles.fontBold16,
                  {color: item.checkOutedAt ? '#5a5a5a' : '#ff4d4d'},
                ]}>
                {item.checkOutedAt ? '결제완료' : '진행중'}
              </Text>
            </View>
            <View
              style={[
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: '3%',
                  marginBottom: '1%',
                },
              ]}>
              <Text style={[globalStyles.fontBold16, {color: '#cacaca'}]}>
                {item.title}
              </Text>

              <Text style={[globalStyles.fontBold16, {color: '#cacaca'}]}>
                No.{item.tableNumber} {formattedReservedAtHH} ~ {''}
                {formattedCheckOutedAt}
              </Text>
            </View>

            {/* {item.checkOutedAt && (
                <Text style={[globalStyles.fontBold16]}>
                  {item.checkOutedAt}
                </Text>
              )} */}

            <Text
              style={[
                globalStyles.fontBold14,
                {
                  marginHorizontal: '3%',
                  marginBottom: '3%',
                  height: 40,
                  color: '#cacaca',
                },
              ]}>
              {item.addr}
            </Text>
            <View
              style={{
                marginHorizontal: '3%',
                // justifyContent: 'flex-end',
                alignItems: 'flex-end',
                // borderWidth: 1,
              }}>
              <Text style={[globalStyles.fontBold14, {color: '#cacaca'}]}>
                {item.phoneNumber}
              </Text>
              <Text style={[globalStyles.fontBold14, {color: '#cacaca'}]}>
                {item.name}
              </Text>
            </View>
          </View>
        </>
      ) : (
        // 예약시간이 현재 시간 이전인 경우
        <>
          <View
            style={[
              {
                paddingVertical: '3%',
                // paddingBottom: '5%',
              },
            ]}>
            <View
              style={[
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: '5%',
                  elevation: 4,
                },
              ]}>
              <Text
                style={[
                  globalStyles.fontBold14,
                  {fontSize: 12, color: '#3a3a3a'},
                ]}>
                {formattedReservedAtYY}
              </Text>
              <Text style={[globalStyles.fontBold16, {color: '#ff4d4d'}]}>
                {item.checkOutedAt || item.reservedAt < new Date()
                  ? '결제완료'
                  : '진행중'}
              </Text>
            </View>
            <View
              style={[
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: '5%',
                  marginBottom: '1%',
                },
              ]}>
              <Text
                style={[{color: '#3a3a3a', fontWeight: 'bold', fontSize: 16}]}>
                {item.title}
              </Text>

              <Text
                style={[{color: '#3a3a3a', fontWeight: 'bold', fontSize: 16}]}>
                No.{item.tableNumber} {formattedReservedAtHH} ~ {''}
                {formattedCheckOutedAt}
              </Text>
            </View>

            {/* {item.checkOutedAt && (
              <Text style={[globalStyles.fontBold16]}>
                {item.checkOutedAt}
              </Text>
            )} */}

            <Text
              style={[
                globalStyles.fontNormal14,
                {
                  marginHorizontal: '5%',
                  marginBottom: '3%',
                  height: 40,
                  color: '#3a3a3a',
                },
              ]}>
              {item.addr}
            </Text>
            <View
              style={{
                marginHorizontal: '5%',
                // justifyContent: 'flex-end',
                alignItems: 'flex-end',
                // borderWidth: 1,
              }}>
              <Text style={[globalStyles.fontBold14, {color: '#3a3a3a'}]}>
                {item.phoneNumber}
              </Text>
              <Text style={[globalStyles.fontBold14, {color: '#3a3a3a'}]}>
                {item.name}
              </Text>
            </View>
          </View>
        </>
      )}
    </Pressable>
  );
};
