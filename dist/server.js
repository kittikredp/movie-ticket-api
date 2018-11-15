"use strict";

var _express = _interopRequireDefault(require("express"));

var _movie = _interopRequireDefault(require("./app/routes/movie.routes"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _databaseConfig = require("./config/database.config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var port = process.env.NODE_ENV == 'production' ? process.env.PORT : 3001;
_mongoose.default.Promise = global.Promise;
console.log('getting dbb url', (0, _databaseConfig.dbConfig)());

_mongoose.default.connect((0, _databaseConfig.dbConfig)(), {
  useNewUrlParser: true
}).then(function () {
  console.log("Successfully connected to the database");
}).catch(function (err) {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

app.use(_express.default.static('public'));
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use(_bodyParser.default.json());
(0, _movie.default)(app);
app.listen(port, function () {
  console.log("Server is listening on port ".concat(port));
});