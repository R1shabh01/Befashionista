import { useContext } from "react";
import EachItem from "./EachItem";
import { TodoContext } from "../store/Todo-Context";

function TodoItem({ onDelete }) {
  const todoItems = useContext(TodoContext);
  return (
    <div className="container">
      {todoItems.map((item) => (
        <EachItem
          key={item.name}
          todoName={item.name}
          todoDate={item.date}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
export default TodoItem;
