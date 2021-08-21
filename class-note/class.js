function Person(name, age) {
  this.name = name;
  this.age = age;
}

const capt = new Person('캡틴', 100);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const sujin = new Person('수진', 20);
console.log(sujin);

// 클래스 문법은 프로토타입 문법으로 작성하는 코드보다 좀 더 간결하거나 명시적인 부분을 제공함.
// 타입 관점에서는 프로토타입 문법보다 클래스 문법에서 얻는 이점들이 더 많다.
