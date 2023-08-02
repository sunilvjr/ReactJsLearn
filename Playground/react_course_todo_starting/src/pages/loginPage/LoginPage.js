import NavBar from "../NavBar";

const LoginPage = () => {
  return (
    <>
      <NavBar />

      <div className="todo_container">
        <h3>Login</h3>
        <button
          onClick={() => {
            localStorage.setItem("loggedIn", true);
          }}
        >
          Login
        </button>
      </div>

      {/* <Link to="/Add">Go to Add page</Link> */}
      {/* <button onClick={Login}>Login</button> */}
    </>
  );
};
export default LoginPage;
