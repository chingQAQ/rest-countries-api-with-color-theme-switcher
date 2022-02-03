import React from 'react';
import { Header } from '@/components';
import { Home } from '@/pages';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {

  return (
    <div className="App bg-very-light-gray dark:bg-very-dark-blue">
      <Header/>
      <main className="container sm:max-w-full mx-auto py-10">
        <QueryClientProvider client={queryClient}>
          <Home></Home>
        </QueryClientProvider>
      </main>
    </div>
  );
}

export default App;
