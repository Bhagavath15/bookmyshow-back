import express from "express";
import {
    getTheatre,
    postTheatre,
    deleteTheatre,
    updateTheatre
} from "../service/theatre.service.js"
const router = express.Router()

router.get("/booking", async function (request, response) {
    const result = await getTheatre()
    console.log(result)

    response.send(result)
})

router.post("/add-theatre", async function (request, response) {
    const data = request.body
    console.log(data)
    //db.movies.insertMany()
    const result = await postTheatre(data)
    console.log(result)
})

router.delete('/theatre/:id', async function (request, response) {
    const { id } = request.params
    // const movie = movies.find((mv) => mv.id === id)
    console.log(id)

    const result = await deleteTheatre(id);
    console.log(result)
    result.deletedCount >= 1
        ? response.send({ message: "Theatre deleted successfully" })
        : response.status(404).send({ message: "Theatre is not found" })
})

router.put("/booking/edit-theatre/:id", async function (request, response) {
    const { id } = request.params
    const data = request.body
    console.log(data)
    // const movie = movies.find((mv) => mv.id === id)
    console.log(id)

    const result = await updateTheatre(id, data);
    console.log(result)
    response.send(result)
})

export default router