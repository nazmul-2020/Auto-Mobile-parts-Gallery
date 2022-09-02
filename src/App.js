import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Home/Shared/Footer/Footer";
import Navbar from "./Pages/Home/Shared/Navbar";

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
