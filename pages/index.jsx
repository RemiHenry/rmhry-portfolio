import Head from "next/head";
import style from "../styles/Home.module.css";
import localFont from "next/font/local";
import remi from "../images/remi.png";
import bg from "../images/bg.png";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import React from "react";
import emailjs from "@emailjs/browser";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";
import picselliaScreenshot from "../images/picsellia-screenshot.png";
import nemaScreenshot from "../images/nema-screenshot.png";
import listnScreenshot from "../images/listn-screenshot.png";
import bleemeoScreenshot from "../images/bleemeo-screenshot.png";
import epitechScreenshot from "../images/epitech-screenshot.png";
import lallerSimpleScreenshot from "../images/laller-simple-screenshot.JPG";
import picselliaLogo from "../images/picsellia-logo.svg";
import nemaLogo from "../images/nema-logo.svg";
import listnLogo from "../images/listn-logo.png";
import bleemeoLogo from "../images/bleemeo-logo.png";
import epitechLogo from "../images/epitech-logo.svg";
import lallerSimpleLogo from "../images/laller-simple-logo.svg";
import portfolioLogo from "../images/portfolio-logo.png";
import portfolioScreenshot from "../images/portfolio-screenshot.png";
import csulbLogo from "../images/csulb-logo.svg";

const janger = localFont({
  src: "../fonts/Janger.ttf",
});

