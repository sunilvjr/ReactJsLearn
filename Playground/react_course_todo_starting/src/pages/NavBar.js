import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="nav_bar">
        To-do v1
        <div className="menu_items">
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/Login">
            <div>Login</div>
          </Link>

          <Link to="/Add">
            <div>Add Todo</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
