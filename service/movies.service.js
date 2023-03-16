import { client } from "../index.js";

export async function postMovies(data) {
    return await client.db("database").collection("movies").insertOne(data);
}

export async function getMovieById(id) {
    return await client.db("database").collection("movies").findOne({ id: id });
}
export async function getMovies() {
    return await client
        .db("database")
        .collection("movies")
        .find({})
        .toArray();
}