import Link from "next/link";
import style from "../styles/Layout.module.css";
import localFont from "next/font/local";

const janger = localFont({
  src: "../../fonts/Janger.ttf",
});

const Layout = () => {
  return (
    <div className={style.container}>
      <div className={style.layout}>
        <Link href="/" className={`${style.logo} ${janger.className}`}>
          RH
        </Link>
        <Link href="/about" className={style.option}>
          About Me
        </Link>
        <Link href="/experiences" className={style.option}>
          Experiences
        </Link>
        <Link href="/projects" className={style.option}>
          Projects
        </Link>
        <Link href="/contact" className={style.option}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Layout;
