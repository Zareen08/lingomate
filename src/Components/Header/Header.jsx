import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    const menuItems = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold text-teal-600' : ''}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/findtutors" className={({ isActive }) => isActive ? 'font-bold text-teal-600' : ''}>
          Find tutors
        </NavLink>
      </li>
      <li>
        <NavLink to="/addtutorials" className={({ isActive }) => isActive ? 'font-bold text-teal-600' : ''}>
         Add Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink to="/mytutorials" className={({ isActive }) => isActive ? 'font-bold text-teal-600' : ''}>
          My Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink to="/bookedtutorials" className={({ isActive }) => isActive ? 'font-bold text-teal-600' : ''}>
          My booked tutors
        </NavLink>
      </li>
      </>
    )
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {menuItems}
      </ul>
    </div>
    <img src='/lingomate.png' className="btn btn-ghost text-xl w-25 h-16"></img>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menuItems}
    </ul>
  </div>
  <div className="navbar-end space-x-1">
    <NavLink to='/login' className="btn border-teal-600">Login</NavLink>
    <NavLink to='/register' className="btn border-teal-600">Register</NavLink>
  </div>
</div>
        </div>
    );
};

export default Header;