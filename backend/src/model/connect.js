const { MongoClient } = require('mongodb');

// Configurações de conexão com o MongoDB
const url = 'mongodb://localhost:27017';
const dbName = 'nome_sobrenome';

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = () => client.db(dbName);

module.exports = {
  client,
  db
};