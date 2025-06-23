import Head from "next/head";
import style from "../styles/Experiences.module.css";

export default function Experiences() {
  return (
    <div>
      <Head>
        <title>RmHry • Experiences</title>
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
            the web app&apos;s interface and developed reusable React components to
            support new features. This role helped deepen my knowledge of
            scalable component architecture and sharpened my UI/UX sensibility.
          </p>
        </div>
      </div>
    </div>
  );
}
