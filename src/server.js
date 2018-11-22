import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './app/routes/movie.routes'
import {dbConfig} from './config/database.config.js'

const app = express()
const port = process.env.NODE_ENV == 'production' ? process.env.PORT:3001

mongoose.Promise = global.Promise

console.log('getting dbb url', dbConfig())
mongoose.connect(dbConfig(), {
	useNewUrlParser: true
}).then(() => {
	console.log("Successfully connected to the database")    
}).catch(err => {
	console.log('Could not connect to the database. Exiting now...', err)
	process.exit()
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

routes(app) 

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})