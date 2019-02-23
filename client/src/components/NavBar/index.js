import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Eric's React Book Search App
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">Search Books</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/books">Bookshelf</a>
        </li>
      </ul>


    </nav>
  );
}

export default NavBar;