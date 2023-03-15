// default는 any

// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
// number: 숫자형, 실수도 가능
let age: number;

age = 12;
age = 12.1;

// 바로 할당할 수도 있음
let age2: number = 24;

age2 = 12;

// string: 문자열
let userName: string;

userName = "Abc";

// boolean: 논리형(불리언)
let isInstructor: boolean;

isInstructor = true;

// More complex types
// arrays
let hobbies: string[];

hobbies = ["Sports", "Cookies"];

let num_arr: number[];

let students_att: boolean[];

// objects
let person: {
  name: string;
  age: number;
};

person = {
  name: "Abc",
  age: 22,
};

// 객체를 여러 개 가진 배열 만들기
let people: {
  name: string;
  age: number;
}[];

// Type inference
// 타입을 지정하지 않고 선언해도 가장 근접한 타입을 추론하여
// 해당 타입이 아닌 경우 에러
let course = "React - The Complete Guide";

// Union Type
// 타입을 정의할 때 한 개 이상의 타입을 정의
// 타입 추론을 하지 않게 하기 위해 타입 지정은 필수
// 첫 번째 타입 뒤에 파이프 문자(|)를 넣고 뒤에 다른 타입 추가
let uni: string | number | boolean = "uni";

uni = 1234;

// Type Alias(타입 별칭)
// type 뒤에 원하는 이름을 붙이면 새로운 타입의 이름이 됨
type Human = {
  name: string;
  age: number;
};

let human: Human;

let humans: Human[];

// 함수

// 함수 타입

// 함수에 타입을 지정할 수도 있고 타입을 지정하지 않아도
// Type inference를 통해 근접한 타입 추론
function add(a: number, b: number): number {
  return a + b;
}

// 함수에서 return하는 값이 없으면 함수의 타입은 void
// void는 함수에 반환 값이 없다는 것을 의미
function printOutput(value: any) {
  console.log(value);
}

// 제네릭(generic) 타입

// 기존의 배열을 변경하지 않고 새로운 배열을 얻는 방법
function insertAtBeginning(array: any[], value: any) {
  // 기존 배열 복사
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
// insertAtBeginning의 array를 any로 지정했기 때문에
// demoArray에 숫자만 들어있는 것을 인식하지 못함 -> any
const updatedArray = insertAtBeginning(demoArray, -1);

// 이러한 현상을 해결하기 위해 제네릭 함수로 변환
// 함수와 매개변수 목록 사이에 <>를 추가
function insertAtBeginning2<T>(array: T[], value: T) {
  // 기존 배열 복사
  const newArray = [value, ...array];
  return newArray;
}

// 제네릭 함수로 변환하여
// array, value, 함수의 타입 명시 가능
const updatedArray2 = insertAtBeginning2(demoArray, -1);
const stringArray2 = insertAtBeginning2(['a', 'b', 'c'], 'd')

// updatedArray2[0].split("");
stringArray2[0].split("");
