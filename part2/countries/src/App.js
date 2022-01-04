import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

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
        : countries
          .filter((country) => {
            if (country.name.common.toLowerCase().includes(newFilter.toLocaleLowerCase()) === true){
              return country
            }
          })
          .map((country) => {
            return (
              <h3 key={country.population + country.area}>{country.name.common}</h3>
            )
          }) 
      }
      { matchingCountriesNumber === 1 
        ? countries
          .filter((country) => {
            if (country.name.common.toLowerCase().includes(newFilter.toLocaleLowerCase()) === true){
              return country
            }
          })
          .map((country) => {
            return (
              <div key={country.population + country.area}>
                <p>Capital:    {country.capital}</p>
                <p>Population: {country.population}</p>
                <h4>Languages</h4>
                  {
                    Object.values(country.languages).map((lang) => {
                      return (
                        <p>{lang}</p>
                      )
                    })
                  }
                <img src={country.flags.png} alt="Flag" />
              </div>
            )
          })
        : '' 
      }
    </div>
  );
}

export default App;
