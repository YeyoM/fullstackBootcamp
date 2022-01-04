import Contact from './Contact';

const Numbers = ({persons, newFilter}) => {
    return (
        <div>   
            <h2>Numbers</h2>
            {persons
                .filter((person) => {
                  if (person.name.toLowerCase().includes(newFilter.toLowerCase()) === true) {
                    return person
                  }
                })
                .map((person) => {
                  return <Contact key={person.id} {...person}/>
            })}
        </div> 
    )
}

export default Numbers