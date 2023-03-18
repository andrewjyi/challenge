const Layout = ({ children }) => {
  return (
    <div>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

function App() {
  return (
    <Layout>
      <nav className="text-3xl font-bold underline">nav</nav>
      <aside>sidebar</aside>
    </Layout>
  );
}

export default App;
