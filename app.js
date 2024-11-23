import express from 'express'
import { films } from './filmsData.js'

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.json(films)
})

app.post('/', (req, res) => {
  const newFilm = req.body;
  films.push(newFilm);
  res.send('Nueva pelicula agregada')
})

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})