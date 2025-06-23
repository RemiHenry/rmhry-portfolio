import Footer from "../components/footer/Footer";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import bg from "../images/bg.png";

function MyApp({ Component, pageProps }) {
  return (
    <div
      style={{
        backgroundImage: location.pathname === "/" ? `url(${bg.src})` : "",
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
