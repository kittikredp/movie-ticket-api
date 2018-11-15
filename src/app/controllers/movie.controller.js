import Movie from '../models/movie.model.js'
import {uploadPoster} from './uploadPoster'

const getServerUrl = (req) => `${req.protocol}://${req.get('host')}`

export const createMovie = (req, res) => {
	uploadPoster(req, res,(error) => {
		if (error) {
			return res.status(400).send({
					message: "Upload failed."
				})
		} 
		if(!req.body) {
			return res.status(400).send({
					message: "Request body can not be empty"
				})
		}
		const posterPath = `${getServerUrl(req)}/poster/${req.file.filename}`
		const movie = new Movie({
			title: req.body.title, 
			posterPath: posterPath,
			overview: req.body.overview,
			ticketFee: req.body.ticketFee
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