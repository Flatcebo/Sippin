import React from 'react';
import {
  Button,
  Image,
  Pressable,
  ScrollView,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {globalStyles} from '../lib/GlobalStyles';
import {NativeModules} from 'react-native';

export default function SelectFriendScreen() {
  return (
    <>
      {/* <Button title="login" onPress={loginToKakao} /> */}
      {/* <View style={{borderBottomWidth: 1, paddingVertical: '3%'}}>
        <TextInput
          style={{backgroundColor: '#9a9a9a'}}
          placeholder="CollapsibleSearchBar"
          textAlign="center"
        />
      </View>
      <ScrollView style={{marginHorizontal: '5%'}}>
        <Pressable
          style={{
            paddingVertical: '3%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'data:image/jpeg;base64,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',
                height: 40,
                width: 40,
              }}
              style={{borderRadius: 10, marginRight: 10}}
            />
            <Text style={[globalStyles.fontNormal16]}>아이들</Text>
          </View>
          <Checkbox status="checked" />
        </Pressable>
      </ScrollView> */}
    </>
  );
}
