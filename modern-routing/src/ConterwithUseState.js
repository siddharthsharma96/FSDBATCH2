import { useState } from "react";
// import Decrement from "./Decrement";
// import Increment from "./Increment";
import Actions from "./Actions";

const CounterwithUseState = () => {
  let [val, setVal] = useState(0);
  let handleDecrement = () => {
    setVal(val - 1);
  };
  return (
    <div>
      <h1>Learning useState</h1>
      <ul>
        <li>In this we take an array with two values</li>
        <li>In this first argument is variable</li>
        <li>second value is a function to update the first value</li>
        <li>
          For default value we are just puuting the value inside useState(0)
        </li>
      </ul>

      <div className="section">
        <div>
          <p>{val}</p>
          <div>
            <Actions
              func={() => {
                setVal(val + 1);
              }}
              Value={"Increment"}
            />
            <Actions func={handleDecrement} Value={"Decrement"} />
            {/* <Increment
              handleDecrement={() => {
                setVal(val + 1);
              }}
            />
            <Decrement handleDecrement={handleDecrement} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterwithUseState;
