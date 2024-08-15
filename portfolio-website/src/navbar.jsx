import './navbar.css'; 
import './universal-style.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h1 className="navbar-title">@MATEJ_KLEMENCIC</h1> {/* H1 Element */}
        <ul className="navbar-links">
        <Link to="/">INFO</Link>
        <Link to="/projekti">PROJEKTI</Link>
        <Link to="/kontakt">KONTAKT</Link>
        

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
