import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "../Components/Header";
import FetchItems from "../Components/FetchItems";
import { useSelector } from "react-redux";
import Loading from "../Components/Loading";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <div>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <Loading /> : <Outlet />}
    </div>
  );
}

export default App;
