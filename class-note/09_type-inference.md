## 타입 추론

> 명시적으로 타입 선언이 되어있지 않은 경우, 타입스크립트는 타입을 추론해 제공한다.

- 과정
  `let x = 3;` 에서 `x` 에 대한 타입을 따로 지정하지 않아도 `number` 로 간주된다.
  변수를 선언하거나 초기화 할 때 타입이 추론된다.  
  이 외에도<u>변수, 속성, 인자의 기본 값, 함수의 반환 값 등을 설정할 때 타입 추론이 일어난다.</u>

## 인터페이스와 제네릭을 이용한 타입 추론 방식

```typescript
// 기본적인 인터페이스 제네릭을 정의했을 때, 제네릭의 값을 타입스크립트가 추론하여 변수에 필요한 속성을 보장해준다
interface Dropdown<T> {
  value: T;
  title: string;
}
const shoppingItem: Dropdown<string> = {
  value: 'abc',
  title: 'hello',
};
```

```typescript
interface Dropdown<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

const detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  description: 'def',
  value: 'a',
  tag: 'a',
};
```
