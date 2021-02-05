// 액션
  export const create = (todo) => ({ type: "CREATE", todo : todo});
  export const toggle = (id) => ({ type: "TOGGLE" , id: id});
  export const nextId = () => ({ type: "NEXTID" });
  export const remove = () => ({ type: "REMOVE" });
  
  // 상태
  const initialTodos1 = [
    {
      id: 1,
      text: '프로젝트 생성테슈튜',
      done: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링하기',
      done: true
    },
    {
      id: 3,
      text: 'Context 만들기',
      done: false
    },
    {
      id: 4,
      text: '기능 구현하기',
      done: false
    }
  ];
  

// 상태
let initialTodos2 = [
  {
    id: 5,
    text: '테스트임둥',
    done: false
  }
];


  // 1. 어떤 액션이들어온다
  // 2. 어떤 액션인지 걸르고 결과를 수행한다.
  // const reducer = (state = 상태값, action) => 형식
  const reducer = (state= initialTodos1, action) => {
    switch (action.type) {
      case "CREATE":
        initialTodos2 = {...action.todo}
        console.log("인잇에이블",initialTodos1);
        console.log("스테이트",state);
        return state.concat(initialTodos2);
       case "TOGGLE":
         return state.map(todo =>
             todo.id === action.id ? { ...todo, done: !todo.done } : todo
          );
           case 'REMOVE':
             return state.filter(todo => todo.id !== action.id);
          default:
            console.log(state);
            return state;
            // throw new Error(`Unhandled action type: ${action.type}`);
    }
  };
  export default reducer;