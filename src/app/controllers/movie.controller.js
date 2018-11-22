import Movie from '../models/movie.model.js'
import {uploadPoster} from './uploadPoster'

export const createMovie = (req, res) => {
	uploadPoster(req, res,(error) => {
		if (error) {
			return res.status(400).send({
					message: error || "Upload failed."
				})
		} 
		if(!req.body) {
			return res.status(400).send({
					message: "Request body can not be empty"
				})
		}
		const movie = new Movie({
			title: req.body.title, 
			posterPath: req.file.location,
			overview: req.body.overview,
			ticketFee: req.body.ticketFee,
			releaseDate: req.body.releaseDate
		})
		
		movie.save().then(data => {
			console.log('inserting movie', data)
			res.send(data)
		}).catch(err => {
			res.status(500).send({
					message: err.message || "Some error occurred while creating the Note."
			})
		})
	})
}

export const findAllMovie = (req, res) => {
	Movie.find()
	.then(movies => {
			res.send(movies)
	}).catch(err => {
			res.status(500).send({
					message: err.message || "Some error occurred while retrieving notes."
			})
	})
}