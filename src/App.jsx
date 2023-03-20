import { Layout } from "./components/Layout";
import useTopAlbums from "./hooks/useTopAlbums";
import Album from "./features/TopAlbums/Album";
import { Suspense, useEffect, useState } from "react";

const Search = (list) => {
  
};

const AlbumList = () => {
  const [topAlbums, setTopAlbums] = useState(null);

  const albums = useTopAlbums(
    "https://itunes.apple.com/us/rss/topalbums/limit=10/json"
  );

  useEffect(() => {
    setTopAlbums(albums);
  }, []);

  return (
    <section>
      <Search />
      <ul className="grid grid-cols-6 gap-2">
        <Suspense fallback={"<div>Loading...</div>"}>
          {topAlbums &&
            topAlbums.feed?.entry?.map((album, i) => (
              <Album
                key={album.id?.attributes["im:id"]}
                info={album}
                index={i + 1}
              />
            ))}
        </Suspense>
      </ul>
    </section>
  );
};

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
