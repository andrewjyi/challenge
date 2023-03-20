import { Layout } from "./components/Layout";
import { AlbumList } from "./features/TopAlbums/AlbumList";

function App() {
  return (
    <>
      <Layout>
        <AlbumList />
      </Layout>
    </>
  );
}

export default App;
