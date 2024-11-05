import { AiFillDelete } from "react-icons/ai";

function EachItem({ todoName, todoDate, onDelete }) {
  return (
    <div className="row kg-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger kg-button"
          onClick={() => onDelete(todoName, todoDate)}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}
export default EachItem;
