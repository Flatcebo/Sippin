import Postcode from '@actbase/react-daum-postcode';
import React from 'react';
import {Alert, View} from 'react-native';
import {SearchAddrScreenProp} from '../types/RootStackProps';

export default function SearchAddrScreen({
  navigation,
  route,
}: SearchAddrScreenProp) {
  // route.params
  return (
    <View>
      <Postcode
        style={{width: '100%', height: '100%'}}
        jsOptions={{animation: true}}
        onSelected={data => {
          console.log(JSON.stringify(data.address));
          navigation.navigate('MyInfoModify', {address: data.address});
        }}
        onError={() => {}}
      />
    </View>
  );
}
