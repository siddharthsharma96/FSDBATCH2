import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "./UserContext";
import LoginContext from "./loginContext";
const Header = () => {
  const { userName } = useContext(UserContext);
  console.log(userName);
  const { a } = useContext(LoginContext);

  return (
    <div className="header">
      <div className="navItems">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </div>
      <div className="navItems">
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
      </div>
      <div className="navItems">
        <NavLink
          to={"/hoc"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          HOC
        </NavLink>
      </div>
      <div className="navItems">
        <NavLink
          to={"/useEffect"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          UseEffect
        </NavLink>
      </div>
      <div className="navItems">
        <NavLink
          to={"/counter"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Counter
        </NavLink>
      </div>
      <div className="navItems">
        <NavLink
          to={"/cart"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Cart
        </NavLink>
      </div>
      <div className="navItems">
        <NavLink
          to={"/contactus"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact Us
        </NavLink>
      </div>
      <p>{a}</p>
    </div>
  );
};

export default Header;
