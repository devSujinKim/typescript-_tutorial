// 함수의 타입을 결정하기 위해서는 '매개변수(parameter) 타입', '반환 값(return value) 타입'의 정보가 필요하다.

// 함수의 매개변수에 타입을 정의하는 방식
// 매개변수의 경우 변수의 타입을 표기할 때와 마찬가지로 매개변수 뒤에 콜론(:)을 붙이고 타입을 적는다.
// ex) param: number
function sum(a: number, b: number) {
  return a + b;
}
sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
// 반환 타입은 매개변수 목록을 닫는 괄호(')')와 함수 본문을 여는 대괄호('{') 사이에 콜론을 붙이고 표기한다.
// ex) function (): number { ... }
function add(): number {
  return 10;
}

// 함수의 반환 값에 타입을 정하지 않을 때는 void를 사용
function logGreetings(name: string): void {
  console.log(`Hello, ${name}`);
}

// 함수에 타입을 정의하는 방식
// 파라미터와 인자가 1:1 매핑이 되어야함
function sumNumber(a: number, b: number): number {
  return a + b;
}
// sum(10);  error, too few parameters
sum(10, 20); // 30
// sum(10, 20, 30, 40); error: too many parameters

// 함수의 옵셔널 파라미터
// 타입 안정성을 확보하기 위해 선택 매개변수를 지원
// 함수의 매개변수 이름 뒤에 '?' 기호를 붙여 해당 매개변수가 생략될 수 있음을 명시
// 매개변수 정의 시 선택 매개변수 이후에 필수 매개변수를 두는 것은 허용하지 않는다.
// ❌ function log(a?: string, b: string) {
function log(a: string, b?: string) {
  console.log(`Hello, ${a}`);
}
log('hello');
log('hello', 'abc');
//log('hello', 'abc', 'hi'); error: too many parameters
