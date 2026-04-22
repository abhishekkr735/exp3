import { useState } from "react";
import "./App.css";

import Exp3_1 from "./experiments/Exp3_1_ProductCard/Exp3_1";
import Exp3_2 from "./experiments/Exp3_2_Library/Exp3_2";
import Exp3_3 from "./experiments/Exp3_3_Person/Exp3_3";

function App() {
  const [exp, setExp] = useState(1);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Experiment 3</h1>

      <button onClick={() => setExp(1)}>Exp 3.1</button>
      <button onClick={() => setExp(2)}>Exp 3.2</button>
      <button onClick={() => setExp(3)}>Exp 3.3</button>

      {exp === 1 && <Exp3_1 />}
      {exp === 2 && <Exp3_2 />}
      {exp === 3 && <Exp3_3 />}
    </div>
  );
}

export default App;