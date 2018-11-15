export const dbConfig = () => {
	return process.env.NODE_ENV == 'production' ? process.env.MONGODB_URI : 'mongodb://localhost:27017/movie'
}