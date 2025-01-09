import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";

// let name: string;
// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];

// function printName(name: string){
//   console.log(name)
// }

// printName('James')

// let printName: (name: string) => never;

// interface Person {
//   name: string;
//   age?: number;
// };

// interface Guy extends Person {
//   profession: string
// }

// let person: Person = {
//   name: "James",
// };

// let lotOfPeople: Person[];

// type X = Person & {
//   a: string
//   b:number
// }

// type Y = X & {
//   c: string
//   d:number
// }

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  // console.log(todos);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = todos,
      complete = completedTodos;

    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete)
    setTodos(active)
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="App">
          <span className="heading">Taskify</span>
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setCompletedTodos={setCompletedTodos}
            completedTodos={completedTodos}
          />
        </div>
      </DragDropContext>
    </>
  );
};

export default App;
