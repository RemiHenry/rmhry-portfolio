import Head from "next/head";
import style from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>RmHry • Projects</title>
        <meta
          name="description"
          content="This portfolio list all my realization, my resume, but also a form to contact me."
        />
        <link
          href="https://fonts.cdnfonts.com/css/janger"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.container}>
        <div className={style.content}>
          <p className={style.description}>
            📍 Nema Studio – End-of-Studies Project
            <br />
            Nema Studio was a 3-year collaborative end-of-studies project
            developed by a team of six students, including myself, with the
            ambitious goal of creating a next-generation Digital Audio
            Workstation (DAW). Our vision was to design a tool that would bring
            live collaboration to music production—a "Figma for audio"—allowing
            multiple users to compose, edit, and mix music together in real time
            via the browser.
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
            📍 L’aller Simple – Website Design & Development Project
            <br />
            For this personal project, I designed, developed, and deployed a
            complete website for L’aller Simple, a rural holiday cottage. I
            began by creating user-focused mockups in Figma to reflect the cozy,
            inviting atmosphere of the cottage. I then implemented the front-end
            using responsive web technologies, ensuring a smooth experience
            across all devices. The site includes a reservation feature,
            enabling visitors to book their stays directly online, and also acts
            as a landing page to showcase the property’s key features and visual
            identity. This project demonstrated my ability to manage an
            end-to-end web solution—from design to deployment—while balancing
            functionality and aesthetic appeal.
          </p>
        </div>
      </div>
    </div>
  );
}
