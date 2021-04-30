import './App.css';
import { HeaderStyled } from './styles/HeaderStyled';
import { AboutStyled } from './styles/AboutStyled';
import { ProjectsStyled } from './styles/ProjectsStyled';

function App() {
  return (
    <div className="App">
      <div className="burger">
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>
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
      <AboutStyled>
        <h2>About Me</h2>
        <div className="row">
          <div className="about-text">
            <span>BACKGROUND</span>
            <p>
              Hello, my name is Benaiah Varner, I am a full stack web developer.
              I am a 2020 highschool graduate, and instead of taking the
              conventional route of going to college and getting a degree
              straight after highschool, I decided to enroll in a 7 month,
              full-time coding bootcamp called Lambda School. I started this
              program in August, 2020, and graduated in April, 2021. I am now
              seeking full-time and freelance opportunities!
            </p>
            <span>TECHNICAL SKILLS</span>
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
      <ProjectsStyled>
        <h2>Projects</h2>
        <div className="portfolio">
          <span>FEATURED PROJECTS</span>
        </div>
      </ProjectsStyled>
    </div>
  );
}

export default App;
