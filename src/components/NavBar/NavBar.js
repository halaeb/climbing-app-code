import React from 'react';
import logo from './logo.svg';
import './NavBar.css';

const NavBar = {
  render() {
    return (
      <nav className="NavBarItems">
        <div className="navbar-logo">
          Chicago Climbing Connection
          <img src={logo} className="logo" alt="logo" />
        </div>

        <ul className="nav-menu">
          <li>
            <button type="button" className="navbar-item">Dashboard</button>
          </li>
          <li>
            <button type="button" className="navbar-item">Find a Partner</button>
          </li>
          <li>
            <button type="button" className="navbar-item">Challenges</button>
          </li>
          <li>
            <button type="button" className="navbar-item">Gear Trade</button>
          </li>

        </ul>
      </nav>

    );
  },
};

export default NavBar;
