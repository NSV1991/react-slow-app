import React from "react";
import "./style.css";
import { DemoComponent } from "./DemoComponent";
import { Example } from "./Example";

const sleep = time => {
  const done = Date.now() + time;
  while (done > Date.now()) {
    // sleep...
  }
};

const App = () => {
  const [value, setValue] = React.useState("");
  const [time, setTime] = React.useState(200);
  return (
    <div>
      <Example time={time} value={value} sleep={sleep} onChange={setValue} />
      <DemoComponent time={time} sleep={sleep} onChange={setTime} />
    </div>
  );
};

export default App;
