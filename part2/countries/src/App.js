import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import OneCountry from './components/OneCountry'
import CountryList from './components/CountryList'

function App() {

  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://restcountries.com/v3.1/all')
    .then(response => {
      setIsLoading(false);
      const {data} = response;
      setCountries(data);
    })
    .catch(err => console.error(err));
  }, []);

  const handleFilterInput = (event) => {
    setNewFilter(event.target.value);
  }

  let matchingCountriesNumber = 0

  for (let i = 0; i < countries.length; i++) {
    if (countries[i].name.common.toLowerCase().includes(newFilter.toLocaleLowerCase()) === true){
      matchingCountriesNumber++;
    }
  }


  return (
    <div className="App">
      <div>
        Find countries: <input type="text" onChange={handleFilterInput}/>
      </div>
      <h2>Countries</h2>
      {
        isLoading 
        ? 'Loading...' 
        : ''
      }
      { matchingCountriesNumber >= 10
        ? 'Too many matches, please be more specific' 
        : <CountryList countries={countries} newFilter={newFilter}/>
      }
      { 
        matchingCountriesNumber === 1 
        ? <OneCountry countries={countries} newFilter={newFilter}/>
        : '' 
      }
    </div>
  );
}

export default App;
