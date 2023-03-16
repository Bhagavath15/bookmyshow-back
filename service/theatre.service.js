import { client } from "../index.js";

export function updateTheatre(id, data) {
    return client.db("database").collection("theatre").updateOne({ id: id }, { $set: data });
}
export function deleteTheatre(id) {
    return client.db("database").collection("theatre").deleteOne({ id: id });
}
export async function postTheatre(data) {
    return await client.db("database").collection("theatre").insertOne(data);
}

export async function getTheatre() {
    return await client
        .db("database")
        .collection("theatre")
        .find({})
        .toArray();
}