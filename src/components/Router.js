import { Switch, Route } from "react-router";

import Policy from "./Pages/Policy";
import NotFound from "./Pages/NotFound";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";

const Router = (props) => {
  return (
    <Switch>
      <Route exact path='/'>
        Hello
      </Route>
      <Route exact path='/signup'>
        <Signup />
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path='/policy'>
        <Policy />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Router;
