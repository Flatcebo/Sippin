export function formatNumber(number: number) {
  if (number >= 1000) {
    return '999+';
  } else {
    return number.toString();
  }
}
