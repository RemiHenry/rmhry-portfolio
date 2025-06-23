import { Icon } from "@iconify/react";
import style from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.container}>
      <section>
        <a href="mailto:remi.st@outlook.fr" className={style.mail}>
          <Icon icon="mdi:email" width="20" height="20" color="white" />
          remi.st@outlook.fr
        </a>
      </section>
      <section className={style.socials}>
        <div className={style.icons}>
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
        <p className={style.rights}>
          Made with ❤️ by Rémi Henry. All rights reserved ©{" "}
          {new Date().getFullYear()}
        </p>
      </section>
      <section>
        <p className={style.phone}>
          <Icon icon="mdi:phone" width="20" height="20" color="white" />
          (+33) 06.82.63.88.39
        </p>
      </section>
    </div>
  );
};

export default Footer;
