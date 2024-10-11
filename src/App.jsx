import { useState } from "react";
import Autocomplete from "./components/Autocomplete/Autocomplete";
import FruitService from "./services/FruitService";
function App() {
  const a = new FruitService().getFruits();
  const [value, setValue] = useState("");
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span>{value}</span>
        <Autocomplete
          onChange={(e) => setValue(e.target.value)}
          value={value}
          options={a}
        ></Autocomplete>
      </div>
    </>
  );
}

export default App;
