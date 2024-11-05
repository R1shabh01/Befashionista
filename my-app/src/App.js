import AppName from "./components/AppName";
import Todo from "./components/Todo";
import { TodoContext } from "./store/Todo-Context";
import TodoItem from "./components/TodoItem";
import { useState } from "react";

function App() {
  // it is used to save the state of the page
  // let textState = useState("this is the text in input");
  // let text = textState[0];
  // let textSet = textState[1];
  //another way to save the state
  let [todoItems, setTodoItems] = useState([]);
  const handleAdd = (todoName1, todoDate1) => {
    const newTodoItem = [...todoItems, { name: todoName1, date: todoDate1 }];
    setTodoItems(newTodoItem);
    console.log(todoName1 + " : " + todoDate1);
  };
  const handleDelete = (todoName, todoDate) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoName);
    setTodoItems(newTodoItems);
    console.log(todoName + " : " + todoDate);
  };

  // let [text, textSet] = useState("this is the text in input");
  // const handle = (event) => {
  //   if (event.key === "Enter") {
  //     console.log(event.target.value);
  //     textSet(event.target.value);
  //   }
  // };
  // ... is a spread operator used to enter all the array elements
  return (
    <TodoContext.Provider value={todoItems}>
      <center className="todo-container">
        <AppName />
        <Todo onAdd={handleAdd} />
        {todoItems.length === 0 && <h1>Enjoy Your Day</h1>}
        <div className="item-container">
          <TodoItem onDelete={handleDelete} />
        </div>
      </center>
    </TodoContext.Provider>
  );
}

export default App;
