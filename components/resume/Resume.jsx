import Link from "next/link";
import style from "../styles/Resume.module.css";
import localFont from "next/font/local";
import { Icon } from "@iconify/react";

const janger = localFont({
  src: "../../fonts/Janger.ttf",
});

const Resume = () => {
  const pdfFile = "/resume_Remi-Henry.pdf";

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.setAttribute("download", "resume_Remi-Henry.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={style.container}>
      <div className={style.layout}>
        <button
          className={`${style.tooltip} ${style.option}`}
          onClick={downloadPdf}
        >
          <span className={style.tooltiptext}>Resume</span>
          <Icon icon="octicon:download-16" width={22} height={22} />
        </button>
      </div>
    </div>
  );
};

export default Resume;
