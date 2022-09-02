import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Home/Shared/Navbar";

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
