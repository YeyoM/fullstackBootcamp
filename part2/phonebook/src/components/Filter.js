const Filter = ({handleFilterInput, newFilter}) => {
    return (
        <div>
            <h2>Phonebook</h2>
            <div>
              filter shown with: <input type="text" onChange={handleFilterInput} value={newFilter}/>
            </div>
        </div>
    )
}

export default Filter