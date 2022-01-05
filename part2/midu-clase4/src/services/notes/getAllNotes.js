import axios from 'axios'

const getAllNotes = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      const { data } = response;
      return data
    })
}

export default getAllNotes;