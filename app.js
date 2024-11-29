import express from 'express'
import { films } from './filmsData.js'

const app = express()
const port = 3000

app.use(express.json())

app.get('/films', (req, res) => {
  res.json(films)
})

app.get('/film/:id', (req, res) => {
  const filmId = req.params.id;
  const film = films.find(film => film.id === parseInt(filmId));
  if (!film) {
    return res.status(404).send(`La pelicula ${filmId} no fue encontrada`)
  }
  console.log(film);
  res.json(film)
})

app.post('/film', (req, res) => {
  const newFilm = req.body;
  films.push(newFilm);
  res.send('Nueva pelicula agregada')
})

app.delete('/film/:id', (req, res) => {
  const filmId = req.params.id;
  const inicio = films.findIndex(film => film.id === parseInt(filmId));
  films.splice(inicio, 1)
  res.send(`La pelicula ${filmId} fue eliminada con exito`)
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
  res.send(`La pelicula ${filmId} fue modificada correctamente`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})