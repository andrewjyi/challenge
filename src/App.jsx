import { Suspense } from "react";
import { Layout } from "./components/Layout";
import { AlbumList } from "./features/TopAlbums/AlbumList";
import { Loading } from "./components/Loading/Loading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Layout>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<Loading />}>
            <AlbumList />
          </Suspense>
        </QueryClientProvider>
      </Layout>
    </>
  );
}

export default App;
