import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "100px" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
