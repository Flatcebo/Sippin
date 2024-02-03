import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  PlatformColor,
  Pressable,
  TextInput,
  TextInputProps,
} from 'react-native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import BorderInput from '../components/BorderInput';
import {NavigationProp} from '../types/RootStackProps';
import {formatPhoneNumber, maskStringRegex} from '../utils/format';
import BottomButton from './BottomButton';
import Toast from 'react-native-toast-message';
import PostModal from './PostModal';

interface InfoListProps {
  onConfirmPassword?: {};
  onConfirmName?: {};
  onConfirmPhoneNumber?: {};
  onConfirmAddr?: {};
  paddingVertical?: boolean;
  marginVertical?: boolean;
  button?: boolean;
}

const InfoList = ({
  onConfirmPassword,
  onConfirmName,
  onConfirmPhoneNumber,
  onConfirmAddr,
  paddingVertical,
  marginVertical,
  button,
}: InfoListProps) => {
  const navigation = useNavigation<NavigationProp>();
  const styles = StyleSheet.create({
    container: {
      //   paddingHorizontal: '5%',
      paddingVertical: '3%',
      backgroundColor: 'white',
      height: '100%',
    },
    myInfoContentTextView: {
      flexDirection: 'row',
      paddingVertical: paddingVertical ? 14 : 8,
      alignItems: 'flex-start',
      backgroundColor: 'white',
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
      marginVertical: marginVertical ? 6 : 0,
      padding: '3%',
      paddingVertical: '0%',
      backgroundColor: 'white',
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
  const [nowPassword, setNowPassword] = useState('password');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordCheck, setNewPasswordCheck] = useState('');
  const [name, setName] = useState('황서은');
  const [newName, setNewName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [verifyNumber, setVerifyNumber] = useState('');
  const [nowAddr, setNowAddr] = useState('');
  const [addr, setAddr] = useState('');
  const [detailAddr, setDetailAddr] = useState('');
  const maskedPassword = maskStringRegex(nowPassword, 0);

  const InfoData = [
    {title: '아이디', desc: 'organicsic@naver.com'},
    {title: '이메일', desc: 'organicsic@naver.com'},
    {title: '비밀번호', desc: maskedPassword || '********', button: button},

    {
      title: '이름',
      desc: name || '',
      button: button,
    },
    {
      title: '휴대폰번호',
      desc: phoneNumber || '010-5554-4459',
      button: button,
    },
    {
      title: '주소',
      desc: nowAddr || '전남 목포시 산정동 양을로41번길 16, 000호',
      button: button,
    },
  ];
  const [formMode, setFormMode] = useState(
    InfoData.reduce((acc: any, _, idx) => {
      acc[idx] = false;
      return acc;
    }, {}),
  );

  const onPressChangeButton = (idx: number) => {
    setFormMode((prevFormMode: any) => {
      const newFormMode = {...prevFormMode};
      Object.keys(newFormMode).forEach(key => {
        newFormMode[key] = false;
      });
      newFormMode[idx] = true; // "변경" 버튼을 클릭할 때 formMode를 true로 설정
      return newFormMode;
    });
  };

  interface renderBorderInputsProps {
    textContentType?: any[''];
    placeholder?: string;
    secureTextEntry?: any[''];
    keyboardType?: any[''];
    maxLength?: number;
    caretHidden?: boolean;
    value?: string[];
    button?: boolean[];
    buttonText?: string[];
    onChangeText?: (text: string) => void | [];
    press?: boolean[];
    onPressPress?: () => void[];
    onPressButton?: () => void[];
  }

  const renderBorderInputs = (
    quantity: number,
    idx: number,
    {
      textContentType,
      placeholder,
      value,
      button,
      buttonText,
      onChangeText,
      secureTextEntry,
      keyboardType,
      maxLength,
      caretHidden,
      press,
      onPressPress,
      onPressButton,
      passwordRule,
      ...props
    }: TextInputProps | any,
  ) => {
    // console.log(secureTextEntry);
    return (
      <>
        {[...Array(quantity)].map((_, inputIdx) => (
          <View key={inputIdx} style={[styles.inputContainer]}>
            <BorderInput
              key={inputIdx}
              inputStyle={[styles.inputStyle]}
              secureTextEntry={
                secureTextEntry ? secureTextEntry[inputIdx] : false
              }
              textContentType={
                textContentType ? textContentType[inputIdx] : 'password'
              }
              keyboardType={keyboardType ? keyboardType[inputIdx] : 'default'}
              placeholder={placeholder ? placeholder[inputIdx] : ''}
              containerStyle={{width: '100%'}}
              value={value ? value[inputIdx] : ''}
              onChangeText={onChangeText[inputIdx]}
              maxLength={maxLength ? maxLength[inputIdx] : 16}
              caretHidden={caretHidden ? caretHidden[inputIdx] : false}
              press={press ? press[inputIdx] : false}
              // onPressPress={onPressPress[inputIdx]}
            />
            {button && button[inputIdx] && (
              <TouchableOpacity
                style={[styles.borderInputButton]}
                onPress={onPressButton[inputIdx]}>
                <Text style={[styles.submitButtonText, {color: 'black'}]}>
                  {buttonText ? buttonText[inputIdx] : ''}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
        {passwordRule && (
          <Text style={{fontSize: 12, fontWeight: 'bold'}}>
            * 영문+숫자+특문 8~20자
          </Text>
        )}
      </>
    );
  };

  const onChangePassword = (t: string) => {
    setPassword(t);
  };
  const onChangeNewPassword = (t: string) => {
    setNewPassword(t);
  };
  const onChangeNewPasswordCheck = (t: string) => {
    setNewPasswordCheck(t);
  };
  const onChangeName = (t: string) => {
    setNewName(t);
  };
  const onChangePhoneNumber = (t: string) => {
    const formattedInput = t.replace(
      /(\d{3})(\d{1,4})?(\d{1,4})?/,
      (match, p1, p2, p3) => {
        let result = p1;
        if (p2) result += `-${p2}`;
        if (p3) result += `-${p3}`;
        return result;
      },
    );
    setNewPhoneNumber(formattedInput);
    // setNewPhoneNumber(formatPhoneNumber(t));
    // console.log();
  };
  const onChangeVerifyNumber = (t: string) => {
    setVerifyNumber(t);
  };
  const onChangeAddr = (t: string) => {
    setDetailAddr(t);
  };
  const showSuccessToast = (text: string) => {
    Toast.show({
      type: 'success',
      text1: text,
      visibilityTime: 2000,
      // text2: 'goood',
    });
  };
  const showErrorToast = (text: string) => {
    Toast.show({
      type: 'error',
      text1: text,
      visibilityTime: 1600,
      // text2: 'goood',
    });
  };
  const clearTextPassword = () => {
    setPassword('');
    setNewPassword('');
    setNewPasswordCheck('');
    setFormMode(false);
  };
  const clearTextPhone = () => {
    setNewPhoneNumber('');
    setVerifyNumber('');
    setFormMode(false);
  };
  const clearTextName = () => {
    setNewName('');
    setFormMode(false);
  };
  const clearTextAddr = () => {
    setAddr('');
    setDetailAddr('');
    setFormMode(false);
  };

  const validateAndUpdatePassword = () => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    const passwordRule = password.length >= 8 || password.length <= 20;

    const errorMessage =
      nowPassword !== password
        ? '기존 비밀번호가 일치하지 않습니다.'
        : newPassword.length <= 0
        ? '빈칸을 입력해주세요.'
        : passwordRegex.test(password) === false && passwordRule === false
        ? '비밀번호의 양식이 맞지않습니다.'
        : newPassword !== newPasswordCheck
        ? '새 비밀번호가 일치하지 않습니다.'
        : '';

    const passwordRules =
      nowPassword === password &&
      newPassword.length > 0 &&
      passwordRegex.test(password) === true &&
      passwordRule === true &&
      newPassword === newPasswordCheck;

    const trueState = () => {
      setNowPassword(newPasswordCheck);
      clearTextPassword();
      showSuccessToast('비밀변호 변경이 완료되었습니다.');
    };

    return passwordRules
      ? trueState()
      : errorMessage && showErrorToast(errorMessage);
  };

  const validateAndUpdatePhoneNumber = () => {
    const trueState = () => {
      showSuccessToast('인증이 완료되었습니다.');
      setPhoneNumber(formatPhoneNumber(newPhoneNumber));
      clearTextPhone();
    };
    const errorMessage =
      verifyNumber.length < 6
        ? showErrorToast('인증번호를 확인해주세요')
        : verifyNumber !== '888888'
        ? showErrorToast('인증번호가 일치하지 않습니다.')
        : '';

    return verifyNumber === '888888' ? trueState() : errorMessage;
  };
  const validateAndUpdateName = () => {
    const regex = /^[가-힣]{2,}$/;
    const isValid = regex.test(newName);

    const trueState = () => {
      setName(newName);
      clearTextName();
      showSuccessToast('변경이 완료되었습니다.');
    };
    const errorMessage = showErrorToast('이름 양식이 맞지않습니다.');

    return isValid === true ? trueState() : errorMessage;
  };
  const updateAddress = () => {
    const errorMessage =
      addr.length <= 0 && showErrorToast('주소를 입력해주세요.');

    const trueState = () => {
      setNowAddr(addr + (detailAddr ? ', ' + detailAddr : ''));
      clearTextAddr();
    };

    return addr.length > 0 ? trueState() : errorMessage;
  };
  const onPressVerifyButton = () => {
    const errorMessage =
      newPhoneNumber.length < 13 && showErrorToast('전화번호를 확인해주세요.');
    const trueState = () => {
      showSuccessToast('인증번호가 발송되었습니다.');
      // 인증번호 발송 로직
    };
    return newPhoneNumber.length === 13 ? trueState() : errorMessage;
  };

  // console.log(addr.length);
  const onConfirm = (idx: number) => {
    switch (idx) {
      case 2:
        validateAndUpdatePassword();
        break;
      case 3:
        validateAndUpdateName();
        break;
      case 4:
        validateAndUpdatePhoneNumber();
        break;
      case 5:
        updateAddress();
        break;
    }
    console.log(`확인 버튼 클릭 - idx: ${idx}`);
  };

  const onCancel = (idx: number) => {
    switch (idx) {
      case 2:
        clearTextPassword();
        break;
      case 3:
        clearTextName();
        break;
      case 4:
        clearTextPhone();
        break;
      case 5:
        clearTextAddr();
        break;
    }
    console.log(`취소 버튼 클릭 - idx: ${idx}`);
  };
  const [postModal, setPostModal] = useState(false);

  return (
    <View style={[styles.container]}>
      {postModal && (
        <PostModal
          visible={postModal}
          onRequestClose={() => {
            setPostModal(false);
          }}
          onSelectedPost={data => {
            // console.log(JSON.stringify(data.address));
            setAddr(data.address);
            setPostModal(false);
          }}
          onErrorPost={error => console.log(error)}
        />
      )}
      {InfoData.map((i, idx) => (
        <View style={[styles.myInfoContentView]} key={idx}>
          <View style={[styles.myInfoContentTextView]}>
            <View style={{width: '25%'}}>
              <Text style={[styles.leftText]}>{i.title}</Text>
            </View>
            <View style={{width: '75%', backgroundColor: 'white'}}>
              {formMode[idx] ? (
                // formMode가 true일 때 idx에 따라 다른 입력 렌더링
                <>
                  {idx === 2 &&
                    renderBorderInputs(3, idx, {
                      placeholder: [
                        '현재 비밀번호',
                        '새 비밀번호',
                        '새 비밀번호 확인',
                      ],
                      secureTextEntry: [true, true, true],
                      textContentType: ['password', 'password', 'password'],
                      // keyboardType: [
                      //   'visible-password',
                      //   'email-address',
                      //   'email-address',
                      // ],
                      value: [password, newPassword, newPasswordCheck],
                      onChangeText: [
                        onChangePassword,
                        onChangeNewPassword,
                        onChangeNewPasswordCheck,
                      ],
                      passwordRule: true,
                    })}
                  {idx === 3 &&
                    renderBorderInputs(1, idx, {
                      placeholder: [''],
                      value: [newName],
                      onChangeText: [onChangeName],
                      secureTextEntry: [false],
                      maxLength: [8],
                    })}
                  {idx === 4 &&
                    renderBorderInputs(2, idx, {
                      placeholder: ['새 휴대폰번호', '인증번호'],
                      textContentType: ['telephoneNumber', 'telephoneNumber'],
                      keyboardType: ['numeric', 'numeric'],
                      button: [true, false],
                      buttonText: ['인증', ''],
                      onPressButton: [
                        () => {
                          onPressVerifyButton();
                        },
                        () => {},
                      ],
                      value: [formatPhoneNumber(newPhoneNumber), verifyNumber],
                      onChangeText: [onChangePhoneNumber, onChangeVerifyNumber],
                      secureTextEntry: [false, false],
                      maxLength: [13, 6],
                    })}
                  {idx === 5 &&
                    renderBorderInputs(2, idx, {
                      placeholder: ['', '상세 주소'],
                      onChangeText: [() => {}, onChangeAddr],
                      secureTextEntry: [false],
                      caretHidden: [true],
                      button: [true],
                      buttonText: ['찾기'],
                      value: [addr, detailAddr],
                      press: [true],
                      onPressButton: [
                        () => {
                          setPostModal(true);
                        },
                      ],
                    })}
                  {/* "확인" 및 "취소" 버튼 추가 */}
                  <View style={[styles.buttonView]}>
                    <TouchableOpacity
                      style={[styles.verifyButton, styles.submitButton]}
                      onPress={() => onConfirm(idx)}>
                      <Text style={[styles.submitButtonText]}>확인</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => onCancel(idx)}
                      style={[styles.verifyButton, styles.cancelButton]}>
                      <Text style={[styles.cancelButtonText]}>취소</Text>
                    </TouchableOpacity>
                  </View>
                </>
              ) : (
                // formMode가 false일 때 텍스트와 "변경" 버튼 렌더링
                <>
                  <Text style={[styles.rightText, {lineHeight: 24}]}>
                    {i.desc}
                  </Text>
                  {i.button && (
                    <TouchableOpacity
                      onPress={() => onPressChangeButton(idx)}
                      style={[styles.verifyButton]}>
                      <Text style={[styles.verifyButtonText]}>변경</Text>
                    </TouchableOpacity>
                  )}
                </>
              )}
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default InfoList;
