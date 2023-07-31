import { BrowserRouter, Switch } from "react-router-dom";
import "./styles/app.css";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Routes></Routes>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
