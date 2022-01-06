import Contact from './Contact';

const Numbers = ({persons, newFilter, handleDelete, handleDeleteClick}) => {
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
                  return (
                    <form onSubmit={handleDelete} key={person.id}>
                      <Contact key={person.id} {...person}/> <button key={person.id} onClick={(e) => {handleDeleteClick(person.id, e)}}>Delete</button>
                    </form>
                  )
            })}
        </div> 
    )
}

export default Numbers