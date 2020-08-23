const mongoose = require('mongoose');
const { DB_HOST = 'mongodb://localhost' } = process.env;

mongoose.Promise = global.Promise;

function connect() {
  mongoose.set('debug', true);
  return mongoose.connect(DB_HOST, { useNewUrlParser: true });
}

module.exports = {
  connect,
  mongoose
};
