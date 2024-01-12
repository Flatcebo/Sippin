import React, {useEffect} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import BottomButton from '../components/BottomButton';
import {globalStyles} from '../lib/GlobalStyles';
import {ReserveTableScreenProp} from '../types/RootStackProps';

export default function ReserveTableScreen({
  navigation,
}: ReserveTableScreenProp) {
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerShadowVisible: false,
  //     headerRight: () => (
  //       <SubmitButton
  //         onPress={() => {
  //           navigation.pop();
  //         }}
  //       />
  //     ),
  //   });
  // }, [navigation]);
  return (
    <>
      {/* <CollapsibleHeaderV1 title="자리예약" backVisible submitHeader /> */}

      <ScrollView style={[styles.layout]}>
        <View style={[styles.container]}>
          <View style={[styles.titleView]}>
            <Text style={[styles.titleText, {color: '#9a9a9a'}]}>
              선택한 테이블 : &nbsp;
            </Text>
            <Text style={[styles.titleText, {}]}>T-2</Text>
          </View>
          <View style={[{marginBottom: '3%'}]}>
            <Text style={[globalStyles.fontBold16, {marginBottom: '3%'}]}>
              1F
            </Text>
            <View style={[styles.tableLayout]}>
              {/* TABLE */}
              <Pressable
                onPress={() => {
                  navigation.push('ReserveContent', {title: 'T-1'});
                }}
                style={({pressed}) => [
                  styles.tableView,
                  {backgroundColor: pressed ? '#dadada75' : '#dadada'},
                ]}>
                <Text style={[globalStyles.fontBold14]}>T-1</Text>
                <Text>4인</Text>
              </Pressable>
              {/*  */}
              <Pressable
                style={({pressed}) => [
                  styles.tableView,
                  {
                    top: 120,
                    backgroundColor: pressed ? '#91f3ca75' : '#91f3ca',
                  },
                ]}>
                <Text style={[globalStyles.fontBold14]}>T-2</Text>
                <Text>6인</Text>
              </Pressable>
            </View>
          </View>

          <View style={[{marginBottom: '3%'}]}>
            <Text style={[globalStyles.fontBold16, {marginBottom: '3%'}]}>
              2F
            </Text>
          </View>
        </View>
      </ScrollView>
      {/* <BottomButton
        title="선택완료"
        onPress={() => {
          navigation.push('ReserveContent', {title: 'aa'});
        }}
      /> */}
    </>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: 'white',
  },
  container: {
    marginHorizontal: '5%',
    marginTop: '5%',
  },
  titleView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  titleText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    borderRadius: 10,
    borderColor: '#9a9a9a',
    // padding: '3%',
  },
  tableView: {
    position: 'absolute',
    width: 100,
    height: 60,
    // borderWidth: 1,
    top: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '10%',
    backgroundColor: '#dadada',
  },
  tableLayout: {
    // width: 100,
    height: 400,
    borderWidth: 2,
    borderColor: '#cacaca',
    borderRadius: 4,
  },
});
