import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import PressableListItem from '../components/PressableListItem';
import {globalStyles} from '../lib/GlobalStyles';
export default function OrderedListScreen() {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <PressableListItem
        layoutStyle={{borderBottomWidth: 0.4, borderColor: '#9a9a9a'}}
        containerStyle={{
          paddingVertical: '5%',
          marginHorizontal: '5%',
          justifyContent: 'center',
          // flexDirection:'row'
          // alignItems: 'center',
        }}
        titleStyle={[globalStyles.fontBold18]}
        title={'해물라면 X 2'}
        titleContent={
          <View
            style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
                // borderWidth: 1,
              },
            ]}>
            <Text style={[globalStyles.font18, {color: '#9a9a9a'}]}>
              9,000원
            </Text>
          </View>
        }
      />
      <View
        style={[
          {
            marginHorizontal: '5%',
            marginTop: '3%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        ]}>
        <Text style={[globalStyles.fontBold18]}>총 주문 금액</Text>
        <Text style={[globalStyles.font18]}>9,000원</Text>
      </View>
    </ScrollView>
  );
}
