import axios from 'axios'

const addContact = ({name, number, id}) => {
    return axios.post('http://localhost:3001/persons', {name, number, id})
    .then(response => {
      const { data } = response;
      return data
    })
}

export default addContact