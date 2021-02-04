const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    director: {
      type: String,
      required: true,
    },

    stars: {
      type: [String],
      required: true,
    },

    image: String,

    description: String,

    showtimes: [String],
  },
  { timestamp: true }
)

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie
