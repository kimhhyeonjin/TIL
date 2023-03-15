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

// object
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
