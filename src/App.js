import { useState } from "react";
import './App.css';

function App() {
  const [color, setColor] = useState("");
  function handelClick(color) {
    setColor(color);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="signal-container">

          <div className="red"
            onClick={() => handelClick("red")}
            style={{ opacity: color === "red" ? 1 : 0.5 }} />

          <div className="yellow"
            onClick={() => handelClick("yellow")}
            style={{ opacity: color === "yellow" ? 1 : 0.5 }} />

          <div className="green"
            onClick={() => handelClick("green")}
            style={{ opacity: color === "green" ? 1 : 0.5 }} />

        </div>
      </div>
    </div>
  );
}

export default App;
