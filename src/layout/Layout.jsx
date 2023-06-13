import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useEffect } from "react";

const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />
      <main style={{ paddingTop: "100px" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
