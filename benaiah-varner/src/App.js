/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from 'react';
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
  const [projectsVisible, setProjectsVisible] = useState(false)
  const [otherProjVisible, setOtherProjVisible] = useState(false)
  const [aboutVisible, setAboutVisible] = useState(false)
  const aboutRef = useRef()
  const projectsRef = useRef();
  const otherProjectsRef = useRef();
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting)
          setProjectsVisible(true)
      }
      );
    });

    const otherProjObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting)
          setOtherProjVisible(true)
      }
      );
    });

    const aboutObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting)
          setAboutVisible(true)
      }
      );
    });

    observer.observe(projectsRef.current);
    otherProjObserver.observe(otherProjectsRef.current);
    aboutObserver.observe(aboutRef.current)

    return () => {
      observer.unobserve(projectsRef.current)
      otherProjObserver.unobserve(otherProjectsRef.current)
      aboutObserver.unobserve(aboutRef.current)
    };
  }, []);

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
            Tampa based web developer specializing in creating digital
            experiences.
          </p>
          <a href="#contact">
            <button className="btn get-in-touch"> Get In Touch</button>
          </a>
        </div>
      </HeaderStyled>
      <ProjectsStyled className={`projects ${projectsVisible ? 'is-visible' : ''}`} id="projects" ref={projectsRef}>
        <h2>Projects</h2>
        <div className="featured-projects">
          <div className="featured-projects__card">
            <div className="thumbnail">
              <img src={isMobile ? "/images/corsair mobile.png" : '/images/corsair.png'} alt="" style={{ borderRadius: '5px' }} />
            </div>
            <div className="description">
              <h3>Featured Project</h3>
              <h3 className="title">Corsair</h3>
              <div className="description__text">
                <p>
                  - Worked on a SCRUM team of around 15 engineers and SSTs over a 10 month period to build Corsair’s PWA<br></br>
                  - Integrated Shopify on the backend to handle customer account creation and orders<br></br>
                  - Used NextJS, Tailwind CSS, SASS, and GraphQL to build frontend components<br></br>
                </p>
              </div>
              <div className="list-icons">
                <ul>
                  <li>NextJS</li>
                  <li>GraphQL</li>
                  <li>Contentful</li>
                  <li>Shopify</li>
                  <li>Tailwind CSS</li>
                </ul>
                <div className="featured-icons">
                  <a
                    href="https://www.corsair.com/us/en"
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
              <img src={isMobile ? '/images/whoop-mobile.png' : "/images/whoop-thumbnail.png"} alt="" style={{ borderRadius: '5px' }} />
            </div>
            <div className="description">
              <h3>Featured Project</h3>
              <h3 className="title">Whoop</h3>
              <div className="description__text">
                <p>
                  - Built navbar/megamenu on all whoop.com pages <br></br>
                  - Built a build caching system to speed up Vercel build times, lowering built times from 40 mins to 25 mins <br></br>
                  - Used VWO and Dynamic Yield to create A/B CRO tests <br></br>
                </p>
              </div>
              <div className="list-icons">
                <ul>
                  <li>Next.js</li>
                  <li>GraphQL</li>
                  <li>Contentful</li>
                </ul>
                <div className="featured-icons">
                  <a
                    href="https://www.whoop.com/us/en/"
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
          <div className="featured-projects__card">
            <div className="thumbnail">
              <img src={isMobile ? '/images/triprecs-mobile.png' : "/images/triprecs.png"} alt="" style={{ borderRadius: '5px' }} />
            </div>
            <div className="description">
              <h3>Featured Project</h3>
              <h3 className="title">Triprecs</h3>
              <div className="description__text">
                <p>
                  - Serverless AI travel agent, made to suggest travel destinations, build itinerary, and offer booking options <br></br>
                  - Help design UI/UX and repository architecture<br></br>
                  - Used NextJS 13 and Material UI on the frontend, OpenAI API and Supabase on the backend to generate suggestions and store user data.<br></br>
                </p>
              </div>
              <div className="list-icons">
                <ul>
                  <li>Next.js</li>
                  <li>OpenAI</li>
                  <li>Supabase SQL</li>
                  <li>Material UI</li>
                </ul>
                <div className="featured-icons">
                  <a
                    href="https://www.triprecs.io"
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
              <img src="/images/gnc.png" alt="" style={{ borderRadius: '5px' }} />
            </div>
            <div className="description">
              <h3>Featured Project</h3>
              <h3 className="title">GNC</h3>
              <div className="description__text">
                <p>
                  - Worked on the GNC PWA scrum team of 20 engineers and SSTs <br></br>
                  - Used NextJS, GraphQL, and contentful to create CMS pages and content <br></br>
                  - Integrated APIM and Fabric on the backend to handle products, customers, and orders. <br></br>
                  - Integrated Algolia on the frontend to handle product search, PLP and PDP pages
                </p>
              </div>
              <div className="list-icons">
                <ul>
                  <li>Next.js</li>
                  <li>GraphQL</li>
                  <li>Node.js</li>
                  <li>APIM</li>
                </ul>
                <div className="featured-icons">
                  <a
                    href="https://www.gnc.com/"
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
          <div className="other-project" ref={otherProjectsRef}>
            <h2 className={`other-title ${otherProjVisible ? 'is-visible' : ''}`}>Other awesome projects</h2>
            <div className="grid">
              <div className={`other-project__card ${otherProjVisible ? 'is-visible-1' : ''}`}>
                <h3 className="other-project__card__header">ORATS</h3>
                <ul>
                  <li>Worked as lead front end developer building their Next.js/Tailwind CSS website</li>
                  <li>debugged issues with their options scanner to ensure more accurate scan results</li>
                  <li>Optimized sites performance using lighthouse audit </li>
                  <li>Utilized: Next.js | Node.js | Tailwind CSS</li>
                </ul>
                <div className="other-icons">
                  <a
                    href="https://orats.com/"
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
              <div className={`other-project__card ${otherProjVisible ? 'is-visible-2' : ''}`}>
                <h3 className="other-project__card__header">LeagueDay</h3>
                <ul>
                  <li>A small Esports startup focused on audio live streaming and podcasts</li>
                  <li>Designed and built front end using react, redux, material UI, and react context API</li>
                  <li>Used Mux Livestream library to build a user-generated live streaming feature</li>
                  <li>Built backend server and API with MongoDB, node.js, and Socket.io for sending and receiving chats, friend requests, and posting comments</li>
                </ul>
                <div className="other-icons">
                  <a
                    href="https://github.com/leagueday/pwa"
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
              <div className={`other-project__card ${otherProjVisible ? 'is-visible-3' : ''}`}>
                <h3 className="other-project__card__header">Magid Glove</h3>
                <ul>
                  <li>Helped create CRO test ideas and set up a/b tests in VWO</li>
                  <li>Built tests using HTML, CSS, and JavaScript to collect data and determine results</li>
                  <li>Implemented successful tests as permanent features on the frontend.</li>
                  <li>Utilized: HTML | CSS | JavaScript (vanilla) | Next.JS</li>
                </ul>
                <div className="other-icons">
                  <a
                    href="https://www.magidglove.com/"
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
        </OtherProjectStyled>
      </div>
      <AboutStyled id="about" ref={aboutRef}>
        <h2 style={{ transition: 'all 1s ease-in-out', opacity: aboutVisible ? 1 : 0, transform: aboutVisible ? 'translateY(0)' : 'translateY(5rem)' }}>About Me</h2>
        <div className="about-text">
          <div className={`background ${otherProjVisible ? 'is-visible' : ''}`}>
            <span>Background</span>
            <p>
              Hello, my name is Benaiah Varner, I am a full stack web
              developer from Tampa. Though constantly changing, my
              primary focuses are Next.js, Node.js, TypeScript, and AI.
              I am enthuastic about applications in FinTech, algorithmic
              trading and AI. I am now seeking full-time and
              freelance opportunities!
            </p>
          </div>
          <div className={`technical-skills ${otherProjVisible ? 'is-visible' : ''}`}>
            <span>Technical Skills</span>
            <ul>
              <div>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Open AI</li>
                <li>HTML</li>
                <li>JavaScript</li>
              </div>
              <div>
                <li>CSS</li>
                <li>Tailwind</li>
                <li>Express</li>
                <li>GraphQl</li>
                <li>MongoDB</li>
                <li>React Native</li>
              </div>
            </ul>
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
              className="social-icon"
            >
              <FontAwesomeIcon className="footer-icon" icon={faTwitter} />
            </a>
            <a
              href="https://github.com/Benaiah-Varner"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon className="footer-icon" icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/benaiahvarner/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
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
