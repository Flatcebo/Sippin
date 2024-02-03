import React, {useState} from 'react';
import {Alert} from 'react-native';
import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity, View} from 'react-native';
import BorderInput from '../components/BorderInput';
import CustomAlert from '../components/CustomAlert';
import {SojuColor} from '../lib/GlobalStyles';
import {IconFeather} from '../lib/Icon';
import {SignUpPasswordScreenProp} from '../types/RootStackProps';
export default function SignUpPasswordScreen({
  navigation,
  route,
}: SignUpPasswordScreenProp) {
  const onPressVerifyButton = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}, {name: 'SignUpUserInfo'}],
    });
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={[styles.layout]}>
        {/* 비밀번호 */}
        <View style={[styles.container]}>
          <Text style={[styles.passwordText]}>비밀번호</Text>

          <BorderInput
            textContentType="password"
            secureTextEntry
            autoFocus
            inputStyle={{paddingLeft: 2, height: 40}}
            containerStyle={{width: '100%', marginBottom: 10}}
          />
          <IconFeather
            name="check"
            size={22}
            color={SojuColor}
            style={[styles.checkIcon]}
          />
        </View>
        {/* 비밀번호 확인 */}
        <View style={[styles.container]}>
          <Text style={[styles.passwordText]}>비밀번호 확인</Text>
          <View style={{flexDirection: 'row'}}>
            <BorderInput
              textContentType="password"
              secureTextEntry
              passwordRules={''}
              inputStyle={{paddingLeft: 2, height: 40}}
              containerStyle={{width: '80%', borderLeftWidth: 0}}
            />
            <TouchableOpacity
              onPress={onPressVerifyButton}
              style={[styles.verifyButton]}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>확인</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.notMatchText]}>일치하지 않습니다.</Text>
        </View>
        {/* 비밀번호 양식 */}
        <Text style={{textAlign: 'left', fontSize: 13, marginTop: 4}}>
          Password Rules
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    marginHorizontal: '7%',
    marginTop: '3%',
    justifyContent: 'center',
  },
  container: {},
  passwordText: {
    textAlign: 'left',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#9a9a9a',
  },
  checkIcon: {
    position: 'absolute',
    right: 0,
    height: '100%',
    textAlignVertical: 'center',
  },
  verifyButton: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    borderRadius: 4,
    backgroundColor: '#333333dd',
  },
  notMatchText: {
    textAlign: 'left',
    fontSize: 12,
    color: '#ff000097',
    marginTop: 2,
  },
});
