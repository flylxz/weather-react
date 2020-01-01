import React from 'react';
import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className='nav-wrapper teal'>
      <div className='brand-logo left'>Get-a-weather</div>
      <ul className='right hide-on-small-and-down'>
        <li>
          <NavLink to='/' exact>
            Main
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' exact>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
