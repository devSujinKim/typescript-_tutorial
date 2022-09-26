## Union Type

> | 연산자를 이용하여 타입을 여러 개 연결하는 방식을 유니온 타입 정의 방식이라고 부른다.

```typescript
function logMessage(value: string | number) {
  // value에는 string이나 number 타입이 모두 가능
  if (typeof value === 'number') {
    // 타입 가드: 특정 타입으로 타입의 범위를 좁혀나가는 과정
    value.toLocalString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);
```

```typescript
interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}
function askSomeone(someone: Developer | Person) {
  someone.name; // 공통 속성만 접근 가능
  someone.skill; // error
  someone.age; // error
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
askSomeone({ name: '캡틴', age: 100 });
```

## Intersection Type

> 인터섹션 타입은 여러 타입을 모두 만족하는 하나의 타입을 의미

```typescript
function askSomeone(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 30 });
```
