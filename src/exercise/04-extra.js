import * as React from "react";
import {Switch} from "../switch";

function useToggle() {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);

  const getTogglerProps = ({onClick}) => {
    return {
      on,
      toggle,
      "aria-pressed": on,
      onClick: onClick ?? toggle,
    };
  };
  return {on, toggle, getTogglerProps};
}

function App() {
  const {on, getTogglerProps} = useToggle();
  return (
    <div>
      <Switch {...getTogglerProps({ })} />
      <hr />
      <button
        {...getTogglerProps({
          "aria-label": "custom-button",
          onClick: () => console.info("onButtonClick"),
        })}
      >
        {on ? "on" : "off"}
      </button>
    </div>
  );
}

export default App;
