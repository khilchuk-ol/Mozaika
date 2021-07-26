import { useContext } from "react";
import ReactDOM from "react-dom";

import "./App.css";
import Header from "./components/Layout/Header";
import SettingsContext from "./store/settings-context";

function App() {
  const settingsCtx = useContext(SettingsContext);

  return (
    <div className='App'>
      {ReactDOM.createPortal(
        <link rel='stylesheet' href={`./themes/${settingsCtx.themeFile}`} />,
        document.getElementById("head")
      )}
      <Header />
    </div>
  );
}

export default App;
