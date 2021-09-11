## 타입 가드

```typescript
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

const introduce = (): Developer | Person => {
  return { name: 'Tom', age: 23, skill: 'Front Developer' };
};

const tom = introduce();
console.log(tom.name);
console.log(tom.skill); //  error

// 타입 단언
if ((tom as Developer).skill) {
  (tom as Developer).skill;
} else if ((tom as Person).age) {
  const age = (tom as Person).age;
}

// 타입 가드 정의
const isDeveloper = (target: Developer | Person): target is Developer => {
  return (target as Developer).skill !== undefined;
};

if (isDeveloper(tom)) {
  tom.skill;
} else {
  tom.age;
}
```
