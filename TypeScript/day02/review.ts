// 1. 제일 작은 수 제거하기
// solutino -> function  배열에서 가장 작은수 리턴, 빈 배열 -> -1 채워서 리턴

const solution = (arr: number[]) =>
  arr.length == 0 ? [-1] : arr.filter((v) => v != arr.sort()[0]);
