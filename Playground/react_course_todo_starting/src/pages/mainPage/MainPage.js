import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import { FaRegEye } from "react-icons/fa";

const MainPage = () => {
  //const History = useHistory();
  // const Login = () => {
  //   //Login logic
  //   //Login Successful
  //   //History.push("/Add");

  //   History.replace("/Add");
  // };

  const getTodo = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  return (
    <>
      <NavBar />

      <div className="todo_container">
        <h3>Yours Todo</h3>
        {getTodo.map((el, index) => (
          <>
            <div className="single_todo">
              {el}
              <Link to={`/View/${index}`}>
                <FaRegEye size={"20px"} />
              </Link>
            </div>
          </>
        ))}
      </div>

      {/* <Link to="/Add">Go to Add page</Link> */}
      {/* <button onClick={Login}>Login</button> */}
    </>
  );
};
export default MainPage;
