import { Route, Routes } from "react-router-dom";
import Sudoku from "./components/Sudoku";
import About from "./components/About";

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Sudoku />} />
        <Route path="/about" element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
