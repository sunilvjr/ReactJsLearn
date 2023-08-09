import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const email_ref = useRef();
  const password_ref = useRef();
  //Form Submit
  const LoginHandler = async (e) => {
    e.preventDefault();

    const LoginData = {
      email: email_ref.current.value,
      password: password_ref.current.value,
    };

    try {
      //Calling API..
      var repsonse = await axios.post(
        "https://api.dynoacademy.com/test-api/v1/login",
        LoginData,
        { timeout: 10000 }
      );

      //Storing Access token in local Storage
      const getAccessToken = repsonse.data.accessToken;
      localStorage.setItem("accessToken", getAccessToken);

      if (repsonse.data.status === "success") {
        alert("Logged in successful.");
      }
      history.replace("/");
    } catch (ex) {
      //Error Handling
      console.log(ex.response.data.errors[0].message);
      if (ex.response) {
        alert(ex.response.data.errors[0].message);
      } else {
        alert("Unknown error occured! Please try again after few minutes");
      }
    }
  };

  //UI part
  return (
    <>
      <b>Login</b>
      <br />
      <br />
      <form onSubmit={LoginHandler}>
        <b>Email</b>
        <br />
        <input type="text" ref={email_ref}></input>
        <br />
        <br />
        <b>Password</b>
        <br />
        <input type="password" ref={password_ref}></input>
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
