const connection = require('../connexion');

const TABLE = 'yoga';

const findAllYoga = () => connection.promise().query(`SELECT * FROM ${TABLE}`);

module.exports = {
  findAllYoga,
};
