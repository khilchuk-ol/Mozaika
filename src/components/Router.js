import { Switch, Route } from "react-router";

import Policy from "./Pages/Policy";
import NotFound from "./Pages/NotFound";

const Router = (props) => {
  return (
    <Switch>
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
