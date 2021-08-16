// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b;
}
sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
// 파라미터와 인자가 1:1 매핑이 되어야함
function numSum(a: number, b: number): number {
  return a + b;
}
// sum(10);  error, too few parameters
sum(10, 20); // 30
// sum(10, 20, 30, 40); error: too many parameters

// 함수의 옵셔널 파라미터
// 타입 안정성을 확보하기 위해 선택 매개변수를 지원
// 함수의 매개변수 이름 뒤에 '?' 기호를 붙여 해당 매개변수가 생략될 수 있음을 명시
function log(a: string, b?: string) {

}
log('hello');
log('hello', 'abc');
//log('hello', 'abc', 'hi'); error: too many parameters
