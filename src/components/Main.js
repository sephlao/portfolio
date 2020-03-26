import React from "react";
import { motion } from 'framer-motion';
import HeroBanner from "./HeroBanner";
import aca from "../img/portfolio/aca.png";
import ia from "../img/portfolio/ia.png";
import cargodeals from "../img/portfolio/cargodeals.png";
import dubips from "../img/portfolio/dubips.png";
import cannaadvisors from "../img/portfolio/cannaadvisors.png";
import drnancyrosen from "../img/portfolio/drnancyrosen.png";

const Overview = () => {
  return (
    <section data-aos="fade-up" className="overview" id="overview">
      <h3 className="header-text">A brief of what I do</h3>
      <p className="main-text">
        I’m a <span className="highlight-text">Web Developer</span> with 4 years
        of experience, IT professional with a Bachelor of Science degree in
        Information and Communications Technology. A front-end specialist
        dedicated to building and optimizing the performance of user-centric,
        high impact web applications. I Leverage my technical, analytical and
        problem-solving skills to create dynamic, high-speed web solutions.
      </p>
    </section>
  );
};

const Common = ({ name, header, subSection }) => {
  return (
    <section data-aos="fade-up" className={name} id={name}>
      <h3 className="header-text">{header}</h3>
      {subSection.map(({ subHeader, text, date }, i) => (
        <div key={i} style={{ marginBottom: "1.5em" }}>
          <h4 className="sub-text">{subHeader}</h4>
          <p className="main-text">{text}</p>
          {date ? <small className="date">{date}</small> : ""}
        </div>
      ))}
    </section>
  );
};

const Works = ({ name, imgSrc, link, text }) => {
  return (
    <motion.div
    whileHover={{ scale: 1.05 }}
    animate={{ duration: 0.3 }}
    data-aos="fade-in"
    className="works">
      <img src={imgSrc} alt="" />
      <div className="info-text">
        <p className="sub-text">{name}</p>
        <a
          className="external-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.144 5.14856L19.851 5.85606L12.356 13.3511L11.649 12.6441L19.144 5.14856Z"
              fill="var(--color-primary)"
            />
            <path d="M20 10H19V6H15V5H20V10Z" fill="var(--color-primary)" />
            <path
              d="M17.5 19H7.5C6.65 19 6 18.35 6 17.5V7.5C6 6.65 6.65 6 7.5 6H13V7H7.5C7.2 7 7 7.2 7 7.5V17.5C7 17.8 7.2 18 7.5 18H17.5C17.8 18 18 17.8 18 17.5V12H19V17.5C19 18.35 18.35 19 17.5 19Z"
              fill="var(--color-primary)"
            />
          </svg>
        </a>
        <p className="main-text">{text}</p>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const works = [
    {
      name: "Amazing Client Account (ACA)",
      imgSrc: aca,
      link: "https://aca.qima.com",
      text:
        "Angular.js, Gulp, NPM, Bower, Node.js, Socket.io, D3.js, Jasmine, Karma"
    },
    {
      name: "Inspector App (IA)",
      imgSrc: ia,
      link: "https://app.qima.com",
      text:
        "Angular 7, Webpack, NPM, RxJS, Lodash, Moment, Datatables, Jasmine, Karma"
    },
    {
      name: "CargoDeals CCNHub",
      imgSrc: cargodeals,
      link: "http://cargodeals.ccnhub.com/",
      text:
        "Angular 2, Ionic, Cordova, Datatables Webpack, Lodash, NPM, Boostrap, TestFlight"
    },
    {
      name: "Dubips",
      imgSrc: dubips,
      link: "https://www.dubips.com/",
      text: "Laravel, Blade, PHP, MySQL, Apache, Photoshop"
    },
    {
      name: "Canna Advisors",
      imgSrc: cannaadvisors,
      link: "https://thinkcanna.com",
      text: "WordPress, PHP, Custom theme, Apache, Photshop, FileZilla"
    },
    {
      name: "Dr. Nancy Rosen",
      imgSrc: drnancyrosen,
      link: "http://drnancyrosen.com/",
      text: "WordPress, PHP, Owl carousel, Apache, Photshop, FileZilla"
    }
  ];
  return (
    <section
      className="portfolio" id="portfolio">
      <h3 className="header-text">Projects I worked on</h3>
      {works.map((w, i) => (
        <Works {...w} key={i}/>
      ))}
    </section>
  );
};

export default () => {
  const experience = [
    {
      name: "skills",
      header: "Wondering what I know?",
      subSection: [
        {
          subHeader: "Tools and Technology",
          text:
            "HTML, CSS - Sass, JavaScript - TypeScript,  GIT, NPM, Bower, Yarn, Gulp, Webpack, Parcel, Firebase, D3.js, Datatables, MongoDB, MySQL, PHP, Ruby, Liquid, Apache"
        },
        {
          subHeader: "Libraries and Framework",
          text:
            "Angular, React, Vue, Express, Node.js, Gatsby, Shopify, Ionic, Lodash, Moment, jQuery, WordPress, Laravel, Bootstrap, Bulma, Material, Semantic UI"
        },
        {
          subHeader: "Wireframe and Design",
          text: "Figma, Xd, Illustrator, Photoshop, After Effects "
        }
      ]
    },
    {
      name: "experience",
      header: "Gained experience as",
      subSection: [
        {
          subHeader: "Web Developer",
          text: "QIMA (formerly AsiaInspection)",
          date: "02/2017 - 08/2019"
        },
        {
          subHeader: "Software Engineer",
          text: "Sense Software Solutions",
          date: "04/2016 - 02/2017"
        },
        {
          subHeader: "Web Developer (freelance)",
          text: "Upwork (ProjectArmy, 247 Labs Inc., Dubips)",
          date: "09/2015 - 04/2016"
        },
        {
          subHeader: "Web Developer (intern)",
          text: "ViCommerce",
          date: "04/2015 - 09/2015"
        }
      ]
    }
  ];

  const studies = [
    {
      name: "education",
      header: "What, where, when I studied",
      subSection: [
        {
          subHeader: "B.S. Information and Communications Technology",
          text: "University of San Carlos - Cebu, Philippines",
          date: "06/2012 - 04/2016"
        },
        {
          subHeader: "Web Design and Development",
          text:
            "Humber Institute of Technology and Advanced Learning - Toronto, Canada",
          date: "09/2019 - 04/2020"
        }
      ]
    },
    {
      name: "certificates",
      header: "Learning milestones",
      subSection: [
        {
          subHeader: "Certificate of Achievement ",
          text:
            "Web Design and Development Humber Institute of Technology and Advanced Learning"
        },
        {
          subHeader: "Top 5 Best Capstone Projects",
          text:
            "Department of Computer and Information Sciences - University of San Carlos"
        },
        {
          subHeader: "Certificate of Merit (2)",
          text:
            "Academic excellence from School of Arts and Sciences - University of San Carlos SY 2014 and 2016"
        }
      ]
    }
  ];

  return (
    <main>
      <HeroBanner />
      <Overview />
      {experience.map((val, i) => (
        <Common {...val} key={i} />
      ))}
      <Portfolio />
      {studies.map((val, i) => (
        <Common {...val} key={i} />
      ))}
    </main>
  );
};
