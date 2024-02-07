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
import {Appbar} from 'react-native-paper';
import PressableBottomWidthItem from '../components/PressableBottomWidthItem';
import {Columns} from '../components/RankingTable';
import SearchBar from '../components/SearchBar';
import {globalStyles} from '../lib/GlobalStyles';
import {SearchScreenProp} from '../types/RootStackProps';

export default function SearchScreen({navigation}: SearchScreenProp) {
  const [text, setText] = useState();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <Appbar.Header
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
        }}>
        <Appbar.BackAction
          size={26}
          style={{position: 'absolute', left: 16, zIndex: 200}}
          onPress={() => {
            navigation.pop();
          }}
        />
        <SearchBar
          placeholder="무엇을 검색해볼까요?"
          onPress={() => {
            // navigation.push('Search');
          }}
        />
      </Appbar.Header>
      <>
        <ScrollView style={[{height: '100%', backgroundColor: 'white'}]}>
          <View
            style={[
              globalStyles.marginHorizontal5,
              globalStyles.marginBottom5,
              {marginTop: '3%'},
            ]}>
            <Text style={[globalStyles.fontBold14, {marginBottom: '1%'}]}>
              최근에 검색한 내용
            </Text>
            <View
              style={{
                backgroundColor: 'white',
              }}>
              <PressableBottomWidthItem
                title="ScrollView"
                iconClose
                iconClock
              />
              <PressableBottomWidthItem title="남악" iconClose iconClock />
              <PressableBottomWidthItem
                title="ScrollView"
                iconClose
                iconClock
              />
              <PressableBottomWidthItem
                title="ScrollView"
                iconClose
                iconClock
              />
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
