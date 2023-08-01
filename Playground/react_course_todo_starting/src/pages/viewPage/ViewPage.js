import NavBar from "../NavBar";
import { useHistory, useParams } from "react-router-dom";

const ViewPage = () => {
  const hitory = useHistory();

  const getParams = useParams();

  console.log(getParams.id);

  const getId = getParams.id;

  const getStorage = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  const getData = getStorage[getId];

  //   const goBack = () => {
  //     hitory.push("/");
  //   };

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
      </div>
    </>
  );
};

export default ViewPage;
