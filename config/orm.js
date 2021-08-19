// Import MySQL connection.
const connection = require('./connection.js');

const orm = {
    selectAll(table, cb) {
        connection.query(`SELECT * FROM ${table}`, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },

    insertOne(reqBody, name, cb) {
        connection.query(`INSERT INTO ?? SET name = ?`, [reqBody, name], (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },

    updateOne(id, cb) {
        connection.query('UPDATE burgers SET eaten = 1 WHERE id = ?', [id], (err, result) => {
            if (err) throw err;
            cb(result)
        })
    }
}

// Export the orm object for the model (burgers.js).
module.exports = orm;