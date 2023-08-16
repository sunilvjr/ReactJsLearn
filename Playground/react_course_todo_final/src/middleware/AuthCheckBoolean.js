import { useNavigate } from "react-router-dom";

const AuthCheckBoolean = () => {
  const history = useNavigate();

  let loggedIn = false;

  if (localStorage.getItem("loggedIn")) {
    loggedIn = true;
  }

  return loggedIn;
};

export default AuthCheckBoolean;
