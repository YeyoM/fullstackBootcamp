const OneCountry = ({countries, newFilter}) => {
    return (
        <div>
            {
                countries
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
            }
        </div>
    )
}

export default OneCountry