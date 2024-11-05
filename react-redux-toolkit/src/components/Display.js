import { useSelector } from "react-redux";

function Display() {
  const { counterVal } = useSelector((store) => store.counter);
  return <p className="lead mb-4">Counter Value is : {counterVal}</p>;
}
export default Display;
