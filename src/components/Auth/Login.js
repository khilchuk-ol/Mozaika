import { useState } from "react";
import { Form } from "reactstrap";
import { useHistory } from "react-router";

import { required } from "../UI/Inputs/ValidationAndFeedback";
import RoundedButton from "../UI/RoundedButton";
import TextInput from "../UI/Inputs/TextInput";

function Login() {
  const [formState, setFormState] = useState({
    loading: false,
    message: "",
  });

  const [usernameState, setUsernameState] = useState({
    username: "",
    isValid: true,
    feedback: null,
  });

  const [passwordState, setPasswordState] = useState({
    password: "",
    isValid: true,
    feedback: null,
  });

  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    setFormState((prev) => ({ ...prev, message: "", loading: true }));

    if (!usernameState.username || !passwordState.password) {
      setFormState((prev) => ({
        ...prev,
        loading: false,
        message: "Fields cannot be empty",
      }));
      return;
    }

    if (passwordState.isValid && usernameState.isValid) {
      /*AuthService.login(usernameState.username, passwordState.password).then(
        () => {
          //history.replace("/profile");
          window.location.reload();
        },
        (err) => {
          let resMsg =
            (err.response && err.response.data && err.response.data.message) ||
            err.message ||
            err.toString();

          if (resMsg.search("401") !== -1) {
            resMsg = "Incorrect username or password";
          }

          setFormState({
            loading: false,
            message: resMsg,
          });
        }
      );
      
      async login(username, password) {
    return axios
      .post(API_URL + "login", {
        username,
        password,
      })
      .then((res) => {
        if (res.data?.username) {
          localStorage.setItem("user", JSON.stringify(res.data));
        }

        return res.data;
      });
  }*/
    } else {
      setFormState((prev) => ({ ...prev, loading: false }));
    }
  };

  return (
    <div className='main-body center'>
      <Form onSubmit={handleLogin}>
        <TextInput
          state={usernameState}
          setState={setUsernameState}
          validations={[required]}
          name='username'
          type='text'
          placeholder='Username'
          className='text-colored'
        />

        <TextInput
          state={passwordState}
          setState={setPasswordState}
          validations={[required]}
          name='password'
          type='password'
          placeholder='Pasword'
          className='text-colored'
        />

        {formState.loading ? (
          <p>Loading...</p>
        ) : (
          <RoundedButton
            text='Log in'
            className='intensive-button'
            onClick={handleLogin}
          />
        )}

        {formState.message && (
          <div className='form-group' style={{ padding: "0.5rem" }}>
            <div className='alert alert-danger' role='alert'>
              {formState.message}
            </div>
          </div>
        )}
      </Form>
    </div>
  );
}

export default Login;
