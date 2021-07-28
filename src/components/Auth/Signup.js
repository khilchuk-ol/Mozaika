import { useCallback, useState } from "react";
import { Form } from "reactstrap";
import { useHistory } from "react-router";

import {
  required,
  validEmail,
  validPasword,
  validUsername,
  fileImage,
} from "../UI/Inputs/ValidationAndFeedback";
import AvatarInput from "../UI/Inputs/AvatarInput";
import TextInput from "../UI/Inputs/TextInput";
import RoundedButton from "../UI/RoundedButton";

function Signup(props) {
  const [formState, setFormState] = useState({
    success: false,
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

  const [emailState, setEmailState] = useState({
    email: "",
    isValid: true,
    feedback: null,
  });

  const [pictureState, setPictureState] = useState({
    fileName: "default.png",
    imageLoading: false,
    isValid: true,
    feedback: null,
  });

  const history = useHistory();

  const parseErrorMsg = useCallback((err, msg) => {
    if (msg && msg.search("E11000") !== -1) {
      let field = msg.slice(msg.search("{") + 2);
      field = field.slice(0, field.search(":"));

      return `Oops, it seems user with such ${field} has already been registered. Try choosing new ${field}`;
    }

    return err.reponse.statusText;
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();

    setFormState((prev) => ({
      ...prev,
      success: false,
      message: "",
    }));

    if (
      !usernameState.username ||
      !emailState.email ||
      !passwordState.password
    ) {
      setFormState((prev) => ({
        ...prev,
        success: false,
        message: "Fields cannot be empty",
      }));
      return;
    }

    if (usernameState.isValid && passwordState.isValid && emailState.isValid) {
      /*AuthService.register(
        usernameState.username,
        emailState.email,
        passwordState.password,
        pictureState.fileName
      ).then(
        (res) => {
          setFormState((prev) => ({
            ...prev,
            data: res.data,
            message: "Your account has been registered",
            success: true,
          }));

          history.replace("/login");
        },
        (err) => {
          const resMsg =
            err.response?.data?.message ?? err.message ?? err.toString();

          setFormState((prev) => ({
            ...prev,
            message: parseErrorMsg(err, resMsg),
          }));
        }
      );
    }
    
    async register(username, email, password, picture) {
    return axios.post(API_URL + "register", {
      username,
      email,
      password,
      picture,
    });*/
    }
  };

  return (
    <div className='main-body center'>
      <Form onSubmit={handleRegister}>
        <AvatarInput
          state={pictureState}
          setState={setPictureState}
          validations={[fileImage]}
        />

        <TextInput
          state={usernameState}
          setState={setUsernameState}
          validations={[required, validUsername]}
          name='username'
          type='text'
          placeholder='Username'
        />

        <TextInput
          state={emailState}
          setState={setEmailState}
          validations={[required, validEmail]}
          name='email'
          type='email'
          placeholder='Email'
        />

        <TextInput
          state={passwordState}
          setState={setPasswordState}
          validations={[required, validPasword]}
          name='password'
          type='password'
          placeholder='Pasword'
        />

        <RoundedButton
          text='Sign up'
          className='intensive-button'
          onClick={handleRegister}
        />

        {formState.message && (
          <div className='form-group' style={{ paddingTop: "0.5rem" }}>
            <div
              className={
                formState.success ? "alert alert-success" : "alert alert-danger"
              }
              role='alert'>
              {formState.message}
            </div>
          </div>
        )}
      </Form>
    </div>
  );
}

export default Signup;
