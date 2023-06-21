import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './App.css';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

const App: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome, I'm Oli Goodall</h1>
        <h2>Junior Software Developer</h2>
      </header>
      <section className="section">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h3>Employment History</h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  <strong>The Accountancy Franchise | Junior Web Developer</strong>
                  <br />
                  Franchising Start-Up | April 2022 – Present
                  <br />
                  Responsible for maintaining and updating professional websites using platforms like Wix and Wordpress.
                  Utilize creative tools such as Canva to create compelling assets and graphics that enhance the visual impact of the websites.
                  Manage the end-to-end process of domain acquisition and administration, ensuring a seamless online presence for the company's clients.
                  Streamline and automate routine tasks by implementing automations between our websites and CRM software.
                </li>
                <li>
                  <strong>TechSwitch | Trainee Full Stack Developer</strong>
                  <br />
                  Coding Bootcamp | August 2022 – October 2022
                  <br />
                  Completed an intensive 12-week coding bootcamp, gaining a solid foundation in web development.
                  Acquired expertise in TypeScript, SCSS, React, C#, and PostgreSQL.
                  Collaborated through pair programming on various projects, fostering teamwork and communication skills.
                  Successfully delivered two group projects within an Agile framework.
                  Demonstrated proficiency in development procedures, including code review, conflict resolution, and testing.
                </li>
                <li>
                  <strong>Opus 2 International | Speech-to-Text Editor</strong>
                  <br />
                  Legal Technology | February 2020 – July 2022
                  <br />
                  Joined a pioneering team in the Legal Transcription field at a reputable legal technology company with 200 employees.
                  Received comprehensive training as a manual transcriber, achieving Ministry of Justice standards with 97% accuracy.
                  Adapted formatting and style based on assignment-specific requirements.
                  Regularly communicated with judges and clerks regarding judgments and timetabling.
                  Actively attended court cases to create a log aiding in transcription accuracy.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </section>

      <section className="section">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h3>Education</h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  <strong>2018 – 2019</strong>
                  <br />
                  Master of Research in Speech, Language and Cognition (Distinction)
                  <br />
                  University College London
                </li>
                <li>
                  <strong>2014 – 2018</strong>
                  <br />
                  Bachelor of Arts with Honours in Linguistics (Upper Second Class)
                  <br />
                  University College London
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </section>

      <section className="section">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h3>Technical Skills</h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>C#</li>
                <li>SQLite</li>
                <li>PostgreSQL</li>
                <li>Postman</li>
                <li>Git/Github</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </section>

      <section className="section">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h3>Other</h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>Proficient touch typing speed of 70wpm (minimum)</li>
                <li>Proven ability to excel in both independent and collaborative work environments</li>
                <li>Meticulous and detail-oriented approach</li>
                <li>Strong inclination to identify and streamline workflow inefficiencies</li>
                <li>
                  Accomplished Barbershop Singer, affiliated with Meantime Chorus (2022 UK Male Barbershop Chorus champions) and Hot Ticket Quartet (2023 Holland Harmony champions)
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </section>

      <footer className="footer">
        <div className="contact-info">
          <a href="https://www.linkedin.com/in/oligoodall/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <h4>
            <a href="https://www.linkedin.com/in/oligoodall/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </h4>
        </div>
        <div className="contact-info">
          <a href="https://github.com/Oli-Goodall" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <p>
            <a href="https://github.com/Oli-Goodall" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
