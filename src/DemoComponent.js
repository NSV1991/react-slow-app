import React from "react";

export const DemoComponent = ({ sleep, time, onChange }) => {
  sleep(time);
  return (
    <div>
      Late by{" "}
      <input
        value={time}
        type="number"
        onChange={e => onChange(Number(e.target.value))}
      />
      ms slow
    </div>
  );
};