export default function Home() {
  const pdfFile = "/resume_Remi-Henry.pdf";

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.setAttribute("download", "resume_Remi-Henry.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const serviceKey = process.env.NEXT_PUBLIC_SERVICE_KEY || "";
  const templateKey = process.env.NEXT_PUBLIC_TEMPLATE_KEY || "";
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY || "";

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    resetErrorMessage();
  };

  const resetErrorMessage = () => {
    if (formData.name && formData.email && formData.message) {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Some required fields are empty");
      return;
    }

    try {
      await emailjs.send(serviceKey, templateKey, formData, publicKey);
      setSuccessMessage("Success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setErrorMessage("Error");
      console.error("EmailJS Error: ", error);
    }
  };

  const experiences = [
    {
      logo: picselliaLogo.src,
      title: "Software Engineer",
      company: "Picsellia",
      date: "Jun 2023 – Jun 2025",
      description:
        "At Picsellia, I contributed to the development and maintenance of a comprehensive AI lifecycle management platform. I played a key role in implementing an internal UI kit, modernizing the front-end, and streamlining design consistency across the application. I also suggested and integrated new technologies that improved our development workflows and deployment efficiency.",
      tech: ["VueJS", "TypeScript", "UI Kit", "Figma"],
      screenshot: picselliaScreenshot.src,
      screenshotUrl: "https://picsellia.com",
    },
    {
      logo: listnLogo.src,
      title: "Front-End Developer Intern",
      company: "Listn",
      date: "Apr 2022 – Jul 2022",
      description:
        " During my internship at Listn, I enhanced the web app's design and overall user experience by redesigning key UI elements. I also participated in the open beta deployment, helping deliver a stable and engaging product for early adopters. This experience sharpened my skills in user feedback integration and iterative development.",
      tech: ["React", "Figma"],
      screenshot: listnScreenshot.src,
      screenshotUrl: "https://pitch.listn.live",
    },
    {
      logo: bleemeoLogo.src,
      title: "Mobile Developer Intern",
      company: "Bleemeo",
      date: "Oct 2021 – Feb 2022",
      description:
        "At Bleemeo, I focused on finalizing and deploying the mobile app to the iOS store. I improved the user interface and optimized the mobile UX, aligning the application with Apple's guidelines and enhancing usability for system monitoring on the go.",
      tech: ["iOS", "UI/UX"],
      screenshot: bleemeoScreenshot.src,
      screenshotUrl: "https://bleemeo.com",
    },
    {
      logo: epitechLogo.src,
      title: "Hub Coordinator",
      company: "EPITECH",
      date: "Sep 2021 – Mar 2022",
      description:
        "As Hub Coordinator, I managed student projects and ensured the smooth running of educational activities. I supervised peer learning sessions, validated projects, and supported fellow students, building leadership and organizational skills that complement my technical background.",
      tech: ["Project Management", "Mentorship"],
      screenshot: epitechScreenshot.src,
      screenshotUrl: "https://www.epitech.eu",
    },
    {
      logo: bleemeoLogo.src,
      title: "Front-End Developer Intern",
      company: "Bleemeo",
      date: "Jul 2020 – Dec 2020",
      description:
        "In this earlier internship at Bleemeo, I contributed to improving the web app's interface and developed reusable React components to support new features. This role helped deepen my knowledge of scalable component architecture and sharpened my UI/UX sensibility.",
      tech: ["React", "UI/UX"],
      screenshot: bleemeoScreenshot.src,
      screenshotUrl: "https://www.bleemeo.com",
    },
  ];

  const projects = [
    {
      logo: portfolioLogo.src,
      title: "Software Engineer & Designer",
      company: "Remi Henry",
      date: "Jun 2025",
      description:
        "Designed and built my personal portfolio to showcase my projects, skills, and experiences. Developed with Next.js and CSS modules, the site is fully responsive and deployed on Vercel. It features a modern layout with a focus on clarity and performance to provide an engaging user experience.",
      tech: ["Next.js", "CSS Modules", "Vercel"],
      screenshot: portfolioScreenshot.src,
      screenshotUrl: "https://remihenry.com",
    },
    {
      logo: nemaLogo.src,
      title: "End-of-Studies Project",
      company: "Nema Studio",
      date: "Sep 2021 – Aug 2024",
      description:
        "Nema Studio was a 3-year end-of-studies project developed by a team of six. Our goal was to build a collaborative, browser-based Digital Audio Workstation—a “Figma for audio.” I led UI/UX design in Figma and developed the front end in Svelte, integrating a Rust-based audio engine via WebAssembly. This project challenged us to innovate across real-time collaboration, web performance, and creative UX.",
      tech: ["Svelte", "Figma", "Rust", "WebAssembly"],
      screenshot: nemaScreenshot.src,
      screenshotUrl: "https://nemastudio.app",
    },
    {
      logo: lallerSimpleLogo.src,
      title: "Freelance Web Developer",
      company: "L'aller Simple",
      date: "2023",
      description:
        "I designed, developed, and deployed a website for L'aller Simple, a rural holiday cottage. Starting with mockups in Figma, I built a responsive front-end featuring an online booking system. The site also serves as a landing page to highlight the cottage’s charm. This project showcases my ability to deliver an end-to-end web solution that balances usability and design.",
      tech: ["Next JS", "Figma"],
      screenshot: lallerSimpleScreenshot.src,
    },
  ];

  return (
    <div>
      <Head>
        <title>Remi Henry</title>
        <meta
          name="description"
          content="This portfolio list all my realization, my resume, but also a form to contact me."
        />
        <link
          href="https://fonts.cdnfonts.com/css/janger"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/rh.ico" />
      </Head>

      <div
        id=""
        className={style.home}
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className={`${janger.className}`}>Remi Henry</h1>
      </div>

      <div id="about" className={style.about}>
        <h1 className={`${janger.className} ${style["about-title"]}`}>
          About Me
        </h1>
        <div className={style.aboutWrapper}>
          <div className={style.profileCard}>
            <Image
              className={style.avatar}
              src={remi.src}
              width={200}
              height={200}
              style={{ borderRadius: "50%" }}
              alt="Rémi Henry"
            />
            <h2>Rémi Henry</h2>
            <p>Software Engineer & UI/UX Designer</p>
            <a href="mailto:remi.st@outlook.fr" className={style.mail}>
              <Icon icon="mdi:email" width="20" height="20" color="white" />
              remi.st@outlook.fr
            </a>
            <p className={style.phone}>
              <Icon icon="mdi:phone" width="20" height="20" color="white" />
              (+33) 06.82.63.88.39
            </p>
            <div className={style.socialIcons}>
              <Link
                href="https://github.com/RemiHenry"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="mdi:github" width="24" height="24" color="white" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/remi-henry/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="mdi:linkedin"
                  width="24"
                  height="24"
                  color="white"
                />
              </Link>
            </div>
            <button onClick={downloadPdf} className={style.resumeButton}>
              Download Resume
              <Icon
                icon="octicon:download-16"
                width={16}
                height={16}
                style={{ marginLeft: "8px" }}
              />
            </button>
          </div>

          <div className={style.content}>
            <p className={style.description}>
              👋 Hi, I&apos;m Rémi Henry — a passionate Software Engineer and
              UI/UX Designer with a Master&apos;s in Information Technology from
              EPITECH and international experience from California State
              University, Long Beach.
              <br />
              <br />
              With a strong foundation in front-end development and a keen eye
              for design, I specialize in building modern, user-focused web
              applications. Over the past few years, I&apos;ve worked with
              companies like Picsellia, Nema Studio, and Bleemeo, where I
              contributed to projects involving cutting-edge technologies like
              React, VueJS, Svelte, and WebAssembly.
              <br />
              <br />
              Currently open to new opportunities, particularly in roles that
              combine tech, product thinking, and design — including VIE
              positions abroad. Let&apos;s build something meaningful together.
            </p>

            <div className={style.gpaGrid}>
              <div className={style.gpaCard}>
                <img
                  src={epitechLogo.src}
                  alt="epitech logo"
                  className={style.logo}
                />
                <div className={style.gpaCardHeader}>
                  <h3>EPITECH</h3>
                  <p>Master in IT</p>
                </div>
                <div className={style.gpa}>
                  <h2>3.3</h2>
                  <p>GPA</p>
                </div>
              </div>
              <div className={style.gpaCard}>
                <img
                  src={csulbLogo.src}
                  alt="CSULB logo"
                  className={style.logo}
                />
                <div className={style.gpaCardHeader}>
                  <h3>CSU Long Beach</h3>
                  <p>Exchange</p>
                </div>
                <div className={style.gpa}>
                  <h2>4.0</h2>
                  <p>GPA</p>
                </div>
              </div>
            </div>
            <div className={style.achievementsGrid}>
              <div className={style.achievementCard}>
                🏆
                <div className={style.achievementCardHeader}>
                  <h3>Epitech Toulouse</h3>
                  <p>Best Innovative Project</p>
                </div>
                <div className={style.achievement}>
                  <h2>1</h2>
                  <p>st</p>
                </div>
              </div>
              <div className={style.achievementCard}>
                🏆
                <div className={style.achievementCardHeader}>
                  <h3>Epitech France</h3>
                  <p>Best Innovative Project (17 campuses)</p>
                </div>
                <div className={style.achievement}>
                  <h2>1</h2>
                  <p>st</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="experiences" className={style.experiences}>
        <h1 className={`${janger.className} ${style["experiences-title"]}`}>
          Experiences
        </h1>
        <div className={style.content}>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} {...exp} />
          ))}
        </div>
      </div>

      <div id="projects" className={style.projects}>
        <h1 className={`${janger.className} ${style["projects-title"]}`}>
          Projects
        </h1>
        <div className={style.content}>
          {projects.map((exp, i) => (
            <ExperienceCard key={i} {...exp} />
          ))}
        </div>
      </div>

      <div id="contact" className={style["contact-form-container"]}>
        <div className={style["contact-header"]}>
          <h1 className={style["contact-title"]}>LET&apos;S MAKE</h1>
          <h1 className={style["contact-title"]}>IT HAPPEN</h1>
        </div>
        <form className={style["contact-form"]} onSubmit={handleSubmit}>
          <h2>Say Hello</h2>

          <section>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Drop a name"
            />
          </section>

          <section>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Add your email"
            />
          </section>

          <section>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Say hello or drop a note..."
            ></textarea>
          </section>

          <button type="submit">Send Message</button>

          {errorMessage && (
            <p className={style["error-message"]}>{errorMessage}</p>
          )}
          {successMessage && (
            <p className={style["success-message"]}>{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}
