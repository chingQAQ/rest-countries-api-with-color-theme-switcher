import React from 'react';
import { Header } from '@/components';
import { Home, Detail } from '@/pages';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

function App() {

  return (
    <div className="App bg-very-light-gray dark:bg-very-dark-blue">
      <Header/>
      <main className="container sm:max-w-full mx-auto py-10">
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detail/:name" element={<Detail />} />
          </Routes>
        </QueryClientProvider>
      </main>
    </div>
  );
}

export default App;
