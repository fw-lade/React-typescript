export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

// type Actions =
//   | { type: "add"; paylaod: string }
//   | { type: "remove"; paylaod: number }
//   | { type: "done"; paylaod: number };

// const TodoReducer = (state: Todo[], action: Actions) => {
//   switch (action.type) {
//     case "add":
//       return [
//         ...state,
//         { id: Date.now(), todo: action.paylaod, isDone: false },
//       ];
//     case "remove":
//       return state.filter((todo) => todo.id !== action.paylaod);
//     case "done":
//       return state.map((todo) =>
//         todo.id !== action.paylaod ? { ...todo, isDone: !todo.isDone } : todo
//       );
//     default:
//         return state
//   }
// };

// import { useReducer } from "react";
// const ReducerExample = () => {
//   const [state, dispatch] = useReducer(TodoReducer, []);

//   return ();
// };
