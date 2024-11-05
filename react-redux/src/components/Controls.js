import { useRef } from "react";
import { useDispatch } from "react-redux";

const Control = () => {
  const dispatch = useDispatch();
  const Input = useRef();

  const handleAdd = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleSub = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAddition = () => {
    dispatch({
      type: "ADDITION",
      payload: { num: Input.current.value },
    });
    Input.current.value = "";
  };
  const handleSubtraction = () => {
    dispatch({
      type: "SUBTRACTION",
      payload: { num: Input.current.value },
    });
    Input.current.value = "";
  };
  const handlePrivacy = () => {
    dispatch({
      type: "PRIVACY",
    });
  };

  return (
    <>
      <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleAdd}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
          onClick={handleSub}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handlePrivacy}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-3 d-sm-flex justify-content-sm-center text-input">
        <input type="text" placeholder="Enter the Number" ref={Input} />
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleAddition}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
          onClick={handleSubtraction}
        >
          Subtract
        </button>
      </div>
    </>
  );
};
export default Control;
