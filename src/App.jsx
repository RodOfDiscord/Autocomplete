import Autocomplete from "./components/Autocomplete/Autocomplete";
import FruitService from "./services/FruitService";
function App() {
  const a = new FruitService().getFruits();
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Autocomplete options={a}></Autocomplete>
      </div>
    </>
  );
}

export default App;
