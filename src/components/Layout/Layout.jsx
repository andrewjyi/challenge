import { Header } from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="max-w-full pl-5">{children}</main>
    </>
  );
};

export { Layout };
