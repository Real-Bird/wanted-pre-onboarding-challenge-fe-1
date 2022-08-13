interface 변한상태 {
  [key: string]: string;
}

type 행동 = () => void;

export function createStore(
  reducer: (상태: {}, 행동들: () => void) => 변한상태,
  미리적재된상태: {}
) {
  let currentReducer = reducer;
  let 현재상태 = 미리적재된상태 as {};
  let 현재리스너: (() => void)[] | null = [];
  let 다음리스너 = 현재리스너;

  function dispatch(행동: 행동) {
    현재상태 = currentReducer(현재상태, 행동);
    return 행동;
  }

  function getState() {
    return 현재상태;
  }

  function subscribe(리스너: 행동) {
    다음리스너.push(리스너);

    let 구독중 = true;

    return function unsubscribe() {
      if (!구독중) {
        return;
      }
      구독중 = false;

      const index = 다음리스너.indexOf(리스너);
      다음리스너.splice(index, 1);
      현재리스너 = null;
    };
  }

  const 저장소 = {
    dispatch,
    getState,
    subscribe,
  };
  return 저장소;
}
