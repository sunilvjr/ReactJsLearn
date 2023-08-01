import { Route } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AddTodo from "../pages/add-todo/AddTodo";
import ViewPage from "../pages/viewPage/ViewPage";

const Routes = () => {
  return (
    <>
      <Route path="/" component={MainPage} exact></Route>
      <Route path="/Add" component={AddTodo} exact></Route>
      <Route path="/View/:id" component={ViewPage} exact></Route>
    </>
  );
};
export default Routes;
