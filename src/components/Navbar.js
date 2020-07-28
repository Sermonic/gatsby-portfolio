import React from "react"
import { Link } from "gatsby"
import { GiHamburgerMenu } from "react-icons/gi"
import logo from "../assets/logo.svg"
import PageLinks from "../constants/links"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <GiHamburgerMenu />
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
