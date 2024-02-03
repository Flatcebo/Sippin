export function formatNumber(number: number) {
  if (number >= 1000) {
    return '999+';
  } else {
    return number.toString();
  }
}
export function formatPhoneNumber(phoneNumber: string) {
  // 숫자만 추출
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');

  // 정규식을 사용하여 원하는 형식으로 포맷
  const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);

  if (match) {
    return `010-${match[2]}-${match[3]}`;
  }

  // 매치되지 않는 경우 기본 값 반환
  return phoneNumber;
}

export function maskStringRegex(inputString: string, start: number) {
  const end = start + inputString.length; // end를 자동으로 계산
  const masked = '*'.repeat(end - start);
  const prefix = inputString.slice(0, start);
  const suffix = inputString.slice(end);
  return prefix + masked + suffix;
}
