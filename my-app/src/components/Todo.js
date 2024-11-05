import { useState, useRef } from "react";
import { AiTwotoneFileAdd } from "react-icons/ai";

function Todo({ onAdd }) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();
  // we can use useRef to get the values from input without repainting the page multiple times
  const todoNameEle = useRef();
  const todoDateEle = useRef();

  const handleTodoName = (event) => {
    setTodoName(event.target.value);
  };

  const handleTodoDate = (event) => {
    setTodoDate(event.target.value);
  };
  const handleAddButton = () => {
    onAdd(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
    console.log(todoNameEle.current.value + " : " + todoDateEle.current.value);
  };
  return (
    <div className="container-todo text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter To-Do here"
            onChange={handleTodoName}
            ref={todoNameEle}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            onChange={handleTodoDate}
            ref={todoDateEle}
          ></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButton}
          >
            <AiTwotoneFileAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todo;
