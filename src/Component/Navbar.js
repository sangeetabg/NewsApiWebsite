import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="contact">ContactUs</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="news">News</Link>
                </li>
              </ul>


            </div>
          </div>
        </nav>

      </>
    )
  }
}

export default Navbar
