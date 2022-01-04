import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
    .then(response => {
      const {data} = response;
      setCountries(data);
    })
    .catch(err => console.error(err));
  }, [newFilter]);
  
  const handleFilterInput = (event) => {
    setNewFilter(event.target.value);
  }

  return (
    <div className="App">
      <div>
        Find countries: <input type="text" onChange={handleFilterInput}/>
      </div>
      <h2>Countries</h2>
        {
          countries
          .filter((country) => {
            if (country.name.common.toLowerCase().includes(newFilter.toLocaleLowerCase()) === true){
              return country
            }
          })
          .map((country) => {
            return <p key={country.population + country.area}>{country.name.common}</p>
          })
        }
    </div>
  );
}

export default App;
