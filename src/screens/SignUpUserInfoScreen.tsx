import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import BorderInput from '../components/BorderInput';
import BottomButton from '../components/BottomButton';
import {globalStyles} from '../lib/GlobalStyles';
import {SignUpUserInfoScreenProp} from '../types/RootStackProps';
export default function SignUpUserInfoScreen({
  navigation,
}: SignUpUserInfoScreenProp) {
  const onPressFindButton = () => {
    navigation.push('SearchAddr');
  };
  return (
    <View style={[styles.layout]}>
      <View style={[styles.container, globalStyles.marginTop5]}>
        <Text style={[styles.descHeaderText]}>축하드립니다!</Text>
        <Text style={[styles.descHeaderText]}>이제부터 ㅇㅇㅇ를</Text>
        <Text style={[styles.descHeaderText]}>이용할 수 있습니다!</Text>
      </View>
      <View style={[styles.container, globalStyles.marginTop5]}>
        <Text style={[styles.descText]}>서비스 이용을 위해</Text>
        <Text style={[styles.descText]}>추가정보 입력을 부탁드립니다.</Text>
      </View>
      <View style={[styles.container, globalStyles.marginTop3]}>
        <Text style={[styles.text]}>이름</Text>
        <BorderInput
          containerStyle={[globalStyles.marginBottom3]}
          inputStyle={[styles.input]}
        />
      </View>
      <View style={[styles.container]}>
        <Text style={[styles.text]}>전화번호</Text>
        <View style={[styles.flexRow]}>
          <BorderInput
            containerStyle={[globalStyles.marginBottom3]}
            inputStyle={[styles.input]}
          />
          <TouchableOpacity
            onPress={onPressFindButton}
            style={[styles.verifyButton]}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>인증</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.container]}>
        <Text style={[styles.text]}>주소</Text>
        <View style={[styles.flexRow]}>
          <BorderInput inputStyle={[styles.input]} />
          <TouchableOpacity
            onPress={onPressFindButton}
            style={[styles.verifyButton]}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>찾기</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomButton
        title="등록완료"
        onPress={() => {
          navigation.pop();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: 'white',
  },
  flexRow: {
    flexDirection: 'row',
  },
  marginBottom: {
    marginBottom: '3%',
  },
  container: {
    marginHorizontal: '7%',
    // marginTop: '5%',
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  descHeaderText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  descText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9a9a9a',
    // marginTop: '5%',
  },
  input: {
    paddingLeft: 0,
    height: 40,
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#9a9a9a',
  },
  verifyButton: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    borderRadius: 4,
    backgroundColor: '#333333dd',
  },
});
