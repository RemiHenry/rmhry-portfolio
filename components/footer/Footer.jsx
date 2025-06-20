import { Icon } from "@iconify/react";
import style from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.container}>
      <Link
        href="https://github.com/RemiHenry"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="mdi:github" width="24" height="24" color="white" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/remi-henry/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="mdi:linkedin" width="24" height="24" color="white" />
      </Link>
    </div>
  );
};

export default Footer;
