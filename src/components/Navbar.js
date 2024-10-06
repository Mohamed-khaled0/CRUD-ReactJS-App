import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow" style={{ background: '#212929' }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bold" to={"/"}>CRUD APP</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <form className="d-flex">
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search" 
              aria-label="Search" 
            />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
