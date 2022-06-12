import React from "react";
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className="navbar">
      <Link to="/">
        <h2>Movies App</h2>
      </Link>
      
    </div>
  );
}

export default Header;
