const connection = require('../connexion');

const TABLE = 'tag';

const findAllTag = () => connection.promise().query(`SELECT title FROM ${TABLE}`);

const updateTag = (object, id) => connection.promise().query(`UPDATE ${TABLE} SET ? WHERE id = ?`, [object, id]);

module.exports = {
  findAllTag,
  updateTag
};
