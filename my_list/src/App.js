import "./App.css";
import React from "react";
import AS, { B } from "./AS";
function App() {
  // const a = React.createElement("p", [], "hello world");
  const s = { name: "Siddharth", mobile: "hdfghdf" };
  return (
    <div className="App">
      <p>loredfsdf</p>
      {/* {a} */}
      <AS info={s} aa={"dfdf"} />
      <B></B>
    </div>
  );
}

export default App;
