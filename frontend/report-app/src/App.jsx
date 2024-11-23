import React from "react";
import AppRouter from "./routes/AppRouter";
import Navbar from "./components/shared/Navbar";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient()

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <QueryClientProvider client={queryClient}>
        <AppRouter />
        <Toaster />
      </QueryClientProvider>
    </div>
  );
};

export default App;
