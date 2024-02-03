import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  PlatformColor,
  TextInput,
  TextInputProps,
} from 'react-native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import BottomButton from '../components/BottomButton';
import InfoList from '../components/InfoList';
import {MyInfoModifyScreenProp} from '../types/RootStackProps';
const MyInfoModifyScreen = ({navigation}: MyInfoModifyScreenProp) => {
  return (
    <>
      <View style={[styles.container]}>
        <InfoList button paddingVertical marginVertical />
        <BottomButton
          onPress={() => {
            navigation.push('Test');
          }}
        />
      </View>
    </>
  );
};

export default MyInfoModifyScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    paddingVertical: '0%',
    backgroundColor: 'white',
  },
  myInfoContentTextView: {
    flexDirection: 'row',
    paddingVertical: 14,
    alignItems: 'flex-start',
    // borderWidth: 1,
  },
  leftText: {
    fontWeight: '500',
    fontSize: 14,
    // width: '25%',
    color: '#9a9a9a',
  },
  rightText: {
    fontWeight: '500',
    fontSize: 16,
    width: '82%',
  },
  myInfoTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
  },
  myInfoTitleText: {fontWeight: 'bold', fontSize: 16},
  myInfoModifyText: {fontSize: 13, textDecorationLine: 'underline'},
  myInfoContentView: {
    // borderWidth: layoutWidth,
    width: '100%',
    borderRadius: 10,
    marginVertical: 6,
    padding: '3%',
    paddingVertical: '0%',
  },
  verifyButton: {
    position: 'absolute',
    // top: 0,
    right: -8,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '22%',
    borderRadius: 4,
    backgroundColor: '#cacacadd',
  },
  verifyButtonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 12,
  },
  inputStyle: {
    paddingLeft: 6,
    height: 40,
    fontSize: 14,
    width: '75%',
  },
  cancelButtonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 12,
  },
  cancelButton: {
    position: 'relative',
    backgroundColor: 'white',
    borderWidth: 1,
    width: 50,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  submitButton: {
    position: 'relative',
    backgroundColor: '#333333dd',
    width: 50,
  },
  buttonView: {
    flexDirection: 'row',
    marginTop: 10,
    columnGap: 4,
  },
  borderInputButton: {
    position: 'absolute',
    right: 4,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    borderRadius: 4,
    backgroundColor: '#cacacadd',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
