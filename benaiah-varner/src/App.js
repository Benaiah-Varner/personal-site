import React, { useState } from 'react';
import './App.css';
import { HeaderStyled } from './styles/HeaderStyled';
import { AboutStyled } from './styles/AboutStyled';
import { FooterStyled } from './styles/FooterStyled';
import { NavStyled } from './styles/NavStyled';
import { ContactStyled } from './styles/ContactStyled';
import { ProjectsStyled, OtherProjectStyled } from './styles/ProjectsStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <div className="App">
      <div className="header-container"></div>
      <NavStyled scrolled={navbar}>
        <div className="nav">
          <div className="logo">
            <a href="#">BV</a>
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>Contact</li>
              <li className="resume">
                <a
                  href="https://drive.google.com/file/d/18oZ8MgZ2IoAeh1JnZo2w1gpJ0mDPZ4aG/view"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </NavStyled>
      <HeaderStyled>
        <div className="header">
          <p>Hi! My name is</p>
          <h1>Benaiah Varner</h1>
          <h2>I am a Software Engineer</h2>
          <p>
            Connecticut based web developer specializing in creating digital
            experiences.
          </p>
          <button className="btn get-in-touch">Get In Touch</button>
        </div>
      </HeaderStyled>
      <ProjectsStyled className="projects" id="projects">
        <h2>Projects</h2>
        <div className="featured-projects">
          <div className="featured-projects__card">
            <div className="thumbnail">
              <img src="/images/ghost-grits.png" alt="" />
            </div>
            <div className="description">
              <h3>Featured Project</h3>
              <h3 className="title">Ghost & Grits</h3>
              <div className="description__text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                  temporibus! Doloremque expedita neque dolor nam optio sit,
                  sint vel dignissimos velit veniam illum ducimus non architecto
                  ex praesentium veritatis dolore earum aliquid asperiores
                  distinctio tempora repellendus. Quia aspernatur tenetur quae,
                  error omnis hic voluptas nihil incidunt a aliquam iste
                  corrupti!
                </p>
              </div>
              <div className="list-icons">
                <ul>
                  <li>Next.js</li>
                  <li>GraphQl</li>
                  <li>MongoDB</li>
                  <li>Keystone.js</li>
                </ul>
                <a
                  href="https://github.com/Benaiah-Varner/ghost-grits-front-end"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="3x"
                    className="github icon"
                  />
                </a>
                <a
                  href="https://ghost-grits-front-end.vercel.app/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="icon"
                    icon={faExternalLinkAlt}
                    size="3x"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="featured-projects__card featured-projects__card--2">
            <div className="thumbnail">
              <img src="/images/checkin2.png" alt="" />
            </div>
            <div className="description">
              <h3>Featured Project</h3>
              <h3 className="title">Family Promise</h3>
              <div className="description__text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                  temporibus! Doloremque expedita neque dolor nam optio sit,
                  sint vel dignissimos velit veniam illum ducimus non architecto
                  ex praesentium veritatis dolore earum aliquid asperiores
                  distinctio tempora repellendus. Quia aspernatur tenetur quae,
                  error omnis hic voluptas nihil incidunt a aliquam iste
                  corrupti!
                </p>
              </div>
              <div className="list-icons">
                <ul>
                  <li>React.js</li>
                  <li>Redux</li>
                  <li>Node.js</li>
                  <li>Express</li>
                </ul>
                <a
                  href="https://www.familypromiseofspokane.org/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="3x"
                    className="github icon"
                  />
                </a>
                <a
                  href="https://github.com/Benaiah-Varner/family-promise-spokane-fe-a"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="icon"
                    icon={faExternalLinkAlt}
                    size="3x"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </ProjectsStyled>
      <div className="other-project-wrapper">
        <div className="other-project-background"></div>
        <OtherProjectStyled>
          <div className="other-project">
            <h2 className="other-title">Other awesome projects</h2>
            <div className="grid">
              <div className="other-project__card">
                <h3>Co-Make</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus, beatae architecto provident ipsam ducimus officia
                  ea minus similique explicabo aut odit numquam voluptas? Illo
                  beatae excepturi, quisquam quidem sequi nemo?
                </p>
                <div className="icon-box">
                  <a href="https://github.com/Benaiah-Varner/Co-make-frontend" target="_blank">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="3x"
                      className="github icon"
                    />
                  </a>
                  <a href="https://github.com/Benaiah-Varner/Co-Make-backend" target="_blank">
                    <FontAwesomeIcon
                      className="icon"
                      icon={faGithub}
                      size="3x"
                    />
                  </a>
                </div>
              </div>
              <div className="other-project__card">
                <h3>Algo trader</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus, beatae architecto provident ipsam ducimus officia
                  ea minus similique explicabo aut odit numquam voluptas? Illo
                  beatae excepturi, quisquam quidem sequi nemo?
                </p>
                <div className="icon-box">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="3x"
                    className="github icon"
                  />
                </div>
              </div>
              <div className="other-project__card">
                <h3>VR</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus, beatae architecto provident ipsam ducimus officia
                  ea minus similique explicabo aut odit numquam voluptas? Illo
                  beatae excepturi, quisquam quidem sequi nemo?
                </p>
                <div className="icon-box">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="3x"
                    className="github icon"
                  />
                  <FontAwesomeIcon
                    className="icon"
                    icon={faExternalLinkAlt}
                    size="3x"
                  />
                </div>
              </div>
            </div>
          </div>
        </OtherProjectStyled>
      </div>
      <AboutStyled id="about">
        <h2>About Me</h2>
        <div className="row">
          <div className="about-text">
            <div className="background">
              <span>Background</span>
              <p>
                Hello, my name is Benaiah Varner, I am a full stack web
                developer. I am a 2020 highschool graduate, and instead of
                taking the conventional route of going to college and getting a
                degree straight after highschool, I decided to enroll in a 7
                month, full-time coding bootcamp called Lambda School. I started
                this program in August, 2020, and graduated in April, 2021. I am
                now seeking full-time and freelance opportunities!
              </p>
            </div>
            <div className="technical-skills">
              <span>Technical Skills</span>
              <ul>
                <div>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>HTML</li>
                </div>
                <div>
                  <li>CSS</li>
                  <li>Sass</li>
                  <li>JavaScript</li>
                  <li>GraphQl</li>
                  <li>MongoDB</li>
                </div>
              </ul>
            </div>
          </div>
          <div className="about-images">
            <img
              src="/images/aboutmepic2.jpeg"
              alt=""
              className="about-images__img about-images__img--1"
            />
            <img
              src="/images/aboutmepic1.jpeg"
              alt=""
              className="about-images__img about-images__img--2"
            />
            <img
              src="/images/newProfile.png"
              alt=""
              className="about-images__img about-images__img--3"
            />
          </div>
        </div>
      </AboutStyled>

      <ContactStyled>
        <h2>Contact</h2>
        <div className="form-container">
          <h3>Let's get in touch.</h3>
          <form action="">
            <div className="contact-info">
              <label htmlFor="">
                First Name
                <input type="text" name="firstName" placeholder="First Name" />
              </label>
              <label htmlFor="">
                Last Name
                <input type="text" name="lastName" placeholder="Last Name" />
              </label>
            </div>
            <div className="contact-info">
              <label htmlFor="">
                Email
                <input type="text" name="email" placeholder="Email Address" />
              </label>
              <label htmlFor="">
                Phone Number
                <input
                  type="text"
                  name="phone-number"
                  placeholder="Phone Number"
                />
              </label>
            </div>
            <div className="message">
              <label htmlFor="">
                <p>Message</p>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>
              </label>
            </div>
            <button className="get-in-touch">Send Message</button>
          </form>
        </div>
      </ContactStyled>
      <div className="footer-container">
        <FooterStyled>
          <div className="social-icons">
            <FontAwesomeIcon className="footer-icon" icon={faTwitter} />
            <FontAwesomeIcon className="footer-icon" icon={faGithub} />
            <FontAwesomeIcon className="footer-icon" icon={faLinkedinIn} />
          </div>
        </FooterStyled>
      </div>
    </div>
  );
}

export default App;
