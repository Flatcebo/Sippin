import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {WebView} from 'react-native-webview';
import FilterItem from '../components/FilterItem';
import {MyAroundScreenProp} from '../types/RootStackProps';

// import {NativeModules} from 'react-native';

// const {MyNativeModule} = NativeModules;

// import {} from '@'
// let map = naver
export default function MyAroundScreen({
  navigation,
  route,
}: MyAroundScreenProp) {
  // if (MyNativeModule) {
  //   MyNativeModule.openActivity();
  // } else {
  //   console.error('MyNativeModule is undefined');
  // }

  //   const map = new naver
  //openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_API_KEY
  //   4c1xyd4it7
  const handleWebViewMessage = (event: any) => {
    // WebView에서 전송한 메시지를 처리하는 로직을 여기에 추가합니다.
    console.log(event.nativeEvent.data);
  };

  return (
    <>
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}> */}
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          //   height:60
          // borderWidth: 1,
        }}
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          //   height: '30%',
          // position: 'absolute',
        }}>
        <FilterItem title="내 주변" marginLeft />
        <FilterItem title="인기 검색어" />
        <FilterItem title="인기 검색어" />
        <FilterItem title="인기 검색어" marginRight />
      </ScrollView>
      {/* <ScrollView style={{height: '100%', backgroundColor: 'white'}}> */}
      <View style={{height: '92%'}}>
        <WebView
          style={{flex: 1, backgroundColor: 'white'}}
          // javaScriptEnabled={true}
          originWhitelist={['*']}
          //   onMessage={handleWebViewMessage}
          source={{
            //   uri: 'https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=4c1xyd4it7',
            uri: 'https://host-portf.web.app/Map',
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
          }}
        />
        <View>
          <Button
            title="ContentCard"
            onPress={() => {
              // navigation.push('Content', {});
            }}
          />
        </View>
      </View>
      {/* </KeyboardAvoidingView> */}
      {/* </ScrollView> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
