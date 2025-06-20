import style from "../styles/Layout.module.css";
import localFont from "next/font/local";

const janger = localFont({
  src: "../../fonts/Janger.ttf",
});

const Layout = () => {
  return (
    <div className={style.container}>
      <div className={style.layout}>
        <a href="/" className={`${style.logo} ${janger.className}`}>
          RH
        </a>
        <a href="/about" className={style.option}>About Me</a>
        <a href="/projects" className={style.option}>Projects</a>
        <a href="/contact" className={style.option}>Contact</a>
      </div>
    </div>
  );
};

export default Layout;
