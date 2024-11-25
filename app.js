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

app.delete('/film/:id', (req, res) => {
  const filmId = req.params.id;
  const inicio = films.findIndex(film => film.id === parseInt(filmId));
  users.splice(inicio, 1)
  res.send(`Got a DELETE request at /film ${filmId}`)
})

app.patch('/film/:id', (req, res) => {
  const filmId = req.params.id;
  const updateFilm = req.body;
  const film = films.find(film => film.id === parseInt(filmId));
  film.titulo = updateFilm.titulo;
  film.director = updateFilm.director;
  film.anio_estreno = updateFilm.anio_estreno;
  film.genero = updateFilm.genero;
  film.img = updateFilm.img
  res.send('Got a PUT request at /user')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})