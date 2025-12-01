const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://localhost:27017/Movie_Reviewing_Website").then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:\n", err);
});


const movieSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    genre: {
        type: [String],
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
})


const Movie = mongoose.model("Movies", movieSchema);


app.post("/Add_Movies", async (req, res) => {
    const {id, name, genre, rating, image} = req.body

    const result = await Movie.create({
        id,
        name,
        genre,
        rating,
        image
    })

    res.send({message: "Movie Added Successfully"});
})


app.get("/Get_Movies", async (req, res) => {
    const movies = await Movie.find({})
    res.send(movies);
})


app.listen(5001, () => {
    console.log("Server is running on port 5001");
})