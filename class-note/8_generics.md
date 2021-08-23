## 제네릭

> C#, Java 등의 언어에서 재사용성이 높은 컴포넌트를 만들 때 자주 활용되는 특징  
> 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용됨  
> `타입을 함수의 파라미터처럼 사용하는 것`

```javascript
// in javascript
function logText(text) {
  console.log(text);
  return text;
}
// text라는 파라미터에 값을 넘겨받아 text를 반환해준다
// 10, hi, true 등 어떤 값이 들어가도 그대로 반환
logText(10); // 숫자 10
logText('hi'); // 문자열 hi
logText(true); // 진위값 true
```

```typescript
// in typescript
// T: 타입 변수(Type variable)
function logText<T>(text: T): T {
  console.log(text);
  return text;
}
// 함수 안에서 사용할 타입을 넘겨줄 수 있다
logText<string>('hi');
logText<boolean>(true);
```

## 인터페이스에 제네릭을 선언하는 방법

```typescript
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = {
  value: 'abc',
  selected: false,
};
```
