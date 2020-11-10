import React from "react";
import "./style.css";
import { DemoComponent } from "./DemoComponent";
import { Example } from "./Example";

const App = () => {
  const [value, setValue] = React.useState("");
  const [time, setTime] = React.useState(200);
  return (
    <div>
      <Example time={time} value={value} onChange={setValue} />
      <DemoComponent time={time} onChange={setTime} />
    </div>
  );
};

export default App;
