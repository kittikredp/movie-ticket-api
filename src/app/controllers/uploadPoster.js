import multer from 'multer'
import path from 'path'

/** Storage Engine */
const storageEngine = multer.diskStorage({
  destination: './public/poster',
  filename: function(req, file, fn){
		const filename = `${new Date().getTime().toString()}-${req.body.title}${path.extname(file.originalname)}`
    fn(null,  filename)
  }
}) 

export const uploadPoster =  multer({
  storage: storageEngine,
  limits: { fileSize:200000 }
}).single('poster')
