const redux = require("redux");

// Reducer
// 2개의 파라미터(기존의 상태, 발송된 액션)를 입력받음
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

// Subscriber
const counterSubscriber = () => {
  // 변경된 후의 최신 상태 받아오기
  const latestState = store.getState();
  console.log(latestState);
};

// subscribe로 함수를 받고
// 리덕스는 데이터와 store가 변경될 때마다 재렌더링
store.subscribe(counterSubscriber);

// Action
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
