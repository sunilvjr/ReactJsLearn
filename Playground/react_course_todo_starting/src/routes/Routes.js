import { Route, BrowserRouter, Switch } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AddTodo from "../pages/add-todo/AddTodo";
import ViewPage from "../pages/viewPage/ViewPage";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import LoginPage from "../pages/loginPage/LoginPage";
import NotFound from "../pages/notFound/NotFound";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Redirection */}
        <Route path="/" exact>
          <Redirect to="/Home"></Redirect>
        </Route>
        <Route path="/Home" component={MainPage} exact></Route>
        {/* <Route path="/Add" component={AddTodo} exact></Route> */}
        <Route path="/Login" component={LoginPage}></Route>
        {/* <Route path="/Add" exact>
          {localStorage.getItem("loggedIn") ? (
            <>
              <AddTodo />
            </>
          ) : (
            <Redirect to="/Login"></Redirect>
          )}
        </Route> */}

        <Route path="/Add" component={AddTodo}></Route>
        <Route path="/View/:id" component={ViewPage}></Route>
        {/* <Route path="/View" component={ViewPage} exact></Route> */}

        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
