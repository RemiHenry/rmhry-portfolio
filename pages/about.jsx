import Head from "next/head";
import style from "../styles/About.module.css";
import remi from "../images/remi.jpg";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Head>
        <title>RmHry • About</title>
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
            and intuitive design. I'm equally comfortable writing clean
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
    </div>
  );
}
