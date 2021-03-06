/* eslint-disable */ 
import './Header.module.css';
import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';

const Header = () => (
  <header>
    <NavLink
      to="/"
    >
      <img className="logo-img" alt="logo" src={planet} />
      <h1 className="title">Space Travelers&quot; Hub</h1>
    </NavLink>
    <nav className="header__nav">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/"
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/missions"
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/dragons"
          >
            Dragons
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
