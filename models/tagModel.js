const connection = require('../connexion');

const TABLE = 'tag';

const findAllTag = () => connection.promise().query(`SELECT * FROM ${TABLE}`);

module.exports = {
  findAllTag,
};
