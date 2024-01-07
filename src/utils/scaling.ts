import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

// 가이드라인 사이즈는 표준 "~5" 화면 모바일 장치를 기준으로 합니다.
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

// 뷰포트기반
const scale = (size: any) => (width / guidelineBaseWidth) * size;

// 높이기반
const verticalScale = (size: any) => (height / guidelineBaseHeight) * size;

// factor값 제어
const moderateScale = (size: any, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export {scale, verticalScale, moderateScale};
