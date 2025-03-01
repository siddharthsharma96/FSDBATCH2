import "./App.css";
import { useEffect, useState } from "react";
import Counter from "./Counter";

function App() {
  // 1 value is the variable
  // 2nd value it is a function to update the forst value
  const [val, setVal] = useState(0);

  const handleIncrement = () => {
    setVal(val + 1);
    // val = val + 1;
    // console.log(val);
  };
  const handleDecrement = () => {
    setVal(val - 1);
    // val = val - 1;
    // console.log(val);
  };
  // 1. callback function
  // 2. Array of dependencies/states
  //  []=Run only 1 time at intial phase only
  // [dep]= Whenever depencies value change
  // not any array run every time whenever any state changes
  useEffect(() => {
    if (val < 0) {
      let interval = setTimeout(() => {
        setVal(0);
      }, 3000);

      // cleanuo function
      return () => {
        clearTimeout(interval);
      };
    }
    console.log("hi iam rendering ");
  }, [val]);

  return (
    <div className="App">
      <p>Counter Application</p>
      <Counter
        val={val}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
    </div>
  );
}

export default App;
