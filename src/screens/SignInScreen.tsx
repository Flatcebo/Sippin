import React from 'react';
import {StyleSheet} from 'react-native';
import {Pressable, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BorderInput from '../components/BorderInput';
import PressableButton from '../components/PressableButton';
import {SojuColor} from '../lib/GlobalStyles';
import {IconMaterialCommunityIcons, IconMaterialIcons} from '../lib/Icon';
import {SignInScreenProp} from '../types/RootStackProps';
export default function SignInScreen({navigation}: SignInScreenProp) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={[styles.layout]}>
        <View style={{flex: 0.45, justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 40}}>TITLE</Text>
        </View>
        <View style={[styles.container]}>
          <BorderInput
            iconComponent={IconMaterialCommunityIcons}
            iconName="email-outline"
            iconSize={20}
            iconColor={'#9a9a9a'}
            placeholder={`이메일을 입력해주세요!`}
          />

          <BorderInput
            iconComponent={IconMaterialIcons}
            iconName="lock-outline"
            iconSize={22}
            iconColor={'#9a9a9a'}
            placeholder={`비밀번호를 입력해주세요!`}
          />
          <PressableButton
            title="로그인"
            containerStyle={{marginTop: 10, backgroundColor: SojuColor}}
            titleStyle={{fontWeight: 'bold', color: 'white'}}
          />
          <View
            style={{
              flexDirection: 'row',
              columnGap: 40,
              alignItems: 'center',
            }}>
            <Pressable style={{paddingVertical: 20}}>
              <Text>KAKAO</Text>
            </Pressable>
            <Pressable>
              <Text>NAVER</Text>
            </Pressable>
            <Pressable>
              <Text>GOOGLE</Text>
            </Pressable>
          </View>
          <PressableButton
            onPress={() => {
              navigation.push('AgreementTerms');
            }}
            title="회원가입"
            titleStyle={{color: '#333', fontWeight: 'bold'}}
            containerStyle={{
              borderWidth: 2,
              borderColor: '#333',
              backgroundColor: 'white',
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    position: 'relative',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    rowGap: 4,
  },
});
