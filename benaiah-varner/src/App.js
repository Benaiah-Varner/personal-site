import React from 'react';
import './App.css';
import { HeaderStyled } from './styles/HeaderStyled';
import { AboutStyled } from './styles/AboutStyled';
import { FooterStyled } from './styles/FooterStyled';
import { ContactStyled } from './styles/ContactStyled';
import { ProjectsStyled, OtherProjectStyled } from './styles/ProjectsStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from './components/ContactForm';
import Header from './components/NavBar';
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="header-container"></div>
      <Header />
      <HeaderStyled id="header">
        <div className="header">
          <p>Hi! My name is</p>
          <h1>Benaiah Varner</h1>
          <h2>I am a Software Engineer</h2>
          <p>
            Connecticut based web developer specializing in creating digital
            experiences.
          </p>
          <a href="#contact">
            <button className="btn get-in-touch"> Get In Touch</button>
          </a>
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
                  Freelance project for a local small business called Ghost &
                  Grits. Small, static generated full stack website using
                  Next.js, GraphQl, and Apollo Client. Styled with react styled
                  components, and back end server built with KeystoneJS.
                </p>
              </div>
              <div className="list-icons">
                <ul>
                  <li>Next.js</li>
                  <li>GraphQl</li>
                  <li>MongoDB</li>
                  <li>Keystone.js</li>
                </ul>
                <div className="featured-icons">
                  <a
                    href="https://github.com/Benaiah-Varner/ghost-grits-front-end"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="3x"
                      className="github icon"
                    />
                    Front End
                  </a>
                  <a
                    href="https://github.com/Benaiah-Varner/ghost-grits-server"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="3x"
                      className="github icon"
                    />
                    Back End
                  </a>
                  <a
                    href="https://ghost-grits-front-end.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
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
          <div className="featured-projects__card featured-projects__card--2">
            <div className="thumbnail">
              <img src="/images/checkin2.png" alt="" />
            </div>
            <div className="description">
              <h3>Featured Project</h3>
              <h3 className="title">Family Promise</h3>
              <div className="description__text">
                <p>
                  My team and I were tasked with reducing the time a family
                  spends filling out the intake forms and adding some user
                  functionality, as well as email notifications. We achieved
                  this by integrating DocuSign into the intake form process,
                  adding edit profile functionality, utilizing SendGrid's API
                  for email notifications, and optimizing UX by redesigning the
                  guest user flow.
                </p>
              </div>
              <div className="list-icons">
                <ul>
                  <li>React.js</li>
                  <li>Redux</li>
                  <li>Node.js</li>
                  <li>Express</li>
                </ul>
                <div className="featured-icons">
                  <a
                    href="https://github.com/Benaiah-Varner/family-promise-spokane-fe-a"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="icon"
                      icon={faGithub}
                      size="3x"
                    />
                    Front End
                  </a>
                  <a
                    href="https://github.com/Benaiah-Varner/family-promise-spokane-be-a"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="icon"
                      icon={faGithub}
                      size="3x"
                    />
                    Back End
                  </a>
                  <a
                    href="https://www.familypromiseofspokane.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      size="3x"
                      className="github icon"
                    />
                  </a>
                </div>
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
                  Built during a Lambda School "Build Week" with a team
                  consisting of me and 4 other web developers. I built a RESTful
                  API node.js server, designed and built the database, and wrote
                  tests for each endpoint with a teammate. Also designed and
                  built homepage, navbar, and footer.
                </p>
                <div className="icon-box">
                  <a
                    href="https://github.com/Benaiah-Varner/Co-make-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="3x"
                      className="github icon"
                    />
                    Front End
                  </a>
                  <a
                    href="https://github.com/Benaiah-Varner/Co-Make-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="icon"
                      icon={faGithub}
                      size="3x"
                    />
                    Back End
                  </a>
                </div>
              </div>
              <div className="other-project__card">
                <h3>Automated trader</h3>
                <p>
                  - Side project started by me and a friend
                  <br />
                  - Built with Python, numpy, pandas, and sklearn
                  <br />- Uses technical indicators such as SMA, EMA, MACD, and
                  RSI to generate buy and sell flags on stock charts.
                </p>
                <div className="icon-box">
                  <a
                    href="https://github.com/Benaiah-Varner/B-T-algotrader"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="3x"
                      className="github icon"
                    />
                  </a>
                </div>
              </div>
              <div className="other-project__card">
                <h3>NoCodeMonkey.io Component</h3>
                <p>
                  - Freelance project for NoCodeMonkey.io
                  <br />
                  - A user uploads a video URI to Adalo and the video is
                  dynamically rendered as the background of their phone screen
                  <br />
                  - Built with React Native and itilizes Adalo API to fetch
                  video URI
                  <br />
                </p>
                <div className="icon-box">
                  <a
                    href="https://github.com/Benaiah-Varner/Adalo-Video-Background-Component"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="3x"
                      className="github icon"
                    />
                  </a>
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
                developer from Connecticut. Though constantly changing, my
                primary focuses are Next.js, React Native, GraphQl, and Python.
                I am enthuastic about applications in FinTech, algorithmic
                trading and cryptocurrency. I am now seeking full-time and
                freelance opportunities!
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
                  <li>JavaScript</li>
                </div>
                <div>
                  <li>CSS</li>
                  <li>Sass</li>
                  <li>Express</li>
                  <li>GraphQl</li>
                  <li>MongoDB</li>
                  <li>React Native</li>
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
      <ContactStyled id="contact">
        <ContactForm />
      </ContactStyled>
      <div className="footer-container">
        <FooterStyled>
          <div className="social-icons">
            <a
              href="https://twitter.com/BenaiahVarner"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="footer-icon" icon={faTwitter} />
            </a>
            <a
              href="https://github.com/Benaiah-Varner"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="footer-icon" icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/benaiahvarner/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="footer-icon" icon={faLinkedinIn} />
            </a>
          </div>
        </FooterStyled>
      </div>
    </div>
  );
}

export default App;
