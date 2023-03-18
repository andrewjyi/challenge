import Layout from "./components/Layout/Layout";
import Sidebar from "./components/Sidebar/Sidebar";
import useTopAlbums from "./hooks/useTopAlbums";

const Album = ({ info, index }) => {
  const handleClick = () => {
    console.log('modal open');
    // open modal with all info?
  };

  return (
    <li onClick={() => handleClick}>
      <picture className="drop-shadow-xl">
        <img
          className="h-60 w-60 rounded"
          meta={info["im:name"].label}
          src={info["im:image"][2].label}
        />
      </picture>
      <div className="text-xs mt-2">
        <div className="font-semibold">{index}</div>
        <div className="font-light">{info["im:name"].label}</div>
        <div className="font-extralight">{info["im:artist"].label}</div>
      </div>
    </li>
  );
};

const AlbumList = () => {
  const albums = useTopAlbums(
    "https://itunes.apple.com/us/rss/topalbums/limit=10/json"
  );

  return (
    <section>
      <ul className="grid grid-cols-5 gap-6">
        {albums &&
          albums.feed?.entry?.map((album, i) => (
            <Album
              key={album.id?.attributes["im:id"]}
              info={album}
              index={i + 1}
            />
          ))}
      </ul>
    </section>
  );
};

function App() {
  return (
    <>
      <Layout>
        <Sidebar />
        <AlbumList />
      </Layout>
    </>
  );
}

export default App;
