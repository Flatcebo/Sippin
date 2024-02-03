import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  Pressable,
  Text,
  View,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import BottomButton from '../components/BottomButton';
import PressableButton from '../components/PressableButton';
import {globalStyles, SojuColor} from '../lib/GlobalStyles';
import {AgreementTermsScreenProp} from '../types/RootStackProps';

export default function AgreementTermsScreen({
  navigation,
}: AgreementTermsScreenProp) {
  const labels = [
    '[필수] 만 19세 이상입니다.',
    // '[필수] 이용약관 동의',
    '[필수] 개인정보 수집 및 이용 동의',
    // '[필수] 개인정보 제 3자 제공 동의',
    '[필수] 위치정보 동의 약관',
    '[선택] 이벤트 및 혜택 알림 수신 동의',
    '[선택] 서비스 알림 수신 동의',
  ];
  const [selectAll, setSelectAll] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState(
    new Array(labels.length).fill(false),
  );

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setCheckboxStates(new Array(labels.length).fill(!selectAll));
  };

  const handleCheckboxChange = (index: any) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);

    const allChecked = newCheckboxStates.every(state => state);
    setSelectAll(allChecked);
  };

  const onPressCompletedSelectButton = () => {
    navigation.push('SignUpEmail');
  };
  const onPressSeeDetailButton = () => {
    navigation.push('Terms');
  };
  const CheckBoxItem = () => (
    <>
      {checkboxStates.map((isChecked: any, index: any) => (
        <View style={{}} key={index}>
          <Checkbox.Item
            label={labels[index]}
            status={isChecked ? 'checked' : 'unchecked'}
            onPress={() => handleCheckboxChange(index)}
            position="leading"
            labelVariant="bodyMedium"
            labelStyle={{fontSize: 13, textAlign: 'left', color: '#7a7a7a'}}
            style={{
              marginHorizontal: '3%',
              height: 36,
            }}
            color={'#24890589'}
          />
          <Pressable
            style={[styles.seeDetailButton]}
            onPress={onPressSeeDetailButton}>
            <Text style={[styles.seeDetailText]}>자세히 보기</Text>
          </Pressable>
        </View>
      ))}
    </>
  );

  return (
    <View style={[styles.layout]}>
      {/* <View style={{alignItems: 'center', justifyContent: 'center'}}> */}
      <View style={[styles.container]}>
        <Text style={[styles.descText]}>어서오세요!</Text>
        <Text style={[styles.descText]}>ㅇㅇㅇ 이용을 위해서</Text>
        <Text style={[styles.descText]}>약관에 동의해주세요!</Text>
      </View>
      <Checkbox.Item
        label="이용약관 전체동의"
        position="leading"
        status={selectAll ? 'checked' : 'unchecked'}
        onPress={handleSelectAll}
        style={{height: 40}}
        labelStyle={{fontWeight: 'bold', fontSize: 16, textAlign: 'left'}}
        labelVariant="bodyMedium"
        color={SojuColor}
      />

      <CheckBoxItem />

      <BottomButton title="선택완료" onPress={onPressCompletedSelectButton} />

      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginHorizontal: '6%',
    marginVertical: '5%',
  },
  seeDetailButton: {
    position: 'absolute',
    right: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
  },
  seeDetailText: {
    fontSize: 11,
    borderBottomWidth: 1,
    color: '#333',
    fontWeight: 'bold',
  },
  descText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
