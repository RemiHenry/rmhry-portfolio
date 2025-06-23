import Head from "next/head";
import style from "../styles/Home.module.css";
import localFont from "next/font/local";

const janger = localFont({
  src: "../fonts/Janger.ttf",
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>RmHry</title>
        <meta
          name="description"
          content="This portfolio list all my realization, my resume, but also a form to contact me."
        />
        <link
          href="https://fonts.cdnfonts.com/css/janger"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <div className={style.container}>
        <h1 className={`${style.title} ${janger.className}`}>Remi Henry</h1>
      </div>
    </div>
  );
}
