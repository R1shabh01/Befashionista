import "./App.css";
import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import PostListProvider from "../Store/PostListStore";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  // outlet is used for routing
  return (
    <PostListProvider>
      <div className="App">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
