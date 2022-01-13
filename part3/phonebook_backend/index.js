const express = require('express')
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3001
const morgan = require('morgan')

app.use(morgan('tiny'))

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456'
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523'
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345'
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122'
  }
]

app.get('/info', (req, res) => {
  const date = new Date()
  res.send(`<p>Phoneebook has info for ${persons.length} persons</p><p>${date}</p>`)
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
})

app.post('/api/persons', (req, res) => {
  const person = req.body

  if (!person || !person.name || !person.number) {
    res.status(400).json({ message: 'name or number missing' })
  }

  const ids = persons.map(person => person.id)
  const maxId = Math.max(...ids)

  const newPerson = {
    id: maxId + 1,
    name: person.name,
    number: person.number
  }

  persons = [...persons, newPerson]

  res.json(newPerson)
})

const server = app.listen(PORT, () => {
  console.log(`server en puerto ${PORT}`)
})

module.exports = { server, app }
