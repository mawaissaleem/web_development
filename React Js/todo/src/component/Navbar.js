import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
<>
<nav className="navbar navbar-expand-lg navbar-dark">
  <Link className="navbar-brand" to="/" style={{color:"#BAFF39"}}>Shadow</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/todo">Todo App <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/expense">Expense Tracker App</Link>
      </li>

    </ul>

  </div>
</nav>
</>
  )
}
