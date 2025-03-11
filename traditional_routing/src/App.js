import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Conatct from "./Conatct";
import Search from "./Search";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About Us</Link>
          <Link to={"/search"}>Search</Link>
          <Link to={"/contact"}>Contact us</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Conatct></Conatct>}></Route>
          <Route path="/search" element={<Search></Search>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
