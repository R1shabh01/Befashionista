import { useSelector } from "react-redux";
import Homescreen from "../Components/Homescreen";
const Home = () => {
  const items = useSelector((store) => store.items);
  console.log("got items ", items);
  return (
    <div className="items-container">
      {items.map((item) => (
        <Homescreen key={item.id} item={item} />
      ))}
    </div>
  );
};
export default Home;
