"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MovieSchema = _mongoose.default.Schema({
  title: String,
  overview: String,
  posterPath: String,
  ticketFee: Number
}, {
  timestamps: true
});

var MovieModel = _mongoose.default.model('movies', MovieSchema);

var _default = MovieModel;
exports.default = _default;