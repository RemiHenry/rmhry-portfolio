import Link from "next/link";
import style from "../styles/Layout.module.css";
import localFont from "next/font/local";
import { Icon } from "@iconify/react";

const janger = localFont({
  src: "../../fonts/Janger.ttf",
});

const Layout = () => {
  return (
    <div className={style.container}>
      <div className={style.layout}>
        <Link
          href="#"
          className={`${style.logo} ${janger.className} ${style.tooltip}`}
        >
          <span className={style.tooltiptext}>Home</span>
          RH
        </Link>
        <Link href="#about" className={`${style.option} ${style.tooltip}`}>
          <span className={style.tooltiptext}>About Me</span>
          <Icon
            icon="octicon:person-16"
            className={style.icon}
            width={22}
            height={22}
          />
        </Link>
        <Link
          href="#experiences"
          className={`${style.option} ${style.tooltip}`}
        >
          <span className={style.tooltiptext}>Experiences</span>
          <Icon
            icon="octicon:briefcase-16"
            className={style.icon}
            width={22}
            height={22}
          />
        </Link>
        <Link href="#projects" className={`${style.option} ${style.tooltip}`}>
          <span className={style.tooltiptext}>Projects</span>
          <Icon
            icon="octicon:file-directory-16"
            className={style.icon}
            width={22}
            height={22}
          />
        </Link>
        <Link href="#contact" className={`${style.option} ${style.tooltip}`}>
          <span className={style.tooltiptext}>Contact</span>
          <Icon
            icon="octicon:mail-16"
            className={style.icon}
            width={22}
            height={22}
          />
        </Link>
      </div>
    </div>
  );
};

export default Layout;
