import { Route } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AddTodo from "../pages/add-todo/AddTodo";
import ViewPage from "../pages/viewPage/ViewPage";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import LoginPage from "../pages/loginPage/LoginPage";

const Routes = () => {
  return (
    <>
      {/* Redirection */}
      <Route path="/" exact>
        <Redirect to="/Home"></Redirect>
      </Route>
      <Route path="/Home" component={MainPage} exact></Route>
      {/* <Route path="/Add" component={AddTodo} exact></Route> */}
      <Route path="/Login" component={LoginPage} exact></Route>
      <Route path="/Add" exact>
        {localStorage.getItem("loggedIn") ? (
          <>
            <AddTodo />
          </>
        ) : (
          <Redirect to="/Login"></Redirect>
        )}
      </Route>
      <Route path="/View/:id" component={ViewPage} exact></Route>
      {/* <Route path="/View" component={ViewPage} exact></Route> */}
    </>
  );
};
export default Routes;
