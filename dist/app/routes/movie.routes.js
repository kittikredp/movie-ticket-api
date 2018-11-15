"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _movie = require("../controllers/movie.controller");

var routes = function routes(app) {
  app.route('/movie').get(_movie.findAllMovie).post(_movie.createMovie); // app.route('/movie/:movieId')
  // 	.get()
};

var _default = routes;
exports.default = _default;