const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'nome_sobrenome';

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function insertUser(user) {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('users');
    const result = await collection.insertOne(user);
    console.log('Usuário inserido com sucesso!');
    return result;
  } catch (err) {
    console.error('Erro ao inserir usuário:', err);
    throw err;
  } finally {
    client.close();
  }
}

async function getUserByCPF(cpf) {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('users');
    const user = await collection.findOne({ cpf: cpf });
    return user;
  } catch (err) {
    console.error('Erro ao buscar usuário por CPF:', err);
    throw err;
  } finally {
    client.close();
  }
}

async function getAllUsers() {
  try {
    await client.connect();
    const collection = db.collection('users');
    const db = client.db(dbName);
    const users = await collection.find().toArray();
    return users;
  } catch (err) {
    console.error('Erro ao buscar todos os usuários:', err);
    throw err;
  } finally {
    client.close();
  }
}

module.exports = {
  insertUser,
  getUserByCPF,
  getAllUsers
};