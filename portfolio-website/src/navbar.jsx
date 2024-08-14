import './navbar.css'; 
import './universal-style.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h1 className="navbar-title">My Website Title</h1> {/* H1 Element */}
        <ul className="navbar-links">
        <Link to="/">Home</Link>
      <Link to="/projekti">Projekti</Link>
      <Link to="/kontakt">Kontakt</Link>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
