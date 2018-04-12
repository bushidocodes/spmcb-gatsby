import React, { Component } from "react";
import Link from "gatsby-link";

import github from "../img/github-icon.svg";
import linkedin from "../img/linkedin-icon.svg";
import twitter from "../img/twitter-icon.svg";
import logo from "../img/samurai-helmet.png";

class Navbar extends Component {
  state = {
    menuIsExpanded: false
  };
  toggleMenu = () =>
    this.setState({ menuIsExpanded: !this.state.menuIsExpanded });
  render() {
    return (
      <nav className="navbar is-light">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <figure className="image">
              <img src={logo} alt="Bushido Codes" style={{ width: "30px" }} />
            </figure>
          </Link>
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <Link className="navbar-item" to="/projects">
            Portfolio
          </Link>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            onClick={this.toggleMenu}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div
          className={`navbar-menu ${
            this.state.menuIsExpanded ? "is-active" : ""
          }`}
        >
          <div className="navbar-start" />
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://www.linkedin.com/in/spmcbride1201/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={linkedin} alt="LinkedIn" />
              </span>
            </a>
            <a
              className="navbar-item"
              href="https://twitter.com/spmcbride1201"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={twitter} alt="Twitter" />
              </span>
            </a>
            <a
              className="navbar-item"
              href="https://github.com/spmcbride1201"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
