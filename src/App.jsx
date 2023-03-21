import { Layout } from "./components/Layout";
import { AlbumList } from "./features/TopAlbums/AlbumList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Layout>
        <QueryClientProvider client={queryClient}>
          <AlbumList />
        </QueryClientProvider>
      </Layout>
    </>
  );
}

export default App;
