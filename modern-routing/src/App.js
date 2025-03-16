import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import UserContext from "./UserContext";
import LoginContext from "./loginContext";

function App() {
  // const userName = "Rahul";
  return (
    <div>
      <UserContext.Provider value={{ userName: "Siddharth" }}>
        <LoginContext.Provider value={{ a: "trues" }}>
          <Header />
        </LoginContext.Provider>
        <Outlet />
      </UserContext.Provider>
    </div>
  );
}

export default App;
