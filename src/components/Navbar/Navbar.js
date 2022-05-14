import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark py-2 p-4">
      <Link to="/" className="navbar-brand text-white ">
        React Redux contacts app
      </Link>
      {/*<ul className="navbar-nav">*/}
      {/*  <li className="nav-item"></li>*/}
      {/*</ul>*/}
    </nav>
  );
};

export default Navbar;