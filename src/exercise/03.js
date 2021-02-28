import * as React from "react";
import {Switch} from "../switch";

const ToggleContext = React.createContext();

function Toggle({onToggle, children}) {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);

  return (
    <ToggleContext.Provider value={{on, toggle}}>
      {children}
    </ToggleContext.Provider>
  );
}

function ToggleOn({children}) {
  const context = React.useContext(ToggleContext);
  return context.on ? children : null;
}

function ToggleOff({children}) {
  const context = React.useContext(ToggleContext);
  return context.on ? null : children;
}

function ToggleButton({...props}) {
  const context = React.useContext(ToggleContext);
  const {on, toggle} = context;
  return <Switch on={on} onClick={toggle} {...props} />;
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <div>
          <ToggleButton />
        </div>
      </Toggle>
    </div>
  );
}

export default App;

/*
eslint
  no-unused-vars: "off",
*/
