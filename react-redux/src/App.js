import { useSelector } from "react-redux";
import "./App.css";
import Container from "./components/Container";
import Control from "./components/Controls";
import Display from "./components/Display";
import Header from "./components/Header";
import Privacy from "./components/Privacy";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <div className="App">
      <Container>
        <div className="px-4 py-5 my-5 text-center">
          <Header />
          <div className="col-lg-6 mx-auto">
            {privacy ? <Privacy /> : <Display />}
            <Control />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
