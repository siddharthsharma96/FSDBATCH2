import "./App.css";
import React from "react";
import AS, { B } from "./AS";
import A1 from "./A1";
function App() {
  // const a = React.createElement("p", [], "hello world");
  const info = { name: "Siddharth", mobile: "hdfghdf" };
  return (
    <div className="App">
      <p>loredfsdf</p>
      {/* {a} */}
      <AS info={info} aa={"dfdf"} />
      <B></B>

      <p>Props Drilling</p>
      <A1 info={info}></A1>
    </div>
  );
}

export default App;
