import React, { useState, useEffect } from 'react';
import { NavStyled } from '../styles/NavStyled';

const NavBar = () => {
  const [hamburger, setHamburger] = useState(false);
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  const handleBurger = () => {
    setOpen(!open)
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 600) {
        setHamburger(true);
      } else {
        setHamburger(false);
      }
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <NavStyled scrolled={navbar} open={open}>
      <div className="nav">
        <div className="logo">
          <a href="#header">BV</a>
        </div>
        {hamburger ? (
          <>
            <div className="background"></div>
            <div className="burger-wrapper" onClick={handleBurger}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="burger-links">
              <ul>
                <li onClick={handleBurger}>
                  <a href="#projects">Projects</a>
                </li>
                <li onClick={handleBurger}>
                  <a href="#about">About</a>
                </li>
                <li onClick={handleBurger}>
                  <a href="#contact">Contact</a>
                </li>
                <a
                  href="https://docs.google.com/document/d/1lNy4dFaiMil8A-0U_FuCrgsF9UGj0T8z1mC0xmpWUMg/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="resume"
                  onClick={handleBurger}
                >
                  <li className="res-li">Resume</li>
                </a>
              </ul>
            </div>
          </>
        ) : (
          <div className="links">
            <ul>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <a
                href="https://docs.google.com/document/d/1lNy4dFaiMil8A-0U_FuCrgsF9UGj0T8z1mC0xmpWUMg/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="resume"
              >
                <li className="res-li">Resume</li>
              </a>
            </ul>
          </div>
        )}
      </div>
    </NavStyled>
  );
};

export default NavBar;
