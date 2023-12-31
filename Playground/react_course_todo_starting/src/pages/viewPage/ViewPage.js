import { Link, Route } from "react-router-dom";
import NavBar from "../NavBar";
import { useHistory, useParams, useLocation } from "react-router-dom";
import AuthCheckBoolean from "../../middleware/AuthCheckBoolean";

const ViewPage = () => {
  const hitory = useHistory();
  //Params
  const getParams = useParams();

  console.log(getParams.id);

  const getId = getParams.id;

  const getStorage = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  const getData = getStorage[getId];

  // const goBack = () => {
  //   hitory.push("/");
  // };

  //QueryString
  // const getLocation = useLocation();

  // const getURLParams = new URLSearchParams(getLocation.search);

  // const getId = getURLParams.get("id");

  // console.log(getId);

  // //console.log(getLocation.search);

  // const getStorage = localStorage.getItem("todo")
  //   ? JSON.parse(localStorage.getItem("todo"))
  //   : [];

  // const getData = getStorage[getId];

  const deleteTodo = () => {
    getStorage.splice(getId, 1);
    localStorage.setItem("todo", JSON.stringify(getStorage));
    hitory.replace("/");
  };

  return (
    <>
      <NavBar />
      <div className="todo_container">
        <button
          onClick={() => {
            hitory.push("/");
          }}
          style={{ background: "#e7e7e7", color: "#000" }}
        >
          Go Back
        </button>

        <div
          style={{ background: "#e7e7e7", padding: "10px", margin: "5px 0px" }}
        >
          {getData}
        </div>
        {AuthCheckBoolean() ? (
          <>
            <button onClick={deleteTodo} style={{ background: "red" }}>
              Delete Todo
            </button>
          </>
        ) : (
          <>
            <p>
              Please <Link to="'Login">login</Link> to see more options.
            </p>
          </>
        )}

        <Route path="/view/:id/data">
          <div>Some data...</div>
        </Route>
      </div>
    </>
  );
};

export default ViewPage;
