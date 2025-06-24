import Footer from "../components/footer/Footer";
import Layout from "../components/layout/Layout";
import Resume from "../components/resume/Resume";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout />
      <Resume />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
