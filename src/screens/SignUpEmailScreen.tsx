import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BorderInput from '../components/BorderInput';
import {SojuColor} from '../lib/GlobalStyles';
import {SignUpEmailScreenProp} from '../types/RootStackProps';
export default function SignUpEmailScreen({navigation}: SignUpEmailScreenProp) {
  const onPressVerifyButton = () => {
    navigation.push('SignUpPassword');
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={[styles.layout]}>
        {/* 이메일 */}
        <Text style={[styles.emailText]}>이메일</Text>
        <View style={[styles.emailContainer]}>
          <BorderInput
            textContentType="emailAddress"
            keyboardType="email-address"
            inputStyle={{paddingLeft: 10, height: 40}}
            containerStyle={{width: '80%'}}
          />
          <TouchableOpacity style={styles.validButton}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>인증</Text>
          </TouchableOpacity>
        </View>
        {/* 인증번호 */}
        <View style={[styles.verifyContainer]}>
          <Text style={styles.verifyText}>인증번호</Text>
          <BorderInput
            textContentType="telephoneNumber"
            keyboardType="number-pad"
            inputStyle={[styles.verifyInput]}
            containerStyle={{width: '45%', borderLeftWidth: 0}}
          />
          {/* TIME OUT */}
          <Text style={{position: 'absolute', right: 66, color: '#9a9a9a'}}>
            3:00
          </Text>
          <TouchableOpacity
            onPress={onPressVerifyButton}
            style={[styles.verifyButton]}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>확인</Text>
          </TouchableOpacity>
        </View>
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
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: '5%',
  },
  verifyContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  emailText: {
    textAlign: 'left',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#9a9a9a',
  },
  validButton: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    borderRadius: 4,
    backgroundColor: SojuColor,
  },
  verifyText: {
    width: '35%',
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#333333dd',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    color: 'white',
  },
  verifyButton: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    borderRadius: 4,
    backgroundColor: '#333333dd',
  },
  verifyInput: {
    paddingLeft: 10,
    height: 40,
    paddingRight: 40,
    paddingVertical: 0,
  },
});
