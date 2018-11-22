import multer from 'multer'
import aws from 'aws-sdk'
import multerS3 from 'multer-s3'
import path from 'path'

aws.config.update({
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	region: 'ap-southeast-1'
})

const s3 = new aws.S3({ /* ... */ })

const storageEngine = multerS3({
	s3: s3,
	bucket: 'movie-ticket-api',
	acl: 'public-read',
	key: function (req, file, cb) {
		const filename = `${new Date().getTime().toString()}-${req.body.title}${path.extname(file.originalname)}`
		cb(null, 'poster/'+filename)
	}
})

export const uploadPoster =  multer({
  storage: storageEngine,
  limits: { fileSize:200000 }
}).single('poster')
