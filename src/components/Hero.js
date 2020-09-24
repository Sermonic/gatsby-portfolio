import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import heroImage from "../assets/hero-img.png"

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="hero-container">
            <div className="underline"></div>
            <h1>Welcome </h1>
            <h4>
              If you are here, <br />
              let me briefly introduce myself
            </h4>
            <Link to="/about" className="btn">
              about me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <img src={heroImage} alt="Hero" className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
