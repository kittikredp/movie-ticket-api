import { createMovie, findAllMovie } from '../controllers/movie.controller'

const routes = (app) => {
	app.route('/movie')
		.get(findAllMovie)
		.post(createMovie)
	// app.route('/movie/:movieId')
	// 	.get()
}

export default routes