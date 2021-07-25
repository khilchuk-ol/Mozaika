import { Fragment, useContext } from "react";
import ReactDOM from "react-dom";

import "./App.css";
import Header from "./components/UI/Header";
import SettingsContext from "./store/settings-context";

function App() {
  const settingsCtx = useContext(SettingsContext);

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <link rel='stylesheet' href={`./themes/${settingsCtx.themeFile}`} />,
        document.getElementById("head")
      )}
      <Header />
    </Fragment>
  );
}

export default App;
