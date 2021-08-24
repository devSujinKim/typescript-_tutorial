// 주석 부분 대신에 하나의 인터페이스로 제네릭을 이용해서 여러 타입을 사용할 수 있다
// 제네릭 장점: 타입 코드를 줄일 수 있다!
interface DropdownItem<T> {
  value: T;
  selected: boolean;
}
// interface Email {
//   value: string;
//   selected: boolean;
// }

const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem<T>(item: DropdownItem<T>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email: DropdownItem<string>) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product: DropdownItem<number>) {
  const item = createDropdownItem<number>(product);
  const selectTag = document.querySelector('#product-dropdown');
  selectTag.appendChild(item);
});
