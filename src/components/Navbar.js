import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () =>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <Link to="/" className="navbar-brand">
          <img className="logo" src={logo} alt="nav logo" />
        </Link>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item" key="li1">
              <a className="nav-link" href="#Section4">Catálogo<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item dropdown" key="li2">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Productos
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/jabones">Jabones</Link>
                <Link className="dropdown-item" to="/shampoos">Shampoos</Link>
                <Link className="dropdown-item" to="/velas">Velas</Link>
                <Link className="dropdown-item" to="/balsamos">Cremas y Balsamos</Link>
                <Link className="dropdown-item" to="/materiales">Materiales</Link>
              </div>
            </li>
            <li className="nav-item" key="li3">
              <a className="nav-link" href="#Section5">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>;

export default Navbar;
