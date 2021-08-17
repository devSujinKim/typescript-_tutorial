// 타입스크립트로 변수나 함수와 같은 자바스크립트 코드에 타입을 정의할 수 있습니다.
// 타입스크립트의 기본 타입에는 크게 다음 12가지가 있습니다.

// Boolean
// Number
// String
// Object
// Array
// Tuple
// Enum
// Any
// Void
// Null
// Undefined
// Never

// Boolean
let isLoggedIn: boolean = true;

// Number
let num: number = 10;

// String
let str: string = 'hello';

// Object
let obj: object = {};
// let person: object = {
//   name: 'capt',
//   age: 10
// };
let person: { name: string, age: number } = {
  name: 'capt',
  age: 10
};

// Array
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk'];
let items: number[] = [1, 2, 3];

// Tuple(모든 인덱스에 타입을 정의)
let address: [string, number] = ['gangnam', 100];
