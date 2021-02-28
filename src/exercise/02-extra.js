import * as React from "react";
import {Switch} from "../switch";

function Toggle({...props}) {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);

  return React.Children.map(props.children, child => {
    return typeof child.type === "string"
      ? child
      : React.cloneElement(child, {on, toggle});
  });
}

const ToggleOn = ({on, children}) => on && children;

const ToggleOff = ({on, children}) => !on && children;

const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />;

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
      </Toggle>
    </div>
  );
}

export default App;
