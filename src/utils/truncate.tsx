export function truncateMessage(text: any, props: any) {
  // 정규식을 사용해 모든 줄 바꿈 문자 제거
  const replaced = text.replace(/\n/g, '');
  // const width = '90%';
  if (replaced.length <= props.length) {
    return replaced;
  }
  return replaced.slice(0, props.slice).concat('...');
}
