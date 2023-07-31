import { Route } from "react-router-dom/cjs/react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AddTodo from "../pages/add-Todo/AddTodo";

const Routes = () => {
  return (
    <>
      <Route path="/" component="{MainPage}" exact></Route>
      <Route path="/Add" component="{AddTodo}"></Route>
    </>
  );
};
export default Routes;
