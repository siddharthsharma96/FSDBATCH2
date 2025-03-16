import { useEffect, useRef, useState } from "react";
import Actions from "./Actions";

const CounterWithUseEffect = () => {
  const [val, setVal] = useState(0);
  const a = useRef();
  // const [vals, setVals] = useState(0);
  let handleDecrement = () => {
    setVal(val - 1);
  };
  // let handleDecrements = () => {
  //   setVals(vals - 1);
  // };
  console.log(a);
  useEffect(() => {
    if (val < 0) {
      a.current.style.color = "red";
      let aa = setTimeout(() => {
        setVal(0);
        a.current.style.color = "black";
      }, 3000);
      // CleanUp Function
      return () => {
        clearTimeout(aa);
      };
    }
    console.log("element rendered");
  }, [val]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const response = await data.json();
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, []);
  return (
    <div>
      <h1>Learning useEffect</h1>
      <ul>
        <li>In this it take two arguments it is used to handle side effects</li>
        <li>In this first paramenter is caalback function </li>
        <li>second parameter is array of dependencies</li>
        <ul>
          <li>first case if empty array then run for first time only</li>
          <li>
            Second case if in array a value is give then run every time whenever
            state changes
          </li>
          <li>
            Third case if array is not there then it will run everytime
            wheneverany state in the components will update
          </li>
        </ul>
      </ul>
      <div className="section">
        <div>
          <p ref={a}>{val}</p>
          <div>
            <Actions
              func={() => {
                setVal(val + 1);
              }}
              Value={"Increment"}
            />
            <Actions func={handleDecrement} Value={"Decrement"} />
          </div>
        </div>
      </div>
      {/* <div className="section">
        <div>
          <p>{vals}</p>
          <div>
            <Actions
              func={() => {
                setVals(vals + 1);
              }}
              Value={"Increment"}
            />
            <Actions func={handleDecrements} Value={"Decrement"} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CounterWithUseEffect;
