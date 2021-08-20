## Enum

> 특정 값들의 집합을 의미하는 자료형

### 숫자형 이넘

```typescript
enum Shoes {
  Nike,
  Adidas,
}
console.log(Shoes.Nike); // 0
console.log(Shoes.Adidas); // 1
```

### 문자형 이넘

```typescript
enum Answer = {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답');
  }
  if (answer === Answer.No) {
    console.log('오답');
  }
}
askQuestion(Answer.Yes);
askQuestion('Yes'); // error
```

✔️ 이넘에 문자와 숫자를 혼합하여 생성할 수는 있으나 <b>최대한 같은 타입으로 이루어진 이넘</b>을 사용하는걸 추천한다.
