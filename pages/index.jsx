import Head from "next/head";
import style from "../styles/Home.module.css";
import localFont from "next/font/local";
import remi from "../images/remi.png";
import bg from "../images/bg.png";
import Image from "next/image";
import React from "react";
import emailjs from "@emailjs/browser";

const janger = localFont({
  src: "../fonts/Janger.ttf",
});

export default function Home() {
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
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      </Head>

      <div
        id=""
        className={style.home}
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
        }}
      >
        <h1 className={`${style.title} ${janger.className}`}>Remi Henry</h1>
      </div>

      <div id="about" className={style.about}>
        <div className={style.content}>
          <div>
            <Image
              className={style.avatar}
              src={remi.src}
              width={200}
              height={200}
              style={{ borderRadius: "50%" }}
              alt="Rémi Henry"
            />
            <h2 className={style.subtitle}>Rémi Henry</h2>
            <h3 className={style.subtitle}>
              Software Engineer & UI/UX Designer
            </h3>
          </div>
          <p className={style.description}>
            👋 Hi, I&apos;m Rémi Henry — a passionate Software Engineer and
            UI/UX Designer with a Master&apos;s in Information Technology from
            EPITECH and international experience from California State
            University, Long Beach.
            <br />
            <br />
            With a strong foundation in front-end development and a keen eye for
            design, I specialize in building modern, user-focused web
            applications. Over the past few years, I&apos;ve worked with
            companies like Picsellia, Nema Studio, and Bleemeo, where I
            contributed to projects involving cutting-edge technologies like
            React, VueJS, Svelte, and WebAssembly.
            <br />
            <br />
            Beyond code, I care deeply about the user experience, efficient
            product workflows, and bridging the gap between technical execution
            and intuitive design. I&apos;m equally comfortable writing clean
            JavaScript as I am designing in Figma, and I thrive in
            collaborative, agile environments.
            <br />
            <br />
            Currently open to new opportunities, particularly in roles that
            combine tech, product thinking, and design — including VIE positions
            abroad.
            <br />
            <br />
            Let&apos;s build something meaningful together.
          </p>
        </div>
      </div>

      <div id="experiences" className={style.experiences}>
        <div className={style.content}>
          <p className={style.description}>
            📍 Picsellia – Software Engineer (Jun 2023 – Present)
            <br />
            At Picsellia, I contributed to the development and maintenance of a
            comprehensive AI lifecycle management platform. I played a key role
            in implementing an internal UI kit, modernizing the front-end, and
            streamlining design consistency across the application. I also
            suggested and integrated new technologies that improved our
            development workflows and deployment efficiency.
            <br />
            <br />
            📍 Listn – Front-End Developer Intern (Apr 2022 – Jul 2022)
            <br />
            During my internship at Listn, I enhanced the web app&apos;s design
            and overall user experience by redesigning key UI elements. I also
            participated in the open beta deployment, helping deliver a stable
            and engaging product for early adopters. This experience sharpened
            my skills in user feedback integration and iterative development.
            <br />
            <br />
            📍 Bleemeo – Mobile Developer Intern (Oct 2021 – Feb 2022)
            <br />
            At Bleemeo, I focused on finalizing and deploying the mobile app to
            the iOS store. I improved the user interface and optimized the
            mobile UX, aligning the application with Apple&apos;s guidelines and
            enhancing usability for system monitoring on the go.
            <br />
            <br />
            📍 EPITECH – Hub Coordinator (Sep 2021 – Mar 2022)
            <br />
            As Hub Coordinator, I managed student projects and ensured the
            smooth running of educational activities. I supervised peer learning
            sessions, validated projects, and supported fellow students,
            building leadership and organizational skills that complement my
            technical background.
            <br />
            <br />
            📍 Bleemeo – Front-End Developer Intern (Jul 2020 – Dec 2020)
            <br />
            In this earlier internship at Bleemeo, I contributed to improving
            the web app&apos;s interface and developed reusable React components
            to support new features. This role helped deepen my knowledge of
            scalable component architecture and sharpened my UI/UX sensibility.
          </p>
        </div>
      </div>

      <div id="projects" className={style.projects}>
        <div className={style.content}>
          <p className={style.description}>
            📍 Nema Studio – End-of-Studies Project
            <br />
            Nema Studio was a 3-year collaborative end-of-studies project
            developed by a team of six students, including myself, with the
            ambitious goal of creating a next-generation Digital Audio
            Workstation (DAW). Our vision was to design a tool that would bring
            live collaboration to music production—a &quot;Figma for
            audio&quot;—allowing multiple users to compose, edit, and mix music
            together in real time via the browser.
            <br />
            I led the UI/UX design efforts, producing detailed mockups and
            interaction flows using Figma to ensure a smooth, creative user
            experience. On the technical side, I developed the front-end
            interface using Svelte, integrating it with a high-performance audio
            engine written in Rust and compiled to WebAssembly for browser
            compatibility. The project pushed us to explore innovative solutions
            at the intersection of design, web performance, and real-time
            collaboration.
            <br />
            Nema Studio was awarded Best Project on our EPITECH Toulouse campus
            (out of 6 projects) and later earned the title of Best Project at
            the national level among 17 EPITECH campuses across France. This
            recognition marked a highlight of my academic path and underscored
            the impact of our work both technically and creatively.
            <br />
            <br />
            📍 L&apos;aller Simple – Website Design & Development Project
            <br />
            For this personal project, I designed, developed, and deployed a
            complete website for L&apos;aller Simple, a rural holiday cottage. I
            began by creating user-focused mockups in Figma to reflect the cozy,
            inviting atmosphere of the cottage. I then implemented the front-end
            using responsive web technologies, ensuring a smooth experience
            across all devices. The site includes a reservation feature,
            enabling visitors to book their stays directly online, and also acts
            as a landing page to showcase the property&apos;s key features and
            visual identity. This project demonstrated my ability to manage an
            end-to-end web solution—from design to deployment—while balancing
            functionality and aesthetic appeal.
          </p>
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
              placeholder="Wanna hear back? Add your email"
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
