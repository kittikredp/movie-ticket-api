import express from 'express'
import routes from './app/routes/movie.routes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import {dbConfig} from './config/database.config.js'

const app = express()
const port = 3001

mongoose.Promise = global.Promise
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
	console.log("Successfully connected to the database")    
}).catch(err => {
	console.log('Could not connect to the database. Exiting now...', err)
	process.exit()
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

routes(app) 

app.listen(port, () => {
    console.log("Server is listening on port 3000")
})