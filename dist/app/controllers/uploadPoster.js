"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadPoster = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Storage Engine */
var storageEngine = _multer.default.diskStorage({
  destination: './public/poster',
  filename: function filename(req, file, fn) {
    var filename = "".concat(new Date().getTime().toString(), "-").concat(req.body.title).concat(_path.default.extname(file.originalname));
    fn(null, filename);
  }
});

var uploadPoster = (0, _multer.default)({
  storage: storageEngine,
  limits: {
    fileSize: 200000
  }
}).single('poster');
exports.uploadPoster = uploadPoster;