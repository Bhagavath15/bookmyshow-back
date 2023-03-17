import express from "express";
import {
    getMovies,
    getMovieById,
    postMovies
} from "../service/movies.service.js"
const router = express.Router()

router.get("/movies", async function (request, response) {
    const movies = await getMovies()
    console.log(movies)

    response.send(movies)
})

router.get('/movies/:id', async function (request, response) {
    const { id } = request.params
    // const movie = movies.find((mv) => mv.id === id)
    console.log(id)

    const movie = await getMovieById(id)
    console.log(movie)
    movie ? response.send(movie) : response.status(404).send({ message: "Movie is not found" })
})

router.post("/addmovies", async function (request, response) {
    const data = request.body
    console.log(data)
    //db.movies.insertMany()
    const result = await postMovies(data)
    console.log(result)
})

export default router