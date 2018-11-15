"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbConfig = void 0;

var dbConfig = function dbConfig() {
  return process.env.NODE_ENV == 'production' ? 'MONGODB_URI' : 'mongodb://localhost:27017/movie';
};

exports.dbConfig = dbConfig;