import "./styles.css";
import Home, { NamedExports } from "./Home";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("Muhammad");

  const refref = () => {
    alert("app comp");
    setName("Ajiajiu");
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Home name={name} function={refref} />
      <NamedExports name="aji" />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
