import Head from "next/head";
import style from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>RmHry • Contact</title>
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
        <h1>Contact</h1>
      </div>
    </div>
  );
}
