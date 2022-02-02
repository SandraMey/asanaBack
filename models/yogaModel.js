const connection = require('../connexion');

const TABLE = 'yogaType';

const findAllYoga = () => connection.promise().query(`SELECT * FROM ${TABLE}`);

module.exports = {
  findAllYoga,
};
