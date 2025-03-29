import logo from "./logo.svg";
import "./App.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Sidebar from "./common/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="a">
      <Header />
      <div className={`container ${"c"}`}>
        <Sidebar />

        <Home cla={"sd"} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
