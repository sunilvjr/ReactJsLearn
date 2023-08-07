import { Route, Link } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../NavBar";
import { useHistory } from "react-router-dom";
const LoginPage = () => {
  const history = useHistory();

  const Logout = () => {
    localStorage.removeItem("loggedIn");
    history.push("/");
  };

  return (
    <>
      <NavBar />

      <div className="todo_container">
        <h3>Login</h3>
        {localStorage.getItem("loggedIn") ? (
          <>
            You are already logged in.
            <button onClick={Logout} style={{ color: "red" }}>
              Log out
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                alert("You are successfully logged in.");
                localStorage.setItem("loggedIn", true);
                history.replace("/");
              }}
            >
              Login
            </button>

            <br />
            <br />
            <Link to="/Login/ShowInfo"> Show Login Info</Link>
            <br />
            <Route path="/Login/ShowInfo">
              <div>This is dummy page.</div>
            </Route>
          </>
        )}
      </div>

      {/* <Link to="/Add">Go to Add page</Link> */}
      {/* <button onClick={Login}>Login</button> */}
    </>
  );
};
export default LoginPage;
