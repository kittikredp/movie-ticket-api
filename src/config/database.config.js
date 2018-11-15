export const dbConfig = () => {
	return process.env.NODE_ENV == 'production' ? 'MONGODB_URI' : 'mongodb://localhost:27017/movie'
}