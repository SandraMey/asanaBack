const connection = require('../connexion');

const TABLE = 'yogaType';

const findAllYoga = () => connection.promise().query(`SELECT * FROM ${TABLE}`);

const findOneById = (id) => connection.promise().query(`SELECT * FROM ${TABLE} WHERE id = ?`, [id]);

const deleteYoga = (id) => connection.promise().query(`DELETE FROM ${TABLE} WHERE id = ?`, [id]);

const createYoga = ({
  title,
  intro,
  subtitle1,
  text1,
  subtitle2,
  text2,
}, picture) => connection.promise().query(`INSERT INTO ${TABLE} (title, intro, subtitle1, text1, subtitle2, text2, picture) VALUES ( ?, ?, ?, ?, ?, ?, ?)`, [title, intro, subtitle1, text1, subtitle2, text2, picture]);

module.exports = {
  findAllYoga,
  findOneById,
  deleteYoga,
  createYoga
};
