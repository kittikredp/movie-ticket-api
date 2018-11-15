import mongoose from 'mongoose'

const MovieSchema = mongoose.Schema({
	title: String,
	overview: String,
	posterPath: String,
	ticketFee: Number
}, {
		timestamps: true
})

const MovieModel = mongoose.model('movies', MovieSchema);

export default MovieModel