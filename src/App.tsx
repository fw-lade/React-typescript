import React from "react";
import "./App.css";

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
  return (
    <>
      <div className="App">
        <span className="heading">Taskify</span>
      </div>
    </>
  );
};

export default App;
