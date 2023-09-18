const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/myBookFace';

connect(connectionString);

module.exports = connection;
