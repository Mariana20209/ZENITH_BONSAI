import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">ZENITH BONSAI</Link>

      <nav className="nav">
        <Link to="/philosophy">Filosofía</Link>
        <Link to="/gallery">Galería</Link>
        <Link to="/reservations">Reservas</Link>
      </nav>
    </header>
  );
};

export default Header;