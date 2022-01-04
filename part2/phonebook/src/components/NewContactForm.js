const NewContactForm = ({handleSubmit, handleNumberInput, handleInput, newNumber, newName}) => {
    return (
         <form onSubmit={handleSubmit}>
            <h3>Add a new</h3>
            <div>
                number: <input type="text" onChange={handleNumberInput} value={newNumber}/>
            </div>
            <div>
                name: <input type="text" onChange={handleInput} value={newName}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default NewContactForm