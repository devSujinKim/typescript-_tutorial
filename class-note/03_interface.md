## 변수에 인터페이스 활용

> 인터페이스가 요구하는 프로퍼티들이 존재하는지, 프로퍼티들이 요구하는 타입을 가졌는지 확인  
> 타입 검사는 프로퍼티들의 순서를 요구하지 않는다.

```typescript
interface User {
  age: number;
  name: string;
}

const sujin: User = {
  age: 20,
  name: '수진',
};
```

## 선택적 프로퍼티

> 선택적 프로퍼티는 선언에서 프로퍼티 이름 끝에 `?`를 붙여 표시한다.  
> 인터페이스의 모든 프로퍼티가 필요한 것은 아니다.  
> 어떤 조건에서만 존재하거나 아예 없을 수도 있다.
>
> 장점: 속성을 선택적으로 적용 가능, 정의되어 있지 않은 속성을 인지시켜줄 수 있다.

```typescript
interface CraftBeer {
  name: string;
  hop?: number;
}

let myBeer = {
  name: 'Saporo',
};
function brewBeer(beer: CraftBeer) {
  console.log(beer.brewery); // Error: Property 'brewery' does not exist on type 'Beer'
}
brewBeer(myBeer);
```

## 읽기 전용

> 객체를 처음 생성할 때만 값을 할당하고 그 이후에는 변경할 수 없는 속성
> `readonly` 속성을 앞에 붙인다.

```typescript
interface CraftBeer {
  readonly brand: string;
}

let myBeer: CraftBeer = {
  brand: 'Belgian Monk',
};
myBeer.brand = 'Korean Carpenter'; // error!
```

## 읽기 전용 배열

> 배열을 선언할 때 `ReadonlyArray<T>` 타입을 사용하면 읽기 전용 배열을 생성할 수 있다.
> 선언 후 배열의 내용을 변경할 수 없다.

```typescript
let arr: ReadonlyArray<number> = [1, 2, 3];
arr.splice(0, 1); // error
arr.push(4); // error
arr[0] = 100; // error
arr = [10, 20, 30]; // error
```

## 함수 타입

```typescript
interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
const capt: User = {
  age: 100,
  name: '캡틴',
};

// 함수 인자에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
const capt = {
  name: '캡틴',
  age: 100,
};
getUser(capt);
```

```typescript
// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number;
}

const sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};
```

## 인덱싱

```typescript
interface StringArray {
  [index: number]: string;
}
```

## 딕셔너리 패턴

```typescript
interface StringRegexDictionary {
  [key: string]: RegExp;
}

const obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};
```

## 인터페이스 확장

```typescript
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

const captain: Developer = {
  language: 'ts',
  age: 100,
  name: '캡틴',
};
```
