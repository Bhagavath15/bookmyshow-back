
import express from "express"; // "type": "module"
import { MongoClient } from 'mongodb'
import * as dotenv from 'dotenv'
import signinRouter from './router/login.router.js';
import moviesRouter from "./router/movies.router.js";
import theatreRouter from "./router/theatre.router.js";

import { auth } from "./middleware/auth.js";
import cors from "cors";

// import bcrypt   from ' bcrypt'
dotenv.config()
const app = express();

const PORT = process.env.PORT;

const MONGO_URL = (process.env.MONGO_URL)
export const client = new MongoClient(MONGO_URL);
await client.connect();
console.log('mongo is connected!!');

app.use(cors())
app.use(express.json())


app.get("/", auth, function (request, response) {
    response.send("🙋‍♂️, 🌏 🎊✨🤩");
});


app.use("/", moviesRouter)
app.use("/", theatreRouter)
app.use("/users", signinRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
