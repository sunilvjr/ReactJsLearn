import { Route } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AddTodo from "../pages/add-todo/AddTodo";

const Routes = () => {
  return (
    <>
      <Route path="/" component="{MainPage}"></Route>
      <Route path="/Add" component="{AddTodo}"></Route>
    </>
  );
};
export default Routes;
