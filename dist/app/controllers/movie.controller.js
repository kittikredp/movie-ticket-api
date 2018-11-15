"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAllMovie = exports.createMovie = void 0;

var _movieModel = _interopRequireDefault(require("../models/movie.model.js"));

var _uploadPoster = require("./uploadPoster");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getServerUrl = function getServerUrl(req) {
  return "".concat(req.protocol, "://").concat(req.get('host'));
};

var createMovie = function createMovie(req, res) {
  (0, _uploadPoster.uploadPoster)(req, res, function (error) {
    if (error) {
      return res.status(400).send({
        message: "Upload failed."
      });
    }

    if (!req.body) {
      return res.status(400).send({
        message: "Request body can not be empty"
      });
    }

    var posterPath = "".concat(getServerUrl(req), "/poster/").concat(req.file.filename);
    var movie = new _movieModel.default({
      title: req.body.title,
      posterPath: posterPath,
      overview: req.body.overview,
      ticketFee: req.body.ticketFee
    });
    movie.save().then(function (data) {
      console.log('inserting movie', data);
      res.send(data);
    }).catch(function (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Note."
      });
    });
  });
};

exports.createMovie = createMovie;

var findAllMovie = function findAllMovie(req, res) {
  _movieModel.default.find().then(function (movies) {
    res.send(movies);
  }).catch(function (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving notes."
    });
  });
};

exports.findAllMovie = findAllMovie;