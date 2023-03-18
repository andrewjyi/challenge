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
      <nav>nav</nav>
      <aside>sidebar</aside>
    </Layout>
  );
}

export default App;
