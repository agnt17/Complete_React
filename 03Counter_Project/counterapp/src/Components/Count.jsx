// import "./count.css";
import { useState } from "react";

function Count() {
  let [Value, setValue] = useState(0); // Now this shit is used to repaint the UI as because when this buddy was not here the repainting is not happening.
  function Increment(){
    Value = Value + 1;
    setValue(Value);
  }
  function Decrement(){
    Value = Value - 1;
    setValue(Value);
  }
  return (
      <>
      <button className="bg-blue-400 m-3 rounded-lg flex-row" onClick={Decrement}>Decrement </button> 
      <button className="bg-blue-400 m-3 rounded-lg flex-row " onClick={Increment}>Increment</button>
      <div className=
      "">Counter value: {Value}</div>
    </>
  );
}

export default Count;
