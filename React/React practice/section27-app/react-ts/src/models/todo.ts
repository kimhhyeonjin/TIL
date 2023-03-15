// Todo의 형태를 정의

// TypeScript에서 class를 사용할 때는
// class에 추가할 프로퍼티가 있거나 추가할 속성이 있는 경우
// 생성자(constructor)를 통해 추가할 필요 없음
class Todo {
  // TypeScript에서는 미리 프로퍼티를 정의하고
  // 해당 프로퍼티에 어떤 타입을 가진 값이 저장되는지 명확히 밝혀야 함
  id: string;
  text: string;

  // 값을 할당해야 함 -> 생성자 추가
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;
