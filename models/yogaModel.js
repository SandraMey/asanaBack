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
  id_tag,
}, picture) => connection.promise().query(`INSERT INTO ${TABLE} (title, intro, subtitle1, text1, subtitle2, text2, id_tag,picture) VALUES ( ?, ?, ?, ?, ?, ?, ?, ? )`, [title, intro, subtitle1, text1, subtitle2, text2, id_tag, picture]);

const findOneByTitle = (title) => connection.promise().query('SELECT * FROM ${TABLE} WHERE title = ?', [title]);

const findOneByTag = (tagId) => connection.promise().query(`SELECT * FROM ${TABLE} WHERE id_tag = ?`, [tagId]);

module.exports = {
  findAllYoga,
  findOneById,
  deleteYoga,
  createYoga,
  findOneByTitle,
  findOneByTag,
};
