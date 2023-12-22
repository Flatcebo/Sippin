import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FilterBar from '../components/FilterBar';
import FilterItem from '../components/FilterItem';
import PressableBottomWidthItem from '../components/PressableBottomWidthItem';
import {Columns} from '../components/RankingTable';
import {globalStyles} from '../lib/GlobalStyles';
import {IconMaterialCommunityIcons} from '../lib/Icon';
export default function SearchScreen() {
  const [text, setText] = useState();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            // position: 'absolute',
          }}>
          {/* {text && console.log('hi')} */}
          <FilterItem title="내 주변" marginLeft />
          <FilterItem title="인기 검색어" />
          <FilterItem title="인기 검색어" />
          <FilterItem title="인기 검색어" marginRight />
        </ScrollView>
        <ScrollView style={[{height: '100%', backgroundColor: 'white'}]}>
          <View
            style={[
              globalStyles.marginHorizontal5,
              globalStyles.marginVertical5,
            ]}>
            <Text style={[globalStyles.fontBold14, {marginBottom: '1%'}]}>
              최근에 검색한 내용
            </Text>
            <View
              style={{
                backgroundColor: 'white',
                // height: 210,
                // borderWidth: 1,
                // elevation: 4,
                // borderRadius: 10,
              }}>
              <PressableBottomWidthItem title="ScrollView" />
              <PressableBottomWidthItem title="남악" />
              <PressableBottomWidthItem title="ScrollView" />
              <PressableBottomWidthItem title="ScrollView" />
            </View>
          </View>
          <View
            style={[
              globalStyles.marginHorizontal5,
              // globalStyles.marginVertical5,
            ]}>
            <Text style={[globalStyles.fontBold14, {marginBottom: '3%'}]}>
              술집 순위
            </Text>

            <View style={styles.table}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '28%',
                }}>
                <View style={[styles.row]}>
                  <Columns number="1" redNumber stay title="경성주막" />
                  <Columns number="2" redNumber up title="경성주막" />
                  <Columns number="3" redNumber down title="경성주막" />
                  <Columns number="4" stay title="경성주막" />
                  <Columns number="5" stay title="경성주막" />
                </View>
              </View>
              <View style={[styles.row]}>
                <Columns number="6" stay title="경성주막" />
                <Columns number="7" stay title="경성주막" />
                <Columns number="8" stay title="경성주막" />
                <Columns number="9" stay title="경성주막" />
                <Columns number="10" stay title="경성주막" />
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  table: {
    borderColor: 'black',
    flexDirection: 'row',
    marginHorizontal: '3%',
  },
  row: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
