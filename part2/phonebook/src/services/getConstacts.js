import axios from 'axios'

const getContacts = () => {
    return axios.get('http://localhost:3001/persons')
    .then(response => {
      const { data } = response;
      return data
    })
}

export default getContacts;