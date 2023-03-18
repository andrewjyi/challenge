import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="inline-flex">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
