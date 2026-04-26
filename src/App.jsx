import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Filosofia from "./pages/Philosophy";
import Galeria from "./pages/Gallery";
import Reservas from "./pages/Reservations";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/philosophy" element={<Filosofia />} />
        <Route path="/gallery" element={<Galeria />} />
        <Route path="/reservations" element={<Reservas />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;