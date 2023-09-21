import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./ui/AppLayout";
import Overview from "./Pages/Overview";
import News from "./Pages/News";
import Indices from "./Pages/Indices";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 10000,
    },
  },
});

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="overview" />} />
              <Route path="overview" element={<Overview />} />
              <Route path="news" element={<News />} />
              <Route path="indices" element={<Indices />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
