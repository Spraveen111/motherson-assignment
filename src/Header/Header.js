import React from "react";

import { Link,animateScroll as scroll } from "react-scroll";

import './Header.css';

function Header() {
  return (
    <nav className='main-header-container'>
      <p className='mod'>Modelyn Torff</p>
      <ul className='ul-order'>
      <Link to="about" smooth={true} duration={500}>
  <li className='li'>About</li>
</Link>

        <Link to="projects" smooth={true} duration={500}>
          <li className='li'>Projects</li>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <li className='li'>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Header;
