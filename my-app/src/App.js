import "./App.css";
import React from "react";
import Comp from "./Comp";
import { Comp2, Comp3 } from "./Comp2";
import WithFragments from "./WithFragments";
import WithoutFragments from "./WithoutFragments";
import DynamicComponent from "./DynamicComponent";

function App() {
  let a = React.createElement("p", {}, "Hello from Jsx");
  const list = [
    React.createElement("li", { class: "as" }, "Item 1"),
    React.createElement("li", {}, "Item 2"),
    React.createElement("li", {}, "Item 3"),
  ];
  const b = React.createElement("ul", {}, list);

  return (
    <div className="App">
      <p>Hello from Codehub Nexus</p>

      <p>Hello from Codehub Nexus</p>
      {/*  */}
      {a}
      {b}
      <Comp />

      <Comp2 />
      <Comp3 />
      <div className="forReference">
        <WithFragments />
        <WithoutFragments />
      </div>
      {/* <DynamicComponent aa={"Hello from Codehub Nexus"} as={"Hello one more"} />
      <DynamicComponent aa={232323} asd={"ghdgfhdgf"} /> */}
      <DynamicComponent aa={"Hello from Codehub Nexus"} as={"Hello one more"}>
        <p>ghdesjhfgdehjs</p>
        <ol>
          <li>hdhsdgh</li>
        </ol>
      </DynamicComponent>
    </div>
  );
}

export default App;
