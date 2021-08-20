## 타입 별칭(Type Aliases)

> 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수  
> 새로운 타입 값을 생성하는 것이 아니라 정의한 타입에 대해  
> 나중에 쉽게 참고할 수 있게 이름을 부여하는 것과 같다.

## type vs interface

> 타입 별칭과 인터페이스의 차이점은 타입의 확장 가능 / 불가능 여부  
> 인터페이스는 확장이 가능한데 타입 별칭은 확장이 불가능  
> 가능한 `type`보단 `interface`로 선언해서 사용하는 것을 추천한다.
>
> - [좋은 소프트웨어는 언제나 확장이 용이해야 한다는 원칙](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)에 따름

```typescript
interface Person {
  name: string;
  age: number;
}

type Person = {
  name: string;
  age: number;
};

const sujin: Person = {
  name: 'sujin',
  age: 20,
};
```
