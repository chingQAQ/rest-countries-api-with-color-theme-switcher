import React, {useState, useEffect} from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import CardsList from '@/components/CardsList';
import axios from 'axios';

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(res => setCountries(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App bg-very-dark-blue">
      <Header/>
      <main className="container sm:max-w-full mx-auto py-10">
        <SearchBar/>
        <CardsList countries={countries.splice(0, 8)}></CardsList>
      </main>
    </div>
  );
}

export default App;
