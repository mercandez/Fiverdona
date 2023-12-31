const getDB = require('../../getDB');

const { generateError } = require('../../../helpers');

const insertResolvedQuery = async (value, serviceId, userId) => {
  let connection;

  try {
    connection = await getDB();

    // Comprobamos si el usuario ya ha finalizado la tarea.
    let [services] = await connection.query(
      `SELECT resolved FROM services WHERE Id = ?`,
      [userId, serviceId]
    );

    if (services[0].resolved) {
      generateError('Ya has finalizado esta tarea.', 403);
    }

    // Marcamos la tarea como resuelta.
    await connection.query(`UPDATE services SET resolved = true WHERE Id = ?`, [
      serviceId,
    ]);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = insertResolvedQuery;
