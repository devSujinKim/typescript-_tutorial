## 클래스

> 클래스의 생성자 메소드(constructor)와 일반 메소드(Methods) 멤버(Class member)와는 다르게  
> 속성(Properties)은 `name: string;`와 같이 클래스 바디에 별도로 타입을 선언한다.

## 수식어

> 클래스 멤버(속성, 메소드)에서 사용할 수 있는 접근 제어자(Access Modifiers)들이 있다.
>
> - 접근 제어자: 클래스, 메서드 및 기타 멤버의 접근 가능성을 설정하는 객체 지향 언어의 키워드

### 접근 제어자

| 접근 제어자 | 의미                                     | 범위         |
| ----------- | ---------------------------------------- | ------------ |
| public      | 어디서나 자유롭게 접근 가능(생략가능)    | 속성, 메소드 |
| protected   | 나와 파생된 후손 클래스 내에서 접근 가능 | 속성, 메소드 |
| private     | 내 클래스에서만 접근 가능                | 속성, 메소드 |

```typescript
class Person {
  private name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const sujin = new Person('수진', 20);
console.log(sujin);
```

### 수식어

> 접근 제어자와 함께 사용할 수 있다.
> 접근 제어자를 먼저 작성해야 한다.

| 수식어   | 의미               | 범위              |
| -------- | ------------------ | ----------------- |
| static   | 정적으로 사용      | 속성, 일반 메소드 |
| readonly | 읽기 전용으로 사용 | 속성              |

```typescript
class Cat {
  // 정적 속성은 클래스 바디에서 속성의 타입 선언과 같이 사용
  static legs: number;
  constructor() {
    // Init static property(클래스 바디에서 값을 초기화할 수 없기 때문)
    Cat.legs = 4;
  }
}
console.log(Cat.legs); // undefined
new Cat();
console.log(Cat.legs); // 4

class Dog {
  // Init static method
  static getLegs() {
    return 4;
  }
}
console.log(Dog.getLegs()); // 4
```

## 추상 클래스

> 다른 클래스가 파생될 수 있는 기본 클래스로 인터페이스와 유사하다.
> 직접 인스턴스를 생성할 수 없어서 파생된 후손 클래스에서 인스턴스를 생성해야 한다.
> `abstract`는 클래스, 속성, 메소드에도 사용 가능하다.

```typescript
abstract class Developer {
  abstract coding(): void; // 'abstract'가 붙으면 상속 받은 클래스에서 무조건 구현해야 함
  drink(): void {
    console.log('drink sth');
  }
}

class FrontEndDeveloper extends Developer {
  coding(): void {
    // Developer 클래스를 상속 받은 클래스에서 무조건 정의해야 하는 메서드
    console.log('develop web');
  }
  design(): void {
    console.log('design web');
  }
}
const dev = new Developer(); // error: cannot create an instance of an abstract class
const sujin = new FrontEndDeveloper();
sujin.coding(); // develop web
sujin.drink(); // drink sth
sujin.design(); // design web
```

- 인터페이스와 다른점: 속성이나 메소드 멤버에 대한 세부 구현 가능

```typescript
abstract class Animal {
  abstract name: string;
  abstract getName(): string;
  // Abstract class constructor can be made protected.
  protected constructor(public legs: string) {}
  getLegs() {
    return this.legs;
  }
}
```
