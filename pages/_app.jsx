import Footer from "../components/footer/Footer";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import bg from "../images/bg.png";
import { usePathname } from "next/navigation";

function MyApp({ Component, pageProps }) {
  const pathname = usePathname();

  return (
    <div
      style={{
        backgroundImage: pathname === "/" ? `url(${bg.src})` : "",
        backgroundSize: "cover",
      }}
    >
      <Layout />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
