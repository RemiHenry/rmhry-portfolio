import Head from "next/head";
import style from "../styles/About.module.css";

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
        <h1>About</h1>
      </div>
    </div>
  );
}
