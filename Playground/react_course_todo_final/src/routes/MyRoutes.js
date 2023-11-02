import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddToDo from "../pages/add-todo/AddToDo";
import Login from "../pages/login/Login";
import MainPage from "../pages/mainPage/MainPage";
import NotFound from "../pages/notfound/NotFound";
import ViewPage from "../pages/ViewPage/ViewPage";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} exact></Route>
        <Route path="/home" element={<MainPage />} exact />
        <Route path="/add" exact element={<AddToDo />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/view/:id" element={<ViewPage />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
