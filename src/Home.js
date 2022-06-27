import React, { useState } from 'react';
import './Home.css';
import logo from "./img/logo.png";

export default function Home() {
  // fixed header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 0)
  });
  // TOGGLE MENU
  const [show, setShow] = useState(true);

  return (
    <div className='home' id="Home" >
      <div className='home__bg'>
        <div className='header d__flex align__items__center pxy__30'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
          <div className='navigation pxy__30'>
            <ul className='navbar d__flex'>
              <a href='#Home'><li className='nav__items mx__15'>Home</li></a>
              <a href='#About'><li className='nav__items mx__15'>About</li></a>
              <a href='#Portfolio'><li className='nav__items mx__15'>Portfolio</li></a>
              <a href='#Services'><li className='nav__items mx__15'>Services</li></a>
              <a href='#Contact'><li className='nav__items mx__15'>Contact</li></a>
            </ul>
          </div>

          {/* TOGGLE MENU */}

          <div className='toggle__menu'>
            <svg onClick={() => setShow(!show)}>

            </svg>

          </div>

          {show ? (
            <div className='sideNavbar'>
              <ul className='sidebar d__flex'>
                <li className='sideNavbar' >
                  <a href='#Home'>Home</a>
                </li>
                <li className='sideNavbar' >
                  <a href='#About'>About</a>
                </li>
                <li className='sideNavbar' >
                  <a href='#Portfolio'>Portfolio</a>
                </li>
                <li className='sideNavbar' >
                  <a href='#Services'>Services</a>
                </li>
                <li className='sideNavbar' >
                  <a href='#Contact'>Contact</a>
                </li>
              </ul>

            </div>
            ) : null
          } 
        </div>
        {/* Home Content */}

        <div className='container'>
            <div className='home__content'>
              <div className='home__meta'>
                <h1 className='home__text pz__10'>
                  Welcome to my world
                </h1>
                <h2 className='home__text pz__10'>
                  I'm Michael Oladimeji
                </h2>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
