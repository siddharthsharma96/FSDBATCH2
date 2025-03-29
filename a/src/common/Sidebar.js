import NavItem from "../components/NavItems";

const Sidebar = () => {
  return (
    <nav class="sidebar">
      <NavItem aa={"Home"} />
      <NavItem aa={"Profile"} />

      <NavItem aa={"Settings"} />
      <NavItem aa={"Logout"} />
    </nav>
  );
};

export default Sidebar;
